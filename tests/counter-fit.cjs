/* Offline, real-browser checks for the five requests in the second Word file. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {spawn} = require('node:child_process');
const delay = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'tiemtra-counter-fit-'));
  const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',
    ['--headless=new', '--disable-gpu', '--no-first-run', '--no-sandbox', '--allow-file-access-from-files', '--remote-debugging-port=0', '--user-data-dir='+profile, 'about:blank'],
    {windowsHide: true, stdio: 'ignore'});
  let socket, checks = 0;
  const errors = [];
  try {
    const portFile = path.join(profile, 'DevToolsActivePort');
    for (let i=0; !fs.existsSync(portFile) && i<100; i++) await delay(100);
    const port = fs.readFileSync(portFile, 'utf8').split('\n')[0];
    const pages = await (await fetch('http://127.0.0.1:'+port+'/json')).json();
    socket = new WebSocket(pages.find(p=>p.type==='page').webSocketDebuggerUrl);
    await new Promise((r,j)=>{socket.onopen=r;socket.onerror=j;});
    let id=0; const pending=new Map();
    socket.onmessage = e => {
      const m=JSON.parse(e.data);
      if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result);}
      if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
    };
    const send=(method,params={})=>new Promise((resolve,reject)=>{const requestId=++id;pending.set(requestId,{resolve,reject});socket.send(JSON.stringify({id:requestId,method,params}));});
    const run=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description);return r.result.value;};
    const check=(v,msg)=>{assert.ok(v,msg);checks++;};
    await send('Runtime.enable'); await send('Page.enable'); await send('Network.enable');
    await send('Network.emulateNetworkConditions',{offline:true,latency:0,downloadThroughput:0,uploadThroughput:0});
    await send('Emulation.setDeviceMetricsOverride',{width:360,height:640,deviceScaleFactor:1,mobile:true});
    await send('Page.navigate',{url:pathToFileURL(path.resolve('index.html')).href});
    for(let i=0;i<100 && !await run('!!window.debugGame');i++)await delay(100);
    await run(`var D=debugGame;D.S.settings.tutorialDone=true;D.S.settings.hints=false;D.S.settings.tut={home:true,sell:false};
      document.querySelector('[data-act=play]').click();D.S.settings.tutorialDone=true;D.S.settings.hints=false;D.S.settings.tut={home:true,sell:false};D.unlockAll();D.fillStock(100);D.G.startShift();
      D.S.settings.tut.sell=true;D.flush();D.speed(0);D.SH.ev.bo=[];D.SH.ev.ins=[];`);
    // All flavors and topping columns are present: test the largest counter content.
    for(const [width,height] of [[320,568],[360,640],[393,740],[412,844],[520,900],[640,360]]){
      await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:true});
      await delay(150); await run('D.counterFrame()');
      const r=await run(`(()=>{const v=document.querySelector('#view'),s=document.querySelector('#sell'),f=document.querySelector('#lobbyGo');const vr=v.getBoundingClientRect(),fr=f.getBoundingClientRect();return {overflow:v.scrollHeight-v.clientHeight,rootOverflow:s.scrollHeight-s.clientHeight,foot:fr.bottom<=vr.bottom+1,controls:[...s.querySelectorAll('.supply-row,.equip-strip,#flavs,#trays,.shelf')].every(x=>x.getBoundingClientRect().bottom<=vr.bottom+1),height:s.clientHeight,available:v.clientHeight};})()`);
      check(r.overflow<=1 && r.rootOverflow<=1, `No vertical overflow ${width}x${height}: ${JSON.stringify(r)}`);
      check(r.foot && r.controls && r.height===r.available, `Whole counter visible ${width}x${height}`);
      check(await run(`document.querySelector('#cbub .btxt').clientHeight>=12`), `Order text remains readable ${width}x${height}`);
    }
    await send('Emulation.setDeviceMetricsOverride',{width:360,height:640,deviceScaleFactor:1,mobile:true});
    await delay(150); await run('D.counterFrame()');
    await run(`document.documentElement.style.setProperty('--safe-b','24px');D.counterFrame()`);
    check(await run(`(()=>{const v=document.querySelector('#view'),f=document.querySelector('#lobbyGo');return f.getBoundingClientRect().bottom<=v.getBoundingClientRect().bottom-24 && v.scrollHeight<=v.clientHeight+1;})()`), 'Footer respects Android bottom safe area');
    await run(`document.documentElement.style.removeProperty('--safe-b');D.counterFrame()`);
    check(await run(`(()=>{const m=document.querySelector('.image-stack.m').getBoundingClientRect(),l=document.querySelector('.image-stack.l').getBoundingClientRect(),j=document.querySelector('.image-jar').getBoundingClientRect();return m.height<l.height && l.height<j.height;})()`), 'M < L < tea dispenser');
    check(await run(`(()=>{const b=document.querySelector('#cbub'),c=getComputedStyle(b);return c.backgroundColor.includes('0.72') && parseFloat(c.borderRadius)>=20;})()`), 'Translucent rounded order');
    check(await run(`(()=>{const a=document.querySelector('.supply-row').getBoundingClientRect(),b=document.querySelector('.equip-strip').getBoundingClientRect();return b.top-a.bottom<=3;})()`), 'Supply/equipment rows close together');
    await run(`D.G.pickCup('L');D.G.startPour('traSua');D.SH.board.fill=.65;D.G.stopPour();D.counterFrame();var ice=D.E.stockQty('da');D.G.addSupply('da');`);
    check(await run(`document.querySelectorAll('#brewfx .fx-ice').length===5 && !document.querySelector('#brewfx .fx-ball')`), 'Ice flies as five cubes, not pearls');
    check(await run(`!!document.querySelector('#cupslot .c-ice') && D.E.stockQty('da')===ice-1`), 'Ice remains in cup and consumes one portion');
    await run(`var sugar=D.E.stockQty('duong');D.G.addSupply('duong');`);
    check(await run(`!!document.querySelector('#brewfx .fx-sugar-stream .syrup-body') && !document.querySelector('#brewfx .fx-ball')`), 'Sugar flows as syrup ribbon');
    check(await run(`!!document.querySelector('#cupslot .c-sugar') && D.E.stockQty('duong')===sugar-1`), 'Sugar mixes and consumes one portion');
    await delay(250);
    if(process.env.TIEMTRA_SCREENSHOT){const r=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(process.env.TIEMTRA_SCREENSHOT,Buffer.from(r.data,'base64'));}
    await run(`document.querySelector('#hud [data-act=pause]').click()`);
    check(await run(`document.querySelectorAll('#brewfx > *').length===0`), 'Opening modal clears both ingredient effects');
    await delay(1100);
    check(await run(`document.querySelectorAll('#brewfx > *').length===0`), 'Cancelled frames do not restore effects');
    await run(`document.querySelector('[data-act=resume]').click();D.G.sealCup();`);
    check(await run(`D.E.stockQty('da')===ice-1 && D.E.stockQty('duong')===sugar-1`), 'Sealing does not deduct ingredients twice');
    await run(`document.querySelector('[data-act=lobby]').click();D.flush();`);
    check(await run(`!document.querySelector('#view').classList.contains('counter-view') && getComputedStyle(document.querySelector('#view')).overflowY==='auto'`), 'Lobby retains its own scrolling');
    check(errors.length===0, 'No browser exceptions: '+errors.join('\n'));
    console.log(`Counter fit/effects: ${checks}/${checks} passed (6 viewports, offline)`);
  } finally {
    socket?.close();chrome.kill();await delay(300);
    const absolute=path.resolve(profile),temp=path.resolve(os.tmpdir());
    assert.ok(absolute.startsWith(temp+path.sep) && path.basename(absolute).startsWith('tiemtra-counter-fit-'));
    fs.rmSync(absolute,{recursive:true,force:true,maxRetries:5,retryDelay:300});
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
