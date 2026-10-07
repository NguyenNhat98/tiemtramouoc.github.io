# KỊCH BẢN CHI TIẾT – TIỆM TRÀ MƠ ƯỚC (Game 3)

Tài liệu này mở rộng bản mô tả thiết kế của bạn (file .docx, 41 ảnh minh họa) thành kịch bản chức năng, luật chơi, số liệu và luồng màn hình.
Mọi hình ảnh/biểu tượng trong game là CSS + emoji tự vẽ; toàn bộ lời thoại, số liệu cân bằng và code là viết mới.

---

## 0. Tổng quan

- **Thể loại**: quản lý tiệm trà sữa + pha chế thời gian thực + progression dài hạn (chuỗi chi nhánh, nhượng quyền).
- **Nền tảng**: HTML5 + CSS3 + JS (ES modules gộp thành `js/bundle.js`), mobile-first (khung dọc ≤ 520px), mở thẳng `index.html`.
- **Lưu trữ**: LocalStorage, tự lưu cuối ngày + sau giao dịch, 3 bản tự lưu gần nhất, xuất/nhập mã sao lưu.
- **Một ngày** = pha **Chuẩn bị** (màn Home với 15 menu) → pha **Bán hàng** (ca 4 phút thực, đồng hồ game 10:00 → 22:00) → **Tổng quan cuối ngày** → ngày kế tiếp.

## 1. Màn hình vào game
- Ảnh minh họa quầy trà mái hiên hồng–trắng, đèn lồng, nồi/ly trà, mèo ngủ trên quầy, xương rồng, trân châu/dâu trang trí.
- Tiêu đề lớn **Tiệm Trà Mơ Ước**, khẩu hiệu "Pha trà, đón khách, mở tiệm nhỏ của riêng bạn".
- Dòng trạng thái: `<tên tiệm> · Ngày N · <tiền>`.
- Nút hồng **Chơi tiếp** (lần đầu hiển thị "Chơi mới"), liên kết **Hướng dẫn**, số phiên bản góc dưới.

## 2. Home (màn chuẩn bị)
### 2.0 Thành phần
1. **Thanh header** (cố định): nút cài đặt/sổ tay, `Ngày N · Chuẩn bị`, thời tiết `Xuân · 25°C`, tên tiệm + tiền, nút **Chi nhánh** và **Sưu tầm**, sao đánh giá `4,0 · n ĐG`.
2. **Mái hiên** sọc hồng–trắng.
3. **Biển hiệu**: avatar tròn (bấm để đổi) + tên tiệm có biểu tượng bút (bấm để sửa), 2 chip `Tiệm Trà Ban Đầu` (địa điểm hiện tại) và `Sảnh Trà`.
4. **Bảng "Menu hôm nay"** (bảng phấn xanh): trà đang bán + giá, topping + phụ thu, `Size L +7k`.
5. **Lưới 15 menu chức năng** (3 hàng × 6): Kho, Vườn cây, Thú cưng🔒, Khởi nghiệp, Sảnh Trà, Chi Nhánh, Mạng Xã Hội, Quản lý nhân sự, Thuế & Bank, Nâng cấp, Giá bán, Đánh giá, Tổng kết, Bạn bè, Milk Tea Crush. Mục đang chọn nổi bật.
6. **Banner sự kiện của ngày** ("Hôm nay: Món hot trên mạng – trà sữa gọi nhiều gấp đôi (+25%)") và **số khách dự kiến** `~N`.
7. **Khung nội dung** theo menu đang chọn.
8. **Nút hành động dưới đáy** (cố định) theo trạng thái:
   - 🟥 `Chưa nấu Trà · Topping · Dụng cụ` – thiếu nguyên liệu bắt buộc (chưa thể mở cửa);
   - 🟪 `Nấu & nhập · 85k` – đã đặt số lượng cần nhập, bấm để chi tiền nhập hàng;
   - 🟪 `Mở cửa ngày N` – đủ điều kiện, bấm để vào ca bán.

### 2.1 Đổi avatar / nhận diện thương hiệu
- Bấm avatar → modal **Logo Quán & Nhận Diện Thương Hiệu**: xem logo hiện tại (dùng làm biển hiệu, MXH, tem ly), nút **Tải ảnh cá nhân từ máy lên làm Logo**, nút **Thiết kế tem & Chọn mẫu logo ly**, **Đóng**.
- **Thiết kế tem**: kiểu khung (Tròn / Bo góc / Ruy băng), kiểu chữ tên quán (Thẳng hàng / Cong phía trên / Cong phía dưới), màu nền tem (8 màu), khẩu hiệu tùy chọn + 6 gợi ý nhanh, lưới 30 hình logo (emoji) + "Tải ảnh lên", xem trước tròn, **Lưu tem** / **Đóng**. Tem hiện lên mọi ly bán ra và trên biển hiệu.

### 2.2 Kho (3 tab: Trà / Topping / Dụng cụ, thêm Hương khi đã mở khóa)
- Mỗi dòng: icon, tên, nhãn hạn dùng (`⏳ 3 ngày`), nút `− [số] +`, `đang có · giá vốn/ly`, dòng nhẩm `+5 · 22,5k` khi đã chọn.
- Chú thích: 📦 đang có · 🏭 hôm qua dùng · ⚠️ hết hạn hôm nay.
- Hương (siro trái cây) nhập theo **chai = 45 ly, hạn 7 ngày**; hết chai phải mua chai mới.
- Gợi ý lãi: `Bán 30% (+1,4k)` cho mặt hàng bán chạy.
- Nút đáy `Nấu & nhập · tổng tiền` trừ tiền, tạo lô hàng có ngày hết hạn. Hàng hết hạn bị đổ bỏ vào cuối ngày và tính vào chi phí.
- **Điều kiện mở cửa**: có ≥ 1 loại trà đang bán, ly + ống hút, đá, đường; topping khuyến khích nhưng không bắt buộc (cảnh báo màu cam).

### 2.3 Giá bán
- 4 tab: Trà / Hương / Topping / Size. Mỗi dòng có ô nhập giá (đơn vị nghìn) + `Vốn · Lãi`.
- **Cơ chế giá** (khung cảnh báo): trà/hương/topping > 50k khách chê (vắng 80% khách); 1 ly > 120k thì 60% khách bỏ đi + đánh giá 1–2★; Size L > 20k là đắt (90% né), tối đa 50k; Hương & topping > 20k 80% không gọi, > 30k không ai gọi. Có **Quản lý tập sự (Quản gia)** thì được tăng giá an toàn đến 1,5 lần ngưỡng.

### 2.4 Nâng cấp (7 tab)
`Trà · Hương · Topping · Trang bị · Decor Thú Cưng · Nhân viên · Online`
- Mỗi tab mở đầu bằng thẻ **Nâng cấp cấp độ hạng mục** (+0,5% khách/cấp; giá 1k, 1,5k, 2,3k…).
- **Trà**: mở khóa Hồng trà 150k, Lục trà 150k, Ô long 250k, Trà sữa Thái 300k; nút `Bỏ khỏi menu / Thêm lại`.
- **Hương**: 12 vị, 200k/chai đầu tiên; "Hết hàng, chưa có trong menu".
- **Topping** theo nhóm Trân châu / Thạch / Foam / Phô mai (150k–400k).
- **Trang bị** (3 cấp C1–C3): Bình rót trà, Máy đóng nắp, Khay topping, Bộ ly-đường-đá, Tủ lạnh, Mascot, Biển hiệu LED, Bàn ghế khách, Xe máy, Quảng cáo MXH, Mở rộng quầy, Nâng tầng, Máy lạnh, Bộ nhận diện thương hiệu, Tablet nhận đơn online (0/4).
- **Decor thú cưng**: 10 món cho nhà thú cưng.
- **Nhân viên**: nhắc thuê tại menu Quản lý nhân sự.
- **Online**: mở 4 app giao đồ ăn (Soppi, Tóp Tóp, Biiiii, Gờ Ráp), mỗi app cần 1 tablet và đánh giá ≥ 4,0★, phí app 20%.

### 2.5 Quản lý nhân sự
- Thẻ **Chu kỳ KPI & trả lương 7 ca bán**: thanh tiến độ, "Gọi thêm khách +X%", nút xem chi tiết KPI.
- Danh sách tuyển 9 vị trí: Thử việc chính thức (500k), Nhân viên pha chế, Nhân viên đơn online, Quản lý tập sự (750k), Nhân viên Gen Z (1tr), Nhân viên đi chợ, Sinh viên cuối tháng (800k), Nhân viên Me kết tinh (1,5tr), Chú Ba bảo vệ. Có luật **loại trừ** (không thuê cùng nhau) và điều kiện mở khóa.
- Nhân viên tự làm đơn khi quầy có khách: tốc độ, tỉ lệ sai bill, lương/ngày khác nhau; trừ lương cuối ngày.

### 2.6 Thuế & Bank
- **Đóng thuế trực tuyến 72h (3 ngày thực)**: chọn tỉ lệ 5–15% két; nhận buff +15% khách, +15% tốc độ nhân viên, −15% rủi ro trộm cắp/tiền giả, +15% tỉ lệ may mắn x2 bill trong 72 giờ thực; đồng hồ đếm ngược; biên lai xác nhận.
- **Ngân hàng Tà Tưa Bank**: gửi tiết kiệm lãi 1%/ngày bán (thưởng thêm khi đạt ★5), cam kết 7 ngày, rút trước hạn mất lãi, trần 99 tỷ; bảo hộ két an toàn.

### 2.7 Vườn cây (Nông trại 16 mảnh)
- 16 ô đất (mở 6 ô đầu, mở thêm bằng tiền), 4 nút: **Tưới nước · Thu hoạch · Trồng lại · Cửa hàng hạt giống**.
- 6 loại hạt: Dâu Tây Đà Lạt, Đào Tiên Giòn Ngọt, Xoài Cát Hòa Lộc, Búp Trà Xanh Cổ Thụ, Bạc Hà Thơm, Chanh Vàng Quý Tộc. Cây lớn sau 1–3 ngày bán nếu được tưới mỗi ngày; thu hoạch ra nguyên liệu miễn phí và mở sẵn vị tương ứng.

### 2.8 Thú cưng
- Chọn nuôi **Tó Shiba Vàng** hoặc **Mèo Mướp Chiêu Tài** (phí nhận nuôi 10.000.000đ), mỗi loại một bộ buff; **Cáp Bi Điềm Đạm (Capybara)** khóa đến khi sưu tầm đủ 7 công thức độc bản.
- Chăm sóc: cho ăn / chơi / tắm / ngủ (thanh no–vui–sạch–khỏe); chỉ số ≥ 60 mới kích hoạt buff. Decor thú cưng cộng thêm hiệu ứng.

### 2.9 Khởi nghiệp xuyên Việt
- **Bản đồ Việt Nam** vẽ SVG với 10 ghim (Sa Pa, Hà Nội, Hạ Long, Cố đô Huế, Đà Nẵng, Hoàng Sa–Trường Sa, Buôn Ma Thuột, TP.HCM, Cần Thơ, Cà Mau). Bấm ghim hoặc dòng danh sách → nhảy tới thẻ địa điểm.
- Mỗi thẻ: ảnh bìa, slogan, **Lợi thế kinh doanh** (xanh), **Thử thách vận hành** (đỏ), nút `Khởi Nghiệp Tại X · 1tr` (chuyển quán sang vùng mới, đổi bộ thời tiết & hiệu ứng). Địa điểm đang đặt hiện "Đang đặt quán tại đây".

### 2.10 Sảnh Trà
- Thanh trạng thái `Chờ: N khách · Bàn: x/y · Tiền`, nút **Vào quầy pha chế**.
- Khu **Hàng chờ & quầy pha chế** (tối đa 5 khách) và **Khu bàn ghế khách ngồi** (4 bàn, có bàn dơ → bấm **Dọn bàn**; khách ngồi lại +10%). Trong ca bán nút `Ra sảnh → 2/4` chuyển qua lại quầy ↔ sảnh.

### 2.11 Chi nhánh
- 3 tab: **Trực thuộc / Nhượng quyền / Thống kê**.
- Trực thuộc: Cổng Trường Học (15tr), Khu Công Nghệ Cao (35tr), Trung Tâm Thương Mại (60tr), Phố Đi Bộ (120tr). Thẻ hiển thị tiền thuê/ngày, phát lương, nhập liệu, doanh thu tự động (khoảng), đánh giá bình quân, nút **Thuê & Mở chi nhánh** và chỉnh số nhân viên.
- Nhượng quyền: phí gia nhập 100.000.000đ + royalty 10% doanh thu/ngày; điều kiện ★ ≥ 4,5 và ≥ 50.000 follower; mẹo mở khóa.
- Thống kê: báo cáo tài chính toàn hệ thống (quán chính, chi nhánh, nhượng quyền, tổng lợi nhuận chuỗi) và biểu đồ cơ cấu doanh thu.

### 2.12 Mạng xã hội
- Hồ sơ: logo, tên, trạng thái tích xanh (cần 50K follower & 4,5★), follower, uy tín, buff khách từ Ads.
- **Chạy quảng cáo** (chỉ 1 chiến dịch cùng lúc): Facebook Ads địa phương (500k/3 ngày), TikTok Ads viral (2tr/3 ngày), KOL/Food reviewer (8tr/5 ngày), Billboard ngã tư (25tr/7 ngày).
- **Đăng video quảng bá** (TikTok/Reels): tỉ lệ viral 25%, số lượt/ngày theo chiến dịch.
- **Trà sữa Feed**: bảng tin các bài đăng sinh tự động, có bình luận khách & phản hồi của chủ quán.

### 2.13 Đánh giá & 2.14 Tổng kết
- Đánh giá: điểm trung bình, phân bố 1–5★, danh sách review mới nhất.
- Tổng kết: 3 chế độ **Theo ngày / tuần / tháng**, mũi tên chuyển kỳ, thẻ số liệu (ly bán, khách bỏ về, đánh giá), **Báo cáo P&L F&B**: thanh cơ cấu doanh thu (nguyên liệu · nhân sự · mặt bằng · lỗ), thẻ COGS (chuẩn 28–32%), chi phí nhân sự (chuẩn 15–20%), điểm hòa vốn, chẩn đoán "bác sĩ F&B", bảng chi tiết doanh thu/chi phí, lợi nhuận sau thuế.

### 2.15 Bạn bè & Mini game
- Bạn bè: mã mời cá nhân, bạn mẫu để thăm quán/tặng quà hằng ngày, bảng xếp hạng.
- **Milk Tea Crush** (ghép 3 biểu tượng giống nhau sẽ nổ): 7×7, lượt đi giới hạn, mục tiêu thu thập + điểm, thẻ đặc biệt (Ly Sọc, Cá Bay, Kem Cheese, Cầu Vồng), thưởng +1% doanh thu vĩnh viễn mỗi màn, 5 màn tặng túi quà.
- **Trân Châu Nổ** (game thêm): bảng 6×6, chạm nhóm ≥ 2 trân châu cùng màu, combo, 30 giây, mục tiêu 120 điểm.

---

## 3. Màn hình bán hàng (pha chế)

### 3.1 Bố cục
`HUD (Tạm dừng · Cài đặt · Ngày 1 ⏰ 11:10 · thời tiết · tên tiệm/tiền · Chi nhánh/Sưu tầm · sao)` → mái hiên (kèm vòng tròn avatar khách trong hàng chờ có vòng đếm kiên nhẫn) → **khách + bong bóng thoại** (hình ly mini + câu gọi món + thanh kiên nhẫn + thẻ tính cách) → **chip chỉ dẫn "Bước k"** → kệ **QUẦY TRÀ** (chồng ly M, chồng ly L, 6 bình trà có vòi, hàng chai Hương, **máy đóng nắp**) → khu **PHA LY** (thớt gỗ có thanh mức rót, ly đang pha, thùng rác, 12 khay topping) → nút `Ra sảnh →`, biểu tượng 📱 đơn online.

### 3.2 Luật pha chế (từng bước, đều có hiệu ứng)
1. **Lấy ly**: chạm chồng M hoặc L → ly bay từ chồng sang thớt (trừ 1 ly).
2. **Rót trà**: chạm bình trà để bắt đầu rót, chạm lần nữa để dừng (vòi + dòng chảy + mực nước dâng, thanh mức hiển thị vùng vàng 85–100%). Rót thiếu <75% bị trừ sao, tràn >105% bị đổ.
3. **Hương** (nếu đơn yêu cầu): chạm chai hương.
4. **Topping**: chạm khay → viên topping rơi vào ly (tối đa 4).
5. **Đóng nắp**: chạm máy → ly trượt vào máy, nắp ép xuống, màng nhựa dán, ly quay lại có nắp + ống hút.
6. **Phục vụ**: chạm ly hoàn thiện (hoặc khách) → giao cho khách ở đầu hàng; thùng rác để đổ ly sai.
- Có thể đổi khách ưu tiên bằng cách chạm avatar trên mái hiên. Chip chỉ dẫn gợi ý bước kế (tắt trong Cài đặt).

### 3.3 Khách hàng
- Xuất hiện theo đồng hồ ngày (đông vào 11–13h và 17–19h), tối đa 5 khách xếp hàng; ≥ 6 người thì khách mới bỏ đi.
- 8 mẫu tính cách (Sinh viên, Nhân viên văn phòng, Gen Z, Bác lớn tuổi, Khách VIP, Khách mặc cả, Food reviewer, Bé tan học) khác nhau về kiên nhẫn, giá trị đơn, tiền boa, độ khó tính.
- Câu gọi món sinh từ mẫu câu + món + size + topping; kiên nhẫn 45–70 giây.
- Chấm sao khi giao: sai trà −3, sai size −2, thiếu/thừa topping/hương −1 mỗi món, ly lưng/tràn −1, chờ quá lâu −1; ★≥4 có tiền boa. Mỗi lần giao sinh review.

### 3.4 Online & Sảnh
- Có tablet + app → đơn online xuất hiện ở biểu tượng 📱 (chấp nhận trong 20 giây), làm như đơn thường, giá trị cao hơn nhưng trừ phí app 20%.
- Khách ăn tại quán chiếm bàn trống, rời đi để lại bàn dơ cần dọn.

### 3.5 Tạm dừng & Cài đặt
- **Tạm dừng**: "Còn 232s · 3 khách đang chờ", thanh âm lượng nhạc nền/SFX, **Chơi tiếp**, **Đóng cửa hôm nay**.
- **Cài đặt** (cả ở Home và khi chơi): Hướng dẫn, Có gì mới, Cập nhật bản mới, Chỉ dẫn từng bước (bật/tắt), Thời gian bán mỗi ngày (3/4/5 phút, áp dụng ngày sau), Màu giao diện (Kem sữa / Matcha / Dâu / Đêm), Nhạc nền, Âm thanh pha chế & SFX, Phong cách nhạc, Sao lưu tiến trình, Khôi phục bản tự lưu (3 cuối ngày), Khôi phục từ mã, Chơi lại từ đầu.

### 3.6 Đóng cửa → Tổng quan ngày
- Modal **Hết ngày N**: 3 ô thống kê (ly bán, khách bỏ về, sao trung bình), báo cáo P&L, danh sách Doanh thu quán chính / Chi phí quán chính / Tiền nhập NL / Mặt bằng / Điện nước / Lãi / Két, dự báo "Ngày mai: Nắng đẹp…", nút **Tổng kết** và **Ngày N+1 →**.

## 4. Chu trình kinh tế (số liệu khởi điểm)
- Vốn đầu 400.000đ. Trà sữa bán 25k (vốn 4,5k), Matcha 30k (vốn 6k), Trân châu đen +6k (vốn 2k), trắng +5k (vốn 1,5k), Size L +7k.
- Chi phí cố định/ngày: mặt bằng 40k, điện nước 28k (tăng theo trang bị), lương nhân viên, thuế (nếu đóng).
- Rating = trung bình 200 review gần nhất; ≥ 4,0 mở app online, ≥ 4,5 mở nhượng quyền.
- Số khách = nền × thời tiết × sự kiện × mùa × nâng cấp × quảng cáo × thuế × điểm danh × thú cưng × giá bán.

## 5. Kiến trúc mã nguồn
`js/config.js` dữ liệu · `core.js` bus/state/save/loop/âm thanh · `econ.js` kho/giá/bonus/sổ cái · `sell.js` engine ca bán · `brewui.js` màn pha chế + hiệu ứng · `ui.js` vỏ giao diện/modal/cài đặt · `home.js` router Home + panels · `panels*.js` 15 menu · `avatar.js` thiết kế logo/tem · `minigames.js` 2 game · `main.js`.
