# Kịch bản hướng dẫn từng bước

## Hướng dẫn chơi dạng mục

Nội dung hộp Hướng dẫn chơi được quản lý trong `js/guide-content.js`, hiển thị bởi `openGuide()` trong `js/ui.js`. Mỗi dòng có `data-guide-target` chứa selector của chức năng tương ứng để đối chiếu khi bảo trì; người chơi chỉ thấy hình và lời hướng dẫn.

Các nhóm gồm: Chuẩn bị; Kho; Bán hàng; Sảnh và tổng kết; Phát triển; Xã hội và Thêm; Trò chơi; Cài đặt và lưu tiến trình. Icon nút sách, menu, tạm dừng, chi nhánh, sưu tầm và cài đặt dùng cùng `icons.js` với HUD. Hình khách, ly, bình trà, topping, nhân viên và máy đóng nắp dùng cùng `sell-art.js` với quầy.

Các luồng đã đối chiếu: `renderCta`/`E.openMissing` cho điều kiện mở cửa; `E.setPlan`/`E.commitPlan` cho nhập hàng; `pickCup`/`startPour`/`addFlavor`/`addTop`/`sealCup`/`serve` cho pha chế; `evaluate` cho đánh giá; `minigames.js` cho hai trò chơi. Topping tùy chọn khi mở cửa; Hương nằm dưới PHA LY; máy ép nắp trực tiếp và người chơi chạm ly hoàn thành để giao. Bạn bè là dữ liệu mô phỏng/lưu tại thiết bị, chưa có đồng bộ trực tuyến.

`tests/guide-ui.js` kiểm tra nội dung quan trọng, selector hợp lệ, hình thực tế, đóng hộp thoại và không tiêu tiền/lượt chơi khi đọc.

## Hướng dẫn làm sáng từng vùng

Hướng dẫn màn hình chuẩn bị gồm 15 bước. Nút Tiếp chỉ chuyển lời giải thích: không tự mua hàng, mở cửa hoặc tiêu lượt chơi.

| Bước | Vùng giao diện | Mô tả và thao tác |
| --- | --- | --- |
| 1–3 | Biển hiệu, menu, thanh nhóm | Nhận diện tiệm, các món đang bán và năm nhóm chức năng. |
| 4–6 | Tiệm, Phát triển, Kho | Giới thiệu giá bán, nâng cấp và quản lý nguyên liệu. |
| 7–9 | Trà, Topping, Dụng cụ | Tự chuyển đúng tab để xem nguyên liệu. Có ít nhất một cỡ ly, đá, đường và trà trong menu để mở cửa; topping không bắt buộc. |
| 10 | Ô nhập số lượng đầu tiên | Tự cuộn ô vào vùng nhìn thấy. Số 0–999 là kế hoạch mua thêm, không phải tồn kho; −/+ thay đổi một đơn vị. Chưa xác nhận thì chưa trừ tiền. Mapping: `E.setPlan`, `.krow .stepper`. |
| 11 | Nút hành động dưới cùng | Nếu có kế hoạch: giải thích xác nhận tổng chi phí và kiểm tra đủ tiền. Nếu chưa có: giải thích chọn số lượng trước. Mapping: `E.planTotal`, `E.commitPlan`. |
| 12 | Nút hành động dưới cùng | Hiển thị lời giải thích theo trạng thái thật: đang có kế hoạch nhập / thiếu nguyên liệu / đủ điều kiện mở cửa. Không gọi nút cảnh báo thiếu hàng là nút Mở cửa. Mapping: `E.openMissing`, `renderCta`. |
| 13 | Thêm → Milk Tea Crush | Giới thiệu nơi chứa hai trò chơi phụ. Tự chuyển nhóm Thêm. |
| 14 | Nút vào Milk Tea Crush | Tự mở panel giới thiệu, không mở ván chơi. Giải thích ghép 3, giới hạn lượt theo màn và thưởng doanh thu 1% mỗi màn, tối đa 50%. |
| 15 | Nút chơi Trân Châu Nổ | Giải thích nhóm từ 2 viên, mục tiêu 120 điểm/30 giây, combo trong 1,2 giây và tối đa 3 lượt/ngày. Lượt tính khi bấm Bắt đầu trong trò chơi. |

## Bố trí và kiểm tra

`tutorial.js` hoàn tất render trước khi tìm phần tử hướng dẫn. Phần tử trong vùng cuộn được đưa lên phía trên, tránh nằm dưới nút hành động và thanh điều hướng. Thẻ hướng dẫn chọn khoảng trống trên/dưới phần tử; màn hình thấp cho phép cuộn nội dung thẻ, giữ nút điều khiển dễ tiếp cận. Chiều rộng bám theo khung game và chiều cao theo viewport hiện tại.

Chạy `tests/run-menu-checks.ps1` để kiểm tra bước 10 không chồng mục tiêu, bước 12 mô tả thiếu hàng, các bước trò chơi mở đúng panel và không tiêu tiền/lượt chơi, cùng các kiểm tra menu hiện có.
