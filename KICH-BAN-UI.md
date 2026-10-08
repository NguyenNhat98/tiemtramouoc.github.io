# KỊCH BẢN ĐỔI GIAO DIỆN – TIỆM TRÀ MƠ ƯỚC (v4 "Đổi diện mạo")

Mục tiêu: giữ nguyên toàn bộ logic, số liệu, lưu trữ; chỉ thay **bản sắc hình ảnh, bố cục và cách điều hướng** để nhìn khác hẳn game cũ.
Phạm vi code đụng tới: `css/*.css`, template HTML trong `js/ui.js`, `js/home.js`, `js/brewui.js`, `js/panels*.js` (chỉ phần chuỗi HTML). **Không đụng** `core.js`, `econ.js`, `sell.js`, `config.js` (dữ liệu).

---

## 1. Chọn hướng phong cách (chọn 1)

| | A. **Tiệm Trà Nhật – Washi** (khuyến nghị) | B. **Neon Đêm Phố** | C. **Giấy Cắt Dán / Sổ Tay** |
|---|---|---|---|
| Cảm giác | Tối giản, ấm, gỗ + giấy washi, ít viền | Đô thị đêm, tương phản cao, phát sáng | Thủ công, nhãn dán, nét vẽ tay |
| Nền | Kem `#F4EEE3`, gỗ sồi `#C9A27A` | Tím than `#14112B` | Giấy kraft `#E8D9BE` |
| Nhấn | Matcha `#6E8B5B`, đỏ son `#C8442F` | Hồng neon `#FF3EA5`, xanh ngọc `#2EF2D0` | Cam `#F28C28`, xanh biển `#2B6CB0` |
| Hợp với | Người chơi thích thư giãn | Người chơi trẻ, thích "ngầu" | Người chơi thích dễ thương |

Phần dưới viết theo **hướng A**; hướng B/C chỉ đổi bảng token ở mục 2 và bộ icon ở mục 3.

## 2. Hệ thiết kế (design tokens) – đổi 1 chỗ, ăn toàn game
Sửa `:root` trong `css/base.css`:
- **Màu**: `--bg #F4EEE3`, `--card #FBF8F1`, `--ink #3B2F2A`, `--accent #C8442F`, `--accent2 #6E8B5B`, `--gold #D9A441`, `--line rgba(59,47,42,.12)`.
- **Chữ**: tiêu đề `Shippori Mincho` / `Noto Serif`, nội dung `Be Vietnam Pro` (đều hỗ trợ tiếng Việt), thay Baloo 2. Số tiền dùng chữ số đều (`font-variant-numeric: tabular-nums`).
- **Hình khối**: bo góc 10px (cũ 14–18px), đổ bóng mỏng 1 lớp, **bỏ viền dày + bóng cứng dưới nút**; nút chính là khối phẳng có đường kẻ chìm.
- **Chuyển động**: chuyển 160–220ms, easing `cubic-bezier(.2,.8,.2,1)`; bỏ hiệu ứng nhún/rung liên tục, chỉ dùng chuyển động khi có hành động.

## 3. Bộ biểu tượng
Thay emoji trên khung điều hướng/HUD bằng **bộ SVG nét đơn** (1.75px, bo tròn) đặt trong `js/icons.js` (file mới, trả về chuỗi SVG theo tên). Emoji chỉ còn cho **nguyên liệu/khách** (nội dung game), không dùng cho nút chức năng.

## 4. Bố cục từng màn hình

### 4.1 Màn mở đầu
- Bỏ mái hiên sọc hồng. Dùng **noren** (rèm vải) rủ từ trên xuống, chữ "Tiệm Trà Mơ Ước" in dọc/ngang trên rèm.
- Giữa màn hình: một **ly trà vẽ SVG lớn** có hơi nước bay, hai bên là đèn giấy.
- Nút **Chơi** dạng thanh ngang kiểu con dấu đỏ; "Hướng dẫn" và "Cài đặt" thành 2 nút tròn nhỏ ở góc dưới (không còn link gạch chân).

### 4.2 Home (chuẩn bị)
| Hiện tại | Đổi thành |
|---|---|
| HUD 3 cột (nút – tên/tiền – chi nhánh/sao) | **Thanh trên 1 hàng mỏng**: ☰ menu · Ngày/Mùa/Thời tiết (chip) · Tiền (căn phải). Sao + Chi nhánh/Sưu tầm chuyển vào ngăn kéo ☰ |
| Mái hiên sọc | Bỏ; thay bằng đường kẻ gỗ mỏng 4px |
| Biển hiệu + 2 chip địa điểm | **Thẻ tiệm** nằm ngang: logo tròn trái, tên + địa điểm phải, huy hiệu sao bên dưới |
| Bảng phấn xanh "Menu hôm nay" | **Thực đơn dạng thẻ gỗ treo** (menu-tag), cuộn ngang, mỗi món 1 thẻ nhỏ |
| Lưới 15 ô chức năng (3×6) | **Thanh điều hướng đáy 5 mục**: Tiệm · Kho · Phát triển · Xã hội · Thêm. 15 chức năng gom vào 4 nhóm bên dưới |
| Banner sự kiện + số khách dự kiến | Gộp thành **1 dải thông tin** dưới thẻ tiệm |
| Nút CTA to hồng dưới đáy | **Nút nổi (FAB) hình viên thuốc** nằm trên thanh điều hướng, đổi màu theo trạng thái (đỏ/vàng/xanh) |

Gom nhóm 15 chức năng:
- **Kho** → Kho, Vườn cây
- **Phát triển** → Nâng cấp, Quản lý nhân sự, Chi Nhánh, Khởi nghiệp, Giá bán
- **Xã hội** → Mạng Xã Hội, Bạn bè, Đánh giá, Thú cưng
- **Thêm** → Sảnh Trà, Thuế & Bank, Tổng kết, Milk Tea Crush

Trong mỗi nhóm hiển thị **tab chữ phía trên nội dung** thay cho lưới icon.

### 4.3 Màn bán hàng (đổi nhiều nhất)
Hiện tại: khách ở trên, quầy trà giữa, thớt trái + khay topping phải.
Đổi sang **bố cục quầy ngang kiểu nhìn từ phía khách** (vẫn dọc màn hình):
1. **Dải khách (trên cùng, 18%)**: hàng khách xếp như người đứng trước quầy; khách đang phục vụ phóng to ở giữa, bong bóng đơn hàng dạng **phiếu order giấy** (có gạch đầu dòng: size / trà / hương / topping) thay vì bong bóng thoại.
2. **Mặt quầy (giữa, 42%)**: thớt pha ly ở **chính giữa**, ly to hơn; bình trà xếp thành **giá 2 hàng** phía sau thớt; máy đóng nắp ở **bên phải thớt** (không nằm trên kệ).
3. **Tủ topping (dưới, 30%)**: dạng **ngăn kéo ngang cuộn được** (mỗi ngăn 1 loại, hiện số lượng bằng vạch), thay lưới 4×N.
4. **Thanh trạng thái đáy**: đồng hồ ca, tiền ca, nút Ra sảnh, nút thùng rác, đơn online – gom 1 hàng.
- Gợi ý thao tác (`hint`) chuyển thành **dòng chữ nhỏ trên thớt**, không còn nút xanh dương nổi.
- Thanh rót trà đổi thành **vòng cung quanh miệng ly**, vùng vàng là cung sáng.

### 4.4 Sảnh trà
Bàn ghế vẽ dạng **sơ đồ mặt bằng nhìn từ trên xuống** (bàn tròn/vuông đặt tự do trên sàn gỗ) thay danh sách thẻ 2 cột.

### 4.5 Modal / bảng chọn
- Mọi modal giữa màn hình đổi thành **bottom sheet** kéo lên từ đáy, có thanh nắm kéo, vuốt xuống để đóng.
- Hướng dẫn lần đầu: giữ cơ chế coach-mark hiện có, chỉ đổi màu viền sáng và thẻ thoại theo token mới.

### 4.6 Bản đồ khởi nghiệp
Đổi thành **bản đồ toàn màn hình kéo/zoom**; thẻ địa điểm hiện dạng bottom sheet khi chạm ghim (không còn danh sách dài bên dưới).

### 4.7 Mini game
Bàn Milk Tea Crush: ô vuông phẳng bo nhẹ, kẹo vẽ SVG đơn sắc đậm (không emoji); nền bàn theo token. Hiệu ứng nổ giữ nguyên.

## 5. Quy tắc nhận diện để "khác game cũ"
1. Không dùng hồng–trắng sọc; không viền dày; không bảng phấn.
2. Điều hướng chính ở **đáy**, không phải lưới giữa trang.
3. Bố cục bán hàng lấy **thớt làm trung tâm**.
4. Chữ có chân (serif) cho tiêu đề, sans cho nội dung.
5. Mọi hộp thoại là bottom sheet.

## 6. Kế hoạch thực hiện (đề xuất 5 bước, mỗi bước chơi thử được)
| Bước | Việc | File chính | Ước lượng |
|---|---|---|---|
| 1 | Token màu/chữ/hình khối + font | `base.css`, `index.html` | 0,5 ngày |
| 2 | Bộ icon SVG + thanh điều hướng đáy + gom nhóm 15 chức năng | `icons.js`, `home.js`, `home.css` | 1–1,5 ngày |
| 3 | HUD mỏng, thẻ tiệm, thực đơn thẻ treo, FAB | `ui.js`, `home.js`, `home.css` | 1 ngày |
| 4 | Bố cục bán hàng mới (khách–thớt–ngăn kéo) | `brewui.js`, `sell.css` | 2 ngày |
| 5 | Bottom sheet, sảnh sơ đồ, bản đồ zoom, mini game, mở đầu | `ui.js`, `modal.css`, `panels*.js` | 2 ngày |

Sau mỗi bước chạy `build.bat` rồi kiểm tra: không lỗi console, lưu/tải game vẫn đúng, hướng dẫn lần đầu vẫn trỏ đúng phần tử (cập nhật selector trong `js/tutorial.js` nếu đổi class: `.tile[data-tab="kho"]`, `#cta .cta-btn`, `.cust-zone`, `.stacks`, `#disps`, `#trays`, `#sealer`, `#lobbyGo`).

## 7. Rủi ro cần lưu ý
- Đổi class/ID làm hỏng selector trong `tutorial.js`, `brewui.js` (`#cupslot`, `#sealer`, `.disp`…) → giữ ID cũ, chỉ đổi CSS khi có thể.
- Màn bán hàng phải vừa 1 màn hình điện thoại 360×640 không cuộn.
- Font tải từ Google Fonts cần mạng; nên có font dự phòng hệ thống.
- Người chơi cũ quen lưới 15 ô: nên có 1 lần toast giải thích menu mới ("Mọi chức năng nằm ở thanh dưới").
