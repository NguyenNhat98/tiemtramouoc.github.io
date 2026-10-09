# Phân tích và mapping chức năng các menu

## 1. Luồng chung

`GROUPS/TILES (js/home.js)` → `goTab` → `renderPanel` → `PANELS[tab].html/bind/acts` → kiểm tra giao dịch trong `js/econ.js` → cập nhật `S` → `markDirty` → `requestSave`.

Hiệu ứng nâng cấp đi qua `econ.bonus()` → `expectedCustomers`, `newCustomer`, `updateShift`, `staffStep`, `settle`, `branchDaily`, `franchiseDaily`. Mua thành công không chỉ đổi màu nút: phải thay đổi giá trị dùng khi tính khách, thời gian, kho hoặc tiền.

Điều kiện phải được kiểm tra lại **khi thực hiện giao dịch**, kể cả sau khi mở hộp xác nhận. Nút bị vô hiệu hóa không thay thế kiểm tra trong code. Thất bại không trừ tiền hoặc tạo tài sản. Thành công lưu tiến trình và cập nhật các màn liên quan.

`js/bundle.js` được biên dịch từ `js/main.js`, target Chrome 70, để mở `index.html` trực tiếp và đóng gói WebView. Không sửa bundle tách biệt với mã nguồn.

## 2. Phát triển — Nâng cấp

| Mục | Hành động / điều kiện | Mapping code và dữ liệu | Kết quả cần thấy |
|---|---|---|---|
| Cấp Trà | Có tiền theo `catCost` | `buyCategory('tra')` → `S.cat.tra` → `bonus.traffic` | Mỗi cấp +0,5% lượng khách |
| Cấp Hương | Có tiền | `buyCategory('huong')` → `bonus.patience` | Mỗi cấp +0,5% kiên nhẫn |
| Cấp Topping | Có tiền | `buyCategory('top')` → `bonus.badRev` → `newCustomer.hard` | Giảm xác suất khách khó tính; không xóa lỗi pha sai |
| Cấp Nhân viên | Có tiền | `buyCategory('nv')` → `bonus.speedStaff` → `staffStep/updateShift` | Tăng tốc độ nhân viên 1% mỗi cấp |
| Cấp Online | Có tiền | `buyCategory('online')` → `bonus.online` | Tăng tần suất đơn; không tự vượt điều kiện app |
| Mở trà/topping/hương | Chưa mở, đủ tiền | `unlockItem` → `unlocked/onMenu` | Thêm vào menu; hương được cấp một chai 45 ly |
| Bật/tắt món | Món đã mở khóa | `toggleMenu` → `onMenu` | Ảnh hưởng menu hôm nay và món khách được gọi |
| Trang bị | Đủ tiền, còn cấp tiếp theo | `buyEquip/equipLevel/equipNext` → `S.equip` | Tăng đúng một cấp, trừ đúng giá cấp đó, khóa ở cấp tối đa |
| Decor | Có thú cưng, chưa sở hữu, đủ tiền | `buyDecor` → `S.petDecor` → chăm sóc/buff | Không mua trùng, hiệu ứng áp dụng vào chỉ số |
| Online | Lợi nhuận ≥15 triệu, ≥60 đơn, đánh giá ≥4★, có tablet trống | `onlineProgress/toggleApp` → `S.apps` | Một tablet chạy một app; tắt app được lưu |

### Mapping trang bị

| ID | Hiệu ứng khi chạy game |
|---|---|
| `binhRot` | `bonus.pour` tăng tốc rót; cấp 3 giảm một nửa mức phát sinh tràn |
| `mayNap` | `bonus.seal` giảm thời gian đóng nắp từ 1,2 giây |
| `khayTop` | `bonus.topSave` giảm giá vốn topping 3% / 8% / 15%; mỗi topping vẫn là một phần trong kho |
| `boDungCu` | `bonus.tip` tăng tiền boa 5% / 12% / 25% |
| `tuLanh` | `lifeBonus/addStock` thêm 1 / 2 / 3 ngày cho lô hàng được nhập sau nâng cấp |
| `mascot`, `led` | Tăng `bonus.traffic`, được vẽ trong bối cảnh quầy |
| `banGhe` | Tổng số bàn 6 / 8 / 10; cấp 2/3 tăng xác suất khách vào ngồi |
| `xeMay` | Tăng tần suất đơn trực tuyến |
| `qcMxh` | Tăng khách và follower khi phục vụ |
| `quay` | Tăng giới hạn hàng chờ lên 6 / 7 / 8 |
| `tang` | Cộng đúng 10 / 20 / 35 khách vào dự kiến mỗi ngày, thay mức cũ 2 / 4 / 7 |
| `mayLanh` | Tăng kiên nhẫn; tăng chi phí điện nước theo cấp |
| `nhanDien` | Tiền boa, lượng khách và tem logo trên cốc |
| `tablet` | Giới hạn 1 / 2 / 3 / 4 app cùng bật |
| `mayPhat` | `events.blocked/update` cho máy hoạt động theo cấp trong lúc mất điện |
| `giayPhep`, `attp` | `events.licenseResult/foodResult` thay đổi thưởng, phạt và đình chỉ |

**Kịch bản:** ghi tiền/cấp/bonus trước mua → mua một lần → so sánh mức trừ và bonus → thử mua tiếp ở cấp tối đa → tiền/cấp không đổi → lưu và tải lại.

## 3. Phát triển — Quản lý nhân sự

| Nhân viên | Điều kiện / phần việc | Mapping thực thi |
|---|---|---|
| Lâm Phước | Loại trừ quản lý, Gen Z, SV đêm; người chơi lấy ly, thêm topping, đóng nắp | `hireBlock/hire` → `pickCup.auto` → `advanceCounterStaff`: trà → hương → đường → đá |
| Lý Gia Huy | Từ ngày 30; ít nhất 2 khách; chọn người chờ lâu nhất | `staffStep` → `SH.jobs` → `finishJob`; thời gian cơ sở 1,5 giây/ly; tiền boa của ly này thuộc nhân viên |
| Hoàng Minh | Cần mở online | Tự nhận đơn online đang chờ qua `acceptOnline`; làm đơn online, lỗi 1% sẽ làm lại khi đủ nguyên liệu; thời gian cơ sở 1 giây |
| Đinh Nhân | Không thuê cùng Lâm Phước | Phụ pha như trên và thêm topping; không tự đóng nắp; bật quyền tăng giá an toàn |
| Gen Z | Không thuê cùng Lâm Phước | Pha toàn bộ; thời gian cơ sở 0,2 giây; mỗi 100 ly dỗi 10 giây, chạm nhân viên để dỗ; không dỗ sẽ nghỉ việc |
| Gen Z — giữ bill | Một lần/ca, không xảy ra khi có bảo vệ | `finishJob` giữ tiền bill trong `SH.staffT.genZ.hiddenBill`; chạm chân dung qua `comfortStaff` để thu hồi; không được thu hồi hai lần |
| Nhân viên đi chợ | Ít nhất 2 nhân viên khác | `staffStep` kiểm tra kho mỗi 4 giây, mua nguyên liệu hết hàng, bao gồm hương đã mở |
| SV cuối tháng | Không thuê cùng Lâm Phước, chỉ sau 22h–6h | `staffStep(kind='night')`; ca kéo dài tối đa 22 giây để xử lý khách còn lại, giờ mô phỏng tiến đến 6h; chỉ tính lương đêm nếu có ly đã làm |
| Me kết tinh | Đủ tiền thuê | Tăng khách 45%, tăng tốc đội ngũ; tự quay video theo quota, đăng bài và nộp thuế khi hết hạn nếu két có tiền; tự phản hồi review và tăng một sao, tối đa 5 |
| Chú Ba | Có ít nhất một công thức độc bản | `bonus.errReduce` giảm 50% lỗi nhân viên; ngăn Gen Z giữ bill; lương thêm 1% doanh thu |

Các job giữ `cid` khách, không đổi theo khách người chơi vừa chọn. Cho nhân viên nghỉ phải giải phóng job và dừng phần tự động trên cốc, tránh khách bị giữ mãi.

### Lương / KPI

- Ghi **chi phí lương hằng ngày** vào `S.today.wage`, để lợi nhuận ngày phản ánh đúng chi phí.
- Cộng lương chưa trả vào `S.kpi.payable`. Trừ tiền két ở ca thứ 7, ghi tiền thực trả vào `S.today.payrollCash`.
- Nếu két không đủ sau chi phí vận hành, phần lương còn thiếu được giữ trong `payable`, không báo đã trả đủ.
- Nhân viên pha chế có phụ cấp 40k/giờ mô phỏng sau 22h. Nhân viên làm lâu có tốc độ ổn định hơn, tối đa thêm 10%.
- Tiến trình cũ đã trả lương hằng ngày không bị truy thu lại: `payable` chỉ phát sinh từ các ca mới.

**Kịch bản:** thuê → kiểm tra trừ tiền/loại trừ → mở ca → quan sát trạng thái/chuyển động → hết kho thì chờ → nhập thêm thì tiếp tục → cho nghỉ khi đang làm → khách trở lại trạng thái có thể phục vụ → đủ 7 ca đối chiếu chi phí và tiền thực trả.

## 4. Phát triển — Chi nhánh / nhượng quyền

| Task | Mapping | Quy tắc |
|---|---|---|
| Mở chi nhánh | `openBranch(id)` → `S.branches[id]` | Địa điểm hợp lệ, chưa mở, đủ tiền; không mua đè lên chi nhánh đã có |
| Nhân viên chi nhánh | `setBranchStaff(id,n)` | 0–3 người, lưu cả khi nhập số trực tiếp hoặc bấm ± |
| Tính doanh thu | `branchDaily` cuối ca | Doanh thu theo vùng/đánh giá/buff/quảng cáo/nhân viên, trừ nguyên liệu, lương và thuê |
| Ưu đãi chi nhánh | `bonus` | Cổng trường +15% khách; khu công nghệ +10% đơn online |
| Bán nhượng quyền | `sellFranchise` | ≥4,5★, ≥50.000 follower, tối đa 5 điểm; tiền phí chỉ cộng khi thành công |
| Bản quyền hằng ngày | `franchiseDaily` | 10% doanh thu đối tác; áp dụng buff thú cưng và quảng cáo |
| Thống kê | `statsHTML` | Tách lợi nhuận quán chính/chi nhánh/nhượng quyền; biểu đồ ghi đúng là lợi nhuận, không gọi là doanh thu |

**Kịch bản:** mở một chi nhánh → thử mở lại → chỉnh nhân viên → chạy hết ngày → đối chiếu `branch.last` và lịch sử → bán đủ 5 điểm → lần thứ 6 bị từ chối, tiền không đổi.

## 5. Phát triển — Khởi nghiệp

`startup` → xác nhận → `moveShop` → trừ `LOCATION_COST` → cập nhật `S.location` → tạo lại dự báo → áp dụng `LOCATIONS[id].fx` và vẽ lại tiệm.

- Chỉ chuyển khi không đang bán. Chuyển cùng địa điểm hoặc ID không hợp lệ bị từ chối.
- Giữ kho, trang bị, nhân viên, chi nhánh và bộ sưu tập; đây là chuyển địa điểm, không phải reset game.
- `traffic/patience/tip/rent/utility/ingCost/online` tác động vào luồng kinh tế tương ứng.
- `billTeas` áp dụng thưởng vùng cho loại trà. Buôn Ma Thuột cũng áp dụng thưởng cho bill có foam cheese hoặc trân châu đen; không cộng lặp thưởng vùng trên cùng bill.
- TP.HCM sau 20h tăng độ khó tính; Huế/Hạ Long có hệ số giảm khách khi mưa.
- Hoàng Sa không phát sinh đơn online, kể cả khi có thêm bonus xe giao hàng hoặc chi nhánh.

**Kịch bản:** cùng một cấu hình kho/giá/trang bị, chuyển vùng → kiểm tra bonus và dự báo → mở ca → kiểm tra tiền bill/kiên nhẫn/đơn online theo vùng.

## 6. Mapping các menu còn lại

| Nhóm / menu | Task và mapping | Kết quả / giới hạn |
|---|---|---|
| Tiệm / Giá bán | `giaRow` → `setPrice` → `priceFactor/priceWeight/sizeLWeight/orderPrice` | Giá hữu hạn, Size L tối đa 50k; đúng 50k không được gọi. Quản gia bỏ phạt tăng giá, nhưng không bỏ trần size L |
| Tiệm / Sảnh Trà | Xem bàn từ `bonus.tables`; trong ca `renderLobby/cleanTable` | Chỉ dọn bàn bẩn, thưởng boa một lần, bàn trở về sạch |
| Tiệm / Tổng kết | `periodEntries` → `aggregate/plHTML` | Ngày/tuần/tháng; chi phí gồm nguyên liệu, vận hành, lương, thuế, phạt; lợi nhuận cộng chi nhánh/nhượng quyền/lãi gửi |
| Tiệm / Đánh giá | `pushReview` → `S.reviews/rating` → `danhgia.html` | Điểm pha, chờ, khách khó tính; hiển thị 30 bài gần nhất, lưu tối đa 200 |
| Kho / Kho | `setPlan/planTotal/commitPlan` → `addStock/take/expireStock` | Hương mua theo chai 45 ly; dùng lô sắp hết hạn trước; kế hoạch sai/NaN/khóa bị từ chối |
| Kho / Vườn | `plant/water/harvest/unlockPlot/nextDay` | Cây tăng ngày nếu đã tưới; tưới được lưu; tối đa 16 ô; thu hoạch vào kho và mở món tương ứng |
| Kho / Thú cưng | `adoptPet/carePet/petActive/bonus` | Đổi Chó/Mèo được, giữ Cáp Bi nuôi chung; buff cần trung bình chăm sóc ≥60; Decor bát/vòi/kìm/app có hiệu ứng chăm sóc |
| Xã hội / MXH | `startAd/recordVideo/genPost/nextDay` | Một chiến dịch cùng lúc; quota video; bài quảng cáo sinh mỗi ngày còn hiệu lực; video thêm buff khách 2–15% trong ngày; follower và buff cập nhật |
| Xã hội / Bạn bè | `addf/visitFriend/copyText` | Mã hợp lệ, không trùng; một quà/bạn/ngày; là mô phỏng cục bộ, không có đồng bộ tài khoản/server |
| Thêm / Milk Tea Crush | `openCrush/match/cascade/crushEnd` trong `minigames.js` | Luật ghép/cascade/combo, giới hạn lượt thưởng theo ngày và buff lưu trong trạng thái |
| Thêm / Trân châu nổ | `openPearl/pGroup/pEnd` | Nhóm cùng màu, điểm/combo/thời gian/kỷ lục; số lượt theo ngày |
| Thêm / Thuế | `payTax/taxActive/bonus` | Một lần mỗi 72h thực; mức nộp 5–15% két, buff cố định +15%, không cộng dồn |
| Thêm / Bank | `depositBank/withdrawBank/finishShift` | Lãi mỗi ca, giới hạn 99 tỷ; bonus uy tín và trên 1 tỷ; gửi thêm bắt đầu lại kỳ hạn 7 ca cho toàn khoản; rút sớm chỉ nhận gốc |
| Thêm / Sưu tầm | `openPack/openCardPack/buypack` → `collection` | Mỗi túi 3 thẻ; thẻ trùng đổi nguyên liệu; công thức độc bản mở bằng xác suất; mua túi được lưu ngay |

CTA “Chưa nấu Dụng cụ” phải đưa thẳng sang Kho → Dụng cụ; không đưa người chơi đến một tab không chứa thứ đang thiếu. Thiếu topping có thể vẫn mở bán theo luật hiện tại; thiếu trà hoặc ly/đường/đá thì không mở được.

## 7. Phân biệt mô tả vận hành với nội dung kể chuyện

Các câu mô tả như nhân viên mua đồ quá hạn, khai gian hóa đơn, SV bán trang bị lúc 2h, bảo vệ xin nghỉ; thú cưng có cấp tăng thưởng, bán nguyên liệu dư, thay đổi rủi ro lỗ chuỗi; Huế nhân đôi điểm combo là **ý tưởng chưa có một luồng thực thi riêng trong engine hiện tại**. Không coi các câu đó là bằng chứng chức năng đã chạy. Các xác suất, công thức, thời hạn và thao tác đối phó cho những ý tưởng này cần được đặc tả trước khi thêm sự kiện ngẫu nhiên.

Đã xử lý các giao dịch, bonus kinh tế, tự động hóa và lỗi có quy tắc xác định trong bảng trên. Các minigame giữ luật hiện có; lần sửa này không đổi thuật toán ghép hay thuật toán nhóm trân châu.

## 8. Kiểm chứng và chạy lại

- `tests/menu-contracts.js`: kiểm tra trên **bundle thật** qua `debugGame` trong hồ sơ Chrome tạm, không chạm dữ liệu chơi của trình duyệt người dùng.
- Tạo bản HTML tạm cùng thư mục `index.html`, giữ các đường dẫn CSS/JS tương đối và chèn `tests/menu-contracts.js` sau khi boot. Kết quả nằm ở `body.dataset.contractResults`, `contractPassed`, `contractTotal`.
- Bộ kiểm tra gồm mua/cấp trang bị, bonus nâng tầng, điều kiện nhân sự, chi nhánh, nhượng quyền, chuyển vùng, online, kho, giá, quảng cáo, thú cưng, thuế, ngân hàng, quà bạn bè, vườn, phụ pha, lương, ca đêm, marketing, nghỉ việc và dỗ Gen Z.
- Đã chạy đạt **27/27 kiểm tra logic** và **16/16 menu điều hướng** trên Chrome, không có lỗi JavaScript hoặc thiếu tài nguyên cục bộ.
- Chạy lại bằng `powershell -NoProfile -ExecutionPolicy Bypass -File .\tests\run-menu-checks.ps1`. Script tạo profile/trang kiểm tra trong thư mục tạm và dọn chúng sau khi chạy; không sửa dữ liệu chơi thật.
- Tài liệu mô tả luồng code và điều kiện; kết quả test không thay cho kiểm tra cảm giác chơi, animation hoặc thử trực tiếp APK trên thiết bị.
