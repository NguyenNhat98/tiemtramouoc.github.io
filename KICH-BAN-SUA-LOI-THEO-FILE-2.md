# Kịch bản sửa quầy bán hàng theo file Word lần 2

Nguồn: `Khi tôi chơi game, tôi đang thấy các lỗi như này viết kịch bản n..._2.docx`. File có 5 yêu cầu và 4 ảnh minh họa, đều liên quan màn mở cửa đón khách. Đã thực hiện trong source và biên dịch lại `js/bundle.js`.

## 1. Hiệu ứng thêm đá và nước đường

**Lỗi:** cả hai dùng chung `dropFx()` với hạt tròn màu, nên trông giống thêm trân châu.

**Kịch bản đá:** người chơi chạm Đá, hoặc nhân viên thực hiện bước đá → `addSupply('da')` trừ một phần, đánh dấu `iceAdded` → 5 hình 🧊 giống icon nút bay từ nút vào ly, xoay nhẹ và rơi vào trong → ly có 3 viên đá minh họa khối trong suốt, viền xanh và mặt sáng. Đá trong ly di chuyển theo mặt nước khi rót. Số viên minh họa không phải số phần kho bị trừ.

**Kịch bản đường:** chạm Đường, hoặc nhân viên thực hiện bước đường → `addSupply('duong')` trừ một phần, đánh dấu `sugarAdded` → dòng si-rô vàng hổ phách có viền và vệt sáng nối từ nút về miệng ly → vệt đường trong ly hòa tan, mờ dần. Không dùng hạt tròn cho nước đường.

Hai hiệu ứng theo vị trí ly ở từng khung hình. Mở modal, đổi màn hoặc bỏ ly thì hủy hiệu ứng; các frame đang chờ không được tạo lại hiệu ứng trên UI khác. Đóng nắp không trừ thêm đá/đường đã có. Thêm tự động lúc đóng nắp cũng dùng cùng luồng, không thay định lượng một phần mỗi loại/ly.

Mapping: `addSupply()` → event `staff:ingredient` → `dropFx(..., ingredient='da')` hoặc `sugarFx()` trong `js/brewui.js`. `cupHTML()` truyền cờ đá/đường vào `cupSvg()`; `setCupFill()` cập nhật vị trí nhóm `.c-ice` trong `js/sell-art.js`. Không sửa trực tiếp bundle rồi để source cũ ghi đè.

## 2. Khung chơi vừa chiều cao màn hình

**Nguyên nhân:** CSS cuối `css/scenes.css` bật lại `.view {overflow-y:auto}` và `.sell {height:auto}`, ghi đè khung cố định trước đó. Các hàng còn dùng chiều cao và khoảng trống riêng nên tổng chiều cao vượt màn hình, đặc biệt khi trình duyệt có thanh địa chỉ.

**Kịch bản:** mở ca → đánh dấu `#view.counter-view` → quầy chiếm đúng chiều cao còn lại sau HUD → `fitCounter()` đo chiều cao thật và cập nhật `--counter-u` → các hàng khách, order, trà, pha chế, đá/đường, trang bị, hương, topping và Ra sảnh co theo cùng một quỹ chiều cao. Không phải kéo toàn màn lên xuống để thấy nút Ra sảnh. Thu/phóng thanh trình duyệt hoặc đổi hướng thì tính lại; `js/compat.js` sử dụng `visualViewport.height` khi có, có fallback `innerHeight` cho WebView cũ.

Trên màn ngang thấp, dùng hai cột: khách/order bên trái, quầy và pha chế bên phải. Giữ chỗ đọc order, không giấu nhân vật hoặc nội dung đơn để ép vừa màn.

Trà vẫn có đủ 6 bình. Hương và trang bị kéo ngang một hàng; topping kéo ngang hai hàng để truy cập đủ món. Nội dung order dài cuộn trong riêng khung order. Chuyển Ra sảnh bỏ class `counter-view`, sảnh vẫn cuộn để xem đầy đủ bàn ghế; menu chuẩn bị và kho giữ cuộn riêng như trước.

Mapping: `renderSell()` / `fitCounter()` / `frameSell()` trong `js/brewui.js`; `css/counter-fit.css` được tải cuối `index.html` để quy tắc mới có hiệu lực sau các CSS cũ. Chỉ chế độ quầy bán bị khóa cuộn dọc.

## 3. Order trong suốt và dễ đọc

Giảm nền từ độ đục 90% xuống 72%; thêm viền sáng và blur nhẹ để thấy bối cảnh phía sau. Bo góc 20 px, bóng nhẹ. Nút Từ chối vẫn màu đỏ, nằm trong hàng tiêu đề riêng, không đè lên nội dung. Giữ thanh kiên nhẫn và cuộn nội dung đơn dài. Theme đêm dùng nền tối mờ riêng để giữ tương phản chữ. WebView không hỗ trợ blur vẫn có nền bán trong suốt.

## 4. Ly nhỏ hơn bình trà, khung sát hình hơn

Chồng M/L thu chiều cao và chiều ngang; L vẫn lớn hơn M và nhỏ hơn bình trà. Cột chồng ly giảm từ 42/48 px xuống 29/33 px, phần ngang còn lại dành cho 6 bình. Bình chiếm chiều cao hàng trà, nên nhìn nổi bật hơn so với ly. Giảm padding khung, chiều cao đầu QUẦY TRÀ, bỏ khoảng trống trước hàng và thu thanh kệ bên dưới. Badge tồn kho vẫn bám theo chồng ly/bình, không đổi vùng chọn size hoặc chọn trà.

Mapping: `.shelf`, `.shelf-head`, `.shelf-row`, `.stack`, `.cupstack.image-stack`, `.jar.image-jar` trong `css/counter-fit.css`. Không cắt lại sprite hoặc sửa dữ liệu nguyên liệu.

## 5. Đá/đường và trang bị sát nhau

Ảnh cuối file chỉ hai hàng Đá/Đường và các icon trang bị. Bỏ margin trên/dưới của cả hai, giảm `gap` trong `.work` còn 2 px và ẩn thanh scrollbar trang bị. Người chơi vẫn vuốt ngang hàng trang bị và chạm xem tác dụng/bật máy phát như trước. Hương không có món mở thì không để lại hàng trống.

## Kiểm tra đã thực hiện

- `tests/counter-fit.cjs`: 31 kiểm tra trên browser thật, offline, ở 320×568, 360×640, 393×740, 412×844, 520×900 và 640×360. Kiểm tra không tràn dọc, Ra sảnh/các hàng luôn hiện, order còn vùng đọc, tỷ lệ M < L < bình trà, nền order, khoảng cách 2 hàng, vùng an toàn dưới màn Android, hình đá/dòng đường, lượng kho, hủy hiệu ứng khi mở modal và cuộn riêng ở sảnh.
- Chạy lại 100 kiểm tra hiện có: 32 logic giao dịch, 16 menu, 10 hướng dẫn từng bước, 11 quầy, 11 nội dung hướng dẫn và 20 kiểm tra theo file Word lần 1.
- Quan sát ảnh chụp 360×640: order, đủ 6 bình, khu pha, đá/đường, trang bị, hương, hai hàng topping và Ra sảnh nằm trong một màn hình.

Chạy kiểm tra mới với Node 22: `node tests/counter-fit.cjs`. Chưa xác nhận trực tiếp trên thiết bị Android vật lý; cần thử thêm thao tác kéo ngang và xoay màn hình trên máy cài APK.
