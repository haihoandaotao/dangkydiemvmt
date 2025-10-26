# Hướng dẫn cấu hình Email

## Tính năng
Hệ thống tự động gửi email xác nhận cho thí sinh ngay sau khi đăng ký nộp điểm thành công.

**Thông tin email:**
- Từ: phongdaotao@dau.edu.vn
- Tiêu đề: "Xác nhận nộp điểm VMT thành công"
- Nội dung: Thông tin chi tiết đăng ký của thí sinh

## Cấu hình trên Render

### Bước 1: Lấy thông tin SMTP
Liên hệ với bộ phận IT của trường để lấy:
- SMTP Host (ví dụ: smtp.dau.edu.vn)
- SMTP Port (thường là 587 hoặc 465)
- Username: phongdaotao@dau.edu.vn
- Password: mật khẩu email

### Bước 2: Thêm Environment Variables trên Render

1. Vào https://dashboard.render.com
2. Chọn service **dangkydiemvmt-1**
3. Vào tab **Environment**
4. Thêm các biến sau:

```
SMTP_HOST=smtp.dau.edu.vn
SMTP_PORT=587
EMAIL_USER=phongdaotao@dau.edu.vn
EMAIL_PASSWORD=mat_khau_email_cua_ban
```

5. Nhấn **Save Changes**
6. Service sẽ tự động redeploy

### Bước 3: Kiểm tra

1. Đăng ký thử với email thật
2. Kiểm tra hộp thư đến
3. Xem log trên Render (tab Logs) để debug nếu có lỗi

## Phương án thay thế (nếu chưa có SMTP trường)

### Dùng Gmail tạm thời

1. Tạo App Password cho Gmail:
   - Vào https://myaccount.google.com/apppasswords
   - Tạo app password mới
   - Copy mật khẩu 16 ký tự

2. Thêm vào Render Environment:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=app_password_16_ky_tu
```

3. **Lưu ý:** Trong email sẽ vẫn hiển thị "From: phongdaotao@dau.edu.vn" nhưng thực tế gửi từ Gmail

## Test local

1. Tạo file `.env` trong thư mục `backend`:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

2. Cài dotenv:
```bash
npm install dotenv
```

3. Thêm vào đầu `server.js`:
```javascript
require('dotenv').config();
```

4. Chạy server và test

## Troubleshooting

### Lỗi "Invalid login"
- Kiểm tra username/password đúng chưa
- Nếu dùng Gmail: phải dùng App Password, không dùng mật khẩu thường

### Lỗi "Connection timeout"
- Kiểm tra SMTP_HOST và SMTP_PORT đúng chưa
- Kiểm tra firewall/antivirus có chặn không

### Email vào Spam
- Cần cấu hình SPF, DKIM cho domain dau.edu.vn
- Liên hệ IT để setup

### Email không gửi được
- Xem log trên Render: tab Logs
- Tìm dòng "❌ Error sending email:" để xem lỗi chi tiết
