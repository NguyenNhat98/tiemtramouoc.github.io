# Kịch bản xử lý các lỗi trong file Word

Nguồn yêu cầu: “Khi tôi chơi game, tôi đang thấy các lỗi như này viết kịch bản n..._1.docx”, gồm 4 nhóm lỗi. Các sửa đổi áp dụng cho bản chạy `index.html` và bundle đóng gói Android.

## 1. Nhân viên hỗ trợ pha chế

Lâm Phước (`thuViec`, vai trò `pour`) chỉ chọn/rót trà, thêm hương theo đơn, đường và đá. Người chơi lấy ly, thêm topping, đóng nắp và giao khách. Đinh Nhân (`quanLy`, vai trò `manager`) thêm cả topping; người chơi vẫn lấy ly, đóng nắp và giao khách.

Lỗi cũ: khi dữ liệu có cả hai phụ pha, code chọn nhân viên đầu tiên nhưng cấp danh sách topping nếu có bất kỳ quản lý nào. Vì vậy nhân viên rót trà có thể nhận nhiệm vụ của quản lý. Khi khôi phục ly dở, trạng thái lưu cũng có thể còn danh sách topping không đúng vai trò.

Sửa trong `js/sell.js`: `counterAssistant()` chọn duy nhất một người; ưu tiên quản lý nếu dữ liệu cũ có cả hai. `advanceCounterStaff()` tra lại vai trò từ cấu hình hiện tại, bỏ quyền thêm topping của người chỉ rót trà. Các bước gắn với khách ban đầu của ly, không đổi đơn khi người chơi chọn khách khác. Thiếu nguyên liệu thì chờ và báo tên món thiếu; không tạo nguyên liệu miễn phí.

Kiểm tra: thuê riêng từng người và pha đơn có hương/topping; quan sát ly, kho và trạng thái nhân viên. Thử dữ liệu cũ có hai người, ly lưu dở có danh sách topping sai và cho nhân viên nghỉ khi đang làm.

## 2. Kho theo lô, hạn còn lại, đá và đường

Mỗi lô mới lưu `{q, exp, receivedDay}`. Lô cùng ngày nhập và cùng hạn mới được gộp; lô không hết hạn như ly vẫn tách theo ngày nhập. Khi sử dụng, ưu tiên lô gần hết hạn. Sang ngày mới giữ số lượng và hạn thật, lưu lượng đã sử dụng vào `previousUsed`.

Các tab Trà/Topping/Dụng cụ/Hương hiển thị:

- **Tồn**: tổng lượng còn trong kho.
- **Từ hôm trước**: lượng còn lại trong những lô nhập trước ngày hiện tại.
- **Nhập hôm nay còn**: lượng chưa dùng trong các lô nhập hôm nay.
- **Hôm qua dùng / Hôm nay dùng**: số đã tiêu thụ, không nhầm với tồn kho.
- **Còn N ngày**: hạn gần nhất, tính cả hôm nay. **Hạn dùng từng lô** mở chi tiết từng lượng và hạn tương ứng.
- Khi chưa có lô, **Lô mới: N ngày** là hạn của lần nhập mới; mua tủ lạnh không kéo dài ngược hạn của hàng đã nhập.

Dữ liệu lưu cũ không có ngày nhập được ghi “Lô cũ chưa rõ ngày nhập”; không tự bịa ngày hoặc sửa hạn. Sau khi chuyển ngày, chắc chắn các lô đang có là hàng từ hôm trước nên được đánh dấu để phân loại về sau. Không xóa kho hoặc yêu cầu chơi lại.

Đá viên và nước đường là nguyên liệu cơ bản của mỗi ly: đá làm lạnh, đường tạo độ ngọt. Hiện game dùng định lượng một phần mỗi loại/ly, chưa có chọn phần trăm đường/đá. Kho ghi công dụng; dưới PHA LY có hai nút với tồn kho và trạng thái **Đã thêm**, kèm hiệu ứng bay vào ly. `addSupply()` trừ một phần và đánh dấu `iceAdded`/`sugarAdded`. Nhân viên dùng cùng hàm; đóng nắp tự thêm phần còn thiếu. Kiểm tra đủ cả hai trước khi trừ để tránh mất một phần nguyên liệu khi loại còn lại đã hết. Không trừ lại ở bước đóng nắp.

Kiểm tra: nhập 10 phần đá, dùng 3, sang ngày còn 7 phần/hạn còn 1 ngày; nhập thêm 5, thấy lô cũ 7 và lô mới 5. Dùng 7 thì lô mới còn nguyên. Thử nhập hương theo chai 45 ly, hai lô khác hạn, tủ lạnh nâng sau khi nhập và lô lưu cũ thiếu ngày nhập. Thử thêm đá/đường bằng tay, bằng nhân viên và tự thêm khi đóng nắp: mỗi loại chỉ trừ một phần.

## 3. Thú cưng

Đổi tên thành **Chó Shiba Vàng**, sửa các chỗ “Tó” và “Cáp Pi”. Ba tab **Chó Shiba / Mèo Mướp / Cáp Bi** luôn cùng một hàng và kéo ngang trên màn hình hẹp, cả trước và sau nhận nuôi. Chọn tab khác xem thông tin/điều kiện nhận nuôi; không tự trừ tiền khi chỉ xem. Nội dung đổi bé phản ánh đúng code: chỉ số chăm sóc trở về 80, không mô tả cấp thú cưng không tồn tại.

Mapping: `PETS` trong `js/config.js`; `petCard()` và `thucung.html()` trong `js/panels3.js`; `.pet-tabs` trong `css/panels.css`. Kiểm tra ở chiều rộng 320 px, sau nhận nuôi và khi Cáp Bi chưa mở khóa.

## 4. Nâng cấp có tác dụng trong ca bán

Quầy có hàng icon trang bị kéo ngang. Chạm icon xem cấp và tác dụng hiện tại, kèm điều kiện sử dụng cho máy phát, giấy phép, ATTP, tablet và tủ lạnh. Trang bị không cần bấm kích hoạt mỗi lần nếu tác dụng được áp dụng tự động.

**Mất điện:** sự kiện ngẫu nhiên từ ngày 2. Bình trà và máy đóng nắp tạm ngừng; nhân viên tự pha cũng không được bỏ qua mất điện. Nếu đã mua máy phát, mở hộp xác nhận và tạm dừng thời gian để người chơi lựa chọn. Đồng ý mới cấp điện và icon chuyển **ĐANG CHẠY**. C1 cấp điện đèn/máy đóng nắp, bình trà chờ điện lưới; C2 cấp điện cả quầy, có nháy điện 1–2 giây. Từ chối thì chờ điện lưới, vẫn có thể chạm icon máy phát để bật lại. Điện lưới phục hồi thì máy phát trở về chờ. Không mở hộp chồng lên UI khác; đợi UI hiện tại đóng. Ca khôi phục hủy sự kiện dở như cơ chế hiện có.

**Giấy phép:** đoàn kiểm tra đến ngẫu nhiên từ ngày 3, có khoảng cách giữa các ngày kiểm tra. Modal chỉ thông báo, chưa thưởng/phạt ngay. Có giấy phép thì chạm **Xuất trình giấy phép**; chưa có thì xác nhận chưa có. Sau xác nhận mới tính kết quả. Có giấy phép: thưởng/đánh giá/followers theo công thức; thiếu: phạt và đình chỉ theo thời gian. Một lần kiểm tra chỉ xử lý một kết quả. Không bảo đảm đoàn xuất hiện mỗi ca.

**ATTP:** kiểm tra ngẫu nhiên từ ngày 4; người chơi xác nhận kiểm tra vệ sinh. Chứng nhận tăng thưởng/giảm phạt theo cấu hình; bàn bẩn hoặc nguyên liệu quá hạn vẫn ảnh hưởng kết quả. Mua chứng nhận không thay việc giữ vệ sinh.

Mapping trang bị:

| Trang bị | Tác dụng thực tế | Nơi áp dụng |
| --- | --- | --- |
| Bình rót trà | Tốc độ rót +10/25/45%; C3 giảm trà tràn | `bonus().pour`, `updateShift()` |
| Máy đóng nắp | 1,2 giây × (1 − 0/30/55%) | `sealCup()`, tiến độ ép nắp |
| Khay topping | Chi phí mỗi phần −3/8/15%; số phần vẫn trừ đúng | `costOf()`, `take()`; mô tả đã sửa cho đúng |
| Ly, đường, đá (bộ dụng cụ) | Boa +5/12/25%, không tự nhập nguyên liệu | `bonus().tip`, tính tiền phục vụ |
| Tủ lạnh | Hạn lô nhập mới +1/2/3 ngày | `addStock()` |
| Mascot | Khách +3/6/10%, hình mascot ở cảnh quán | `bonus().traffic`, `sellSceneHTML()` |
| LED | Khách +4/8/12%, biển LED ở cảnh | `bonus().traffic`, `sellSceneHTML()` |
| Bàn ghế | Tổng 6/8/10 bàn, tăng khả năng khách ngồi ở cấp cao | khởi tạo `SH.tables`, tính chỗ ngồi |
| Xe máy | Tần suất online +10/20/35%; cần đủ điều kiện online | `bonus().online`, sinh đơn; hình xe ở cảnh |
| Quảng cáo MXH | Khách +3/6/10%; followers theo cấp khi phục vụ | `bonus()`, tính kết quả đơn |
| Mở rộng quầy | Hàng chờ tối đa 6/7/8 | `bonus().queue`, kiểm tra hàng chờ |
| Nâng tầng | Khách dự kiến +10/20/35 mỗi ngày | `expectedCustomers()`, lịch khách |
| Máy lạnh | Kiên nhẫn +8/15/25%; điện nước +5/10/20% | `bonus()`, tạo khách, cuối ca |
| Nhận diện | Tem logo trên ly; boa +5/10/15%; cấp cao thêm khách | `cupHTML()`, `bonus()` |
| Tablet | Cho mở 1/2/3/4 ứng dụng; vẫn kiểm tra uy tín, địa điểm | `tabletsOwned()`, `toggleApp()`, `onlineEnabled()` |
| Máy phát | Xác nhận bật, cấp điện đúng công suất, icon báo chạy | `events.js`: `offerGenerator()`, `blocked()` |
| Giấy phép | Xuất trình khi đoàn kiểm tra; kết quả sau xác nhận | `openInspection()`, `licenseResult()` |
| ATTP | Kiểm tra vệ sinh thực tế, thưởng/phạt theo chứng nhận | `openInspection()`, `foodResult()` |

Kiểm tra bắt buộc: mất điện không máy phát, C1, C2, đồng ý/từ chối, kích hoạt lại, rót/ép nắp bằng tay và nhân viên; giấy phép có/không có, chưa bấm không đổi tiền, một kiểm tra không thưởng hai lần; xem mọi icon trang bị, tủ lạnh không sửa hạn cũ; chạy lại kiểm tra menu, hướng dẫn và quầy hiện có.
