# Hướng dẫn NHANH: Kích hoạt gửi Email

## ✅ Đã hoàn thành
- ✅ Code gửi email đã được thêm vào hệ thống
- ✅ Đã push lên GitHub
- ✅ Email template đã thiết kế đẹp với logo DAU

## 🔧 QUAN TRỌNG: Cần làm ngay để email hoạt động

### Bước 1: Lấy thông tin SMTP từ IT
Liên hệ phòng IT của trường để xin:
1. SMTP Server (ví dụ: smtp.dau.edu.vn hoặc mail.dau.edu.vn)
2. SMTP Port (thường là 587 hoặc 465)
3. Username: phongdaotao@dau.edu.vn
4. Password của email này

### Bước 2: Cấu hình trên Render
1. Mở https://dashboard.render.com
2. Chọn service **dangkydiemvmt-1**
3. Click tab **Environment** (bên trái)
4. Thêm 4 biến môi trường:

```
Tên biến              | Giá trị
---------------------|------------------------
SMTP_HOST            | smtp.dau.edu.vn
SMTP_PORT            | 587
EMAIL_USER           | phongdaotao@dau.edu.vn
EMAIL_PASSWORD       | [mật khẩu email]
```

5. Click **Save Changes**
6. Render sẽ tự động deploy lại (chờ 2-3 phút)

### Bước 3: Test thử
1. Đăng ký với email thật của bạn
2. Kiểm tra hộp thư
3. Nếu không nhận được email:
   - Vào Render > Logs
   - Tìm dòng "Error sending email" để xem lỗi

## 🚀 Phương án TẠM THỜI (nếu chưa có SMTP)

Dùng Gmail để test:

1. Tạo App Password Gmail:
   - Vào https://myaccount.google.com/apppasswords
   - Tạo mật khẩu ứng dụng
   - Copy 16 ký tự

2. Thêm vào Render Environment:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=[16 ký tự app password]
```

**Lưu ý:** Email vẫn hiển thị "From: phongdaotao@dau.edu.vn" nhưng thực tế gửi qua Gmail

## 📧 Nội dung email gửi cho thí sinh

**Tiêu đề:** Xác nhận nộp điểm VMT thành công

**Nội dung:**
- Logo và tên trường
- Thông tin đầy đủ thí sinh vừa đăng ký
- Điểm NK1, NK2, điểm TB
- Trạng thái: Chờ duyệt
- Hướng dẫn tra cứu
- Thông tin liên hệ phòng đào tạo

---

**Cần trợ giúp?** Xem file `EMAIL_CONFIG.md` để biết chi tiết!
