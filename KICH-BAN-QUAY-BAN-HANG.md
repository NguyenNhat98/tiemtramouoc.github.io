# Kịch bản quầy bán hàng và nhân viên phụ pha

1. Người chơi chọn khách và lấy ly M/L. Nhân viên phụ pha ghi nhớ khách của ly này; đổi khách trên giao diện không đổi công thức đang pha.
2. Nhân viên chọn trà, rót tăng dần đến mức mục tiêu, rồi dừng. Có dòng trà, gợn nước và trạng thái đang rót; sai sót định lượng giữ theo tỷ lệ cấu hình nhân viên.
3. Thêm hương theo đơn, nước đường và đá, từng bước có khoảng nghỉ và trạng thái hiển thị. Mỗi nguyên liệu chỉ trừ kho một lần cho mỗi ly.
4. Nhân viên thử việc chờ người chơi thêm topping. Quản lý tập sự tự thêm các topping của đơn, sử dụng cùng hiệu ứng hạt bay vào ly.
5. Người chơi đóng nắp và giao ly. Không đóng nắp khi nhân viên còn đang pha. Đóng nắp không trừ đường/đá lần thứ hai.
6. Hết nguyên liệu: nhân viên chờ, thông báo món thiếu, không bỏ qua bước. Nhân viên đi chợ có thể bổ sung cả hương vị. Khách rời hàng hoặc nhân viên nghỉ việc thì hủy thao tác tự động; bỏ ly không chuyển công thức sang ly mới.

## Liên kết mã nguồn

- `js/sell.js`: `pickCup`, `advanceCounterStaff`, `startPour`, `addFlavor`, `addTop`, `sealCup`, `staffStep`.
- `js/brewui.js`: `staffStatus`, `hintText`, `frameSell`, `dropFx`, sự kiện `staff:ingredient`.
- `js/sell-art.js`: `staffArt`, dùng các chân dung đã tách trong `assets/sell/sprites/`.
- `js/scenes.js`, `css/scenes.css`: thuyền chạy một hướng rồi mờ ở cuối chu kỳ; xe chạy theo hướng mặt xe, mây trôi và ánh sáng nền dao động nhẹ.
- `js/panels1.js`, `js/panels2.js`, `css/theme.css`: hàng tab kho/hương và chi nhánh/thống kê không xuống dòng, kéo ngang để xem tiếp.
- `js/bundle.js`: bản chạy trực tiếp từ `index.html`, đã đồng bộ các thay đổi tương ứng.

## Kiểm tra

- Phụ pha hoàn tất trà/hương/đường/đá và không tự thêm topping.
- Quản lý thêm topping nhưng không tự đóng nắp.
- Đường/đá giảm một đơn vị; đóng nắp không giảm thêm.
- Màn hình thấp có thể cuộn đến quầy và nút Ra sảnh; tab dài cuộn ngang.
