# 📱 HƯỚNG DẪN SỬ DỤNG CHO NGƯỜI DÙNG

## 🎯 Web app này dùng để làm gì?

Hệ thống tiếp nhận điểm thi năng khiếu cho thí sinh xét tuyển có sử dụng các tổ hợp có môn Vẽ Mỹ thuật.

---

## 👥 CÓ 2 LOẠI NGƯỜI DÙNG

### 1️⃣ THÍ SINH
Có thể:
- Đăng ký và nộp điểm thi
- Upload minh chứng
- Tra cứu kết quả

### 2️⃣ QUẢN LÝ (Admin)
Có thể:
- Xem danh sách thí sinh
- Duyệt/không duyệt hồ sơ
- Xem thống kê

---

## 📝 HƯỚNG DẪN CHO THÍ SINH

### Bước 1: Truy cập trang web

Mở trình duyệt và nhập URL:
- Nếu chạy local: `http://localhost:3000`
- Nếu đã deploy: URL do admin cung cấp

### Bước 2: Đăng ký điểm

1. Click vào tab **"📝 Đăng ký"** (mặc định đã mở sẵn)
2. Điền đầy đủ thông tin:

   **Thông tin cá nhân:**
   - Họ và tên (VD: Nguyễn Văn A)
   - Ngày sinh (chọn từ calendar)
   - Số CCCD (9-12 chữ số, VD: 001234567890)

   **Điểm thi:**
   - Điểm Năng khiếu 1 (từ 0 đến 10, có thể nhập số thập phân, VD: 8.5)
   - Điểm Năng khiếu 2 (từ 0 đến 10, VD: 9.0)

   **Minh chứng (không bắt buộc):**
   - Click nút "📎 Chọn file"
   - Chọn file ảnh (JPG, PNG) hoặc PDF
   - Kích thước tối đa: 5MB

3. Kiểm tra lại thông tin
4. Click nút **"Đăng ký"**
5. Chờ thông báo thành công ✅

### Bước 3: Tra cứu kết quả

1. Click vào tab **"🔍 Tra cứu"**
2. Nhập số CCCD của bạn
3. Click **"Tra cứu"**
4. Xem thông tin và trạng thái:
   - ⏳ **Chờ duyệt**: Hồ sơ đang được xem xét
   - ✅ **Đã duyệt**: Hồ sơ đã được chấp nhận
   - ❌ **Không duyệt**: Hồ sơ không đạt (xem ghi chú để biết lý do)

---

## ⚙️ HƯỚNG DẪN CHO QUẢN LÝ (ADMIN)

### Bước 1: Truy cập trang quản lý

1. Mở trang web
2. Click vào tab **"⚙️ Quản lý"**

### Bước 2: Xem thống kê

Ở phần đầu trang, bạn sẽ thấy 4 thẻ thống kê:
- **Tổng số thí sinh**: Tổng số người đã đăng ký
- **Chờ duyệt**: Số hồ sơ đang chờ xét duyệt
- **Đã duyệt**: Số hồ sơ đã được chấp nhận
- **Không duyệt**: Số hồ sơ bị từ chối

### Bước 3: Xem danh sách thí sinh

Bảng dưới hiển thị thông tin chi tiết:
- STT
- Họ tên
- Ngày sinh
- Số CCCD
- Điểm Năng khiếu 1
- Điểm Năng khiếu 2
- Điểm trung bình (tự động tính)
- Trạng thái hiện tại
- Minh chứng (click "Xem" để mở file)
- Thao tác (Duyệt/Xóa)

### Bước 4: Duyệt hồ sơ

1. Tìm thí sinh cần duyệt trong bảng
2. Click nút **"Duyệt"** (màu vàng)
3. Cửa sổ popup hiện ra, chọn trạng thái:
   - **Đã duyệt**: Chấp nhận hồ sơ
   - **Không duyệt**: Từ chối hồ sơ
   - **Chờ duyệt**: Đặt lại về trạng thái chờ
4. Nhập ghi chú (nếu cần):
   - VD: "Thiếu minh chứng"
   - VD: "Điểm đạt yêu cầu"
5. Click **"Lưu"**

### Bước 5: Xem minh chứng

1. Trong cột "Minh chứng", click vào **"Xem"**
2. File sẽ mở trong tab mới của trình duyệt
3. Kiểm tra tính hợp lệ của minh chứng

### Bước 6: Xóa hồ sơ (nếu cần)

⚠️ **Cảnh báo**: Thao tác này không thể hoàn tác!

1. Click nút **"Xóa"** (màu đỏ)
2. Xác nhận lại trong popup
3. Hồ sơ sẽ bị xóa vĩnh viễn

---

## ❓ CÂU HỎI THƯỜNG GẶP

### Q1: Tôi nhập sai thông tin, có sửa được không?

**A:** Hiện tại chưa có chức năng sửa. Bạn cần liên hệ admin để xóa hồ sơ cũ, sau đó đăng ký lại.

### Q2: Tôi quên số CCCD đã đăng ký, làm sao tra cứu?

**A:** Liên hệ admin để được hỗ trợ tra cứu bằng họ tên hoặc thông tin khác.

### Q3: Tôi có thể đăng ký nhiều lần không?

**A:** Không. Mỗi số CCCD chỉ được đăng ký 1 lần. Nếu đăng ký lần 2, hệ thống sẽ báo lỗi "Số CCCD đã tồn tại".

### Q4: Minh chứng bắt buộc phải upload không?

**A:** Không bắt buộc, nhưng nên upload để quá trình duyệt nhanh hơn.

### Q5: File minh chứng chấp nhận định dạng gì?

**A:** JPG, JPEG, PNG, PDF. Kích thước tối đa 5MB.

### Q6: Sau khi đăng ký bao lâu thì có kết quả?

**A:** Tùy vào admin. Bạn có thể tra cứu bất kỳ lúc nào bằng số CCCD.

### Q7: Trang web có hoạt động trên điện thoại không?

**A:** Có! Web app responsive, hoạt động tốt trên mọi thiết bị.

### Q8: Tôi là admin, làm sao phân biệt được ai là admin?

**A:** Hiện tại chưa có hệ thống đăng nhập. Ai có link đều có thể vào tab Quản lý. Nếu cần bảo mật, hãy yêu cầu developer thêm tính năng login.

---

## 🛠️ BÁO LỖI

Nếu gặp vấn đề kỹ thuật:
1. Chụp màn hình lỗi
2. Ghi lại các bước đã làm
3. Liên hệ admin hoặc IT support

---

## 📞 LIÊN HỆ HỖ TRỢ

Nếu cần hỗ trợ thêm, vui lòng liên hệ:
- **Email**: [Thêm email của bạn]
- **Điện thoại**: [Thêm số điện thoại]

---

## ✅ CHECKLIST TRƯỚC KHI ĐĂNG KÝ

- [ ] Đã chuẩn bị đầy đủ thông tin cá nhân
- [ ] Đã có điểm thi năng khiếu chính xác
- [ ] Đã có số CCCD hợp lệ (9-12 chữ số)
- [ ] Đã chuẩn bị file minh chứng (nếu có)
- [ ] Kiểm tra kết nối internet ổn định

---

**Chúc bạn đăng ký thành công!** 🎉
