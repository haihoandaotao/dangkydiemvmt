# 🔐 HƯỚNG DẪN ĐĂNG NHẬP VÀ SỬ DỤNG ADMIN

## ✅ CÁC TÍNH NĂNG MỚI ĐÃ THÊM:

### 1. **Hệ thống đăng nhập Admin**
- ✅ Menu "Quản lý" chỉ hiển thị khi đăng nhập admin
- ✅ Session lưu trong 24 giờ
- ✅ Có nút đăng xuất

### 2. **Thêm thông tin liên hệ**
- ✅ Email (bắt buộc)
- ✅ Số điện thoại (bắt buộc, 10-11 số)

### 3. **Bảo mật API**
- ✅ Tất cả API quản lý yêu cầu token
- ✅ Tự động kiểm tra quyền truy cập

---

## 🔑 THÔNG TIN ĐĂNG NHẬP ADMIN

### Tài khoản mặc định:
```
Username: admin
Password: admin123
```

⚠️ **QUAN TRỌNG**: Đổi mật khẩu sau khi deploy!

---

## 📖 HƯỚNG DẪN SỬ DỤNG

### Dành cho NGƯỜI DÙNG (Thí sinh):

1. **Truy cập trang web**
2. Thấy giao diện với 2 tabs:
   - 📝 Đăng ký
   - 🔍 Tra cứu
   - ⚙️ Quản lý **KHÔNG HIỆN**

3. **Đăng ký thông tin:**
   - Điền họ tên, ngày sinh, số CCCD
   - **[MỚI]** Điền Email
   - **[MỚI]** Điền Số điện thoại
   - Nhập điểm năng khiếu 1, 2
   - Upload minh chứng (tùy chọn)
   - Click Đăng ký

4. **Tra cứu kết quả:**
   - Nhập số CCCD
   - Xem thông tin và trạng thái

---

### Dành cho ADMIN:

#### **Bước 1: Đăng nhập**

1. Truy cập trang web
2. Click nút **"🔐 Đăng nhập Admin"** (góc trên bên phải)
3. Nhập thông tin:
   - Username: `admin`
   - Password: `admin123`
4. Click **"Đăng nhập"**
5. Thấy thông báo thành công và menu "⚙️ Quản lý" xuất hiện

#### **Bước 2: Quản lý thí sinh**

1. Click vào tab **"⚙️ Quản lý"**
2. Xem thống kê tổng quan
3. Xem danh sách thí sinh (có thêm cột Email và SĐT)
4. Duyệt/Không duyệt hồ sơ
5. Xóa hồ sơ (nếu cần)

#### **Bước 3: Đăng xuất**

1. Click nút **"Đăng xuất"** (ở header)
2. Xác nhận đăng xuất
3. Menu "Quản lý" sẽ biến mất

---

## 🔒 BẢO MẬT

### Session Management:
- Session lưu trong 24 giờ
- Token được lưu trong `localStorage`
- Tự động xóa khi hết hạn hoặc đăng xuất

### API Protection:
Các API sau YÊU CẦU ĐĂNG NHẬP:
- ❌ `GET /api/students` - Xem danh sách
- ❌ `GET /api/statistics` - Xem thống kê
- ❌ `PUT /api/students/:id/status` - Duyệt hồ sơ
- ❌ `DELETE /api/students/:id` - Xóa hồ sơ

Các API PUBLIC (không cần đăng nhập):
- ✅ `POST /api/students` - Đăng ký thí sinh
- ✅ `GET /api/students/lookup/:cccd` - Tra cứu

---

## 🔧 ĐỔI MẬT KHẨU ADMIN

### Cách 1: Sửa trong code (đơn giản)

1. Mở file: `backend/server.js`
2. Tìm dòng (khoảng line 13-14):
```javascript
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123'; // Nên thay đổi mật khẩu này!
```

3. Đổi thành:
```javascript
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'matkhaumoinhat'; // Mật khẩu mới
```

4. Save và restart server

### Cách 2: Dùng biến môi trường (khuyến nghị)

1. Tạo file `.env` trong thư mục `backend/`:
```
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
```

2. Cài package:
```bash
npm install dotenv
```

3. Sửa file `server.js`:
```javascript
require('dotenv').config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
```

4. Restart server

---

## 🆕 THAY ĐỔI TRONG DATABASE

### Cấu trúc Student mới:
```json
{
  "id": "uuid",
  "hoTen": "Nguyễn Văn A",
  "ngaySinh": "2000-01-01",
  "soCCCD": "001234567890",
  "email": "nguyenvana@email.com",      // ← MỚI
  "soDienThoai": "0912345678",          // ← MỚI
  "diemNK1": 8.5,
  "diemNK2": 9.0,
  "diemTB": "8.75",
  "minhChung": "/uploads/file.jpg",
  "trangThai": "Chờ duyệt",
  "ngayNop": "2025-10-23T...",
  "ghiChu": ""
}
```

---

## 📊 LUỒNG HOẠT ĐỘNG

### Thí sinh:
```
1. Truy cập web
   ↓
2. Thấy 2 tabs: Đăng ký, Tra cứu
   ↓
3. Điền form (có Email và SĐT)
   ↓
4. Submit
   ↓
5. Tra cứu kết quả bằng CCCD
```

### Admin:
```
1. Truy cập web
   ↓
2. Click "Đăng nhập Admin"
   ↓
3. Nhập admin/admin123
   ↓
4. Tab "Quản lý" xuất hiện
   ↓
5. Xem danh sách (có Email, SĐT)
   ↓
6. Duyệt hồ sơ
   ↓
7. Đăng xuất khi xong
```

---

## 🐛 XỬ LÝ LỖI

### Lỗi: "Unauthorized - Vui lòng đăng nhập admin!"
**Nguyên nhân**: Token hết hạn hoặc không hợp lệ
**Giải pháp**: Đăng nhập lại

### Lỗi: "Email không hợp lệ!"
**Nguyên nhân**: Format email sai
**Giải pháp**: Nhập đúng format: `example@email.com`

### Lỗi: "Số điện thoại phải có 10-11 chữ số!"
**Nguyên nhân**: SĐT không đúng format
**Giải pháp**: Nhập 10-11 chữ số, không có ký tự đặc biệt

### Lỗi: "Email đã được sử dụng!"
**Nguyên nhân**: Email đã tồn tại trong hệ thống
**Giải pháp**: Dùng email khác hoặc liên hệ admin

---

## ✅ CHECKLIST TRIỂN KHAI

Trước khi deploy lên Render/Railway:

- [ ] ✅ Đã test đăng ký với Email và SĐT
- [ ] ✅ Đã test đăng nhập admin
- [ ] ✅ Đã test ẩn/hiện menu Quản lý
- [ ] ✅ Đã test duyệt hồ sơ
- [ ] ✅ Đã test tra cứu
- [ ] ✅ Đã đổi mật khẩu admin
- [ ] ✅ Đã commit và push code lên GitHub

---

## 🚀 PUSH CODE MỚI LÊN GITHUB

```powershell
cd "d:\Dang ky bang diem"
git add .
git commit -m "Add admin login and email/phone fields"
git push
```

Render sẽ tự động deploy lại!

---

## 🎉 HOÀN THÀNH!

**Các tính năng mới:**
- ✅ Hệ thống đăng nhập Admin
- ✅ Ẩn menu Quản lý với người thường
- ✅ Thêm Email vào form
- ✅ Thêm Số điện thoại vào form
- ✅ Bảo mật API với token
- ✅ Session management

**Mật khẩu mặc định:**
- Username: `admin`
- Password: `admin123`

**Nhớ đổi mật khẩu trước khi deploy!**

---

Made with ❤️ by GitHub Copilot
