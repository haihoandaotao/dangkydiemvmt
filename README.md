# 🎨 HỆ THỐNG TIẾP NHẬN ĐIỂM THI NĂNG KHIẾU

Ứng dụng web để tiếp nhận và quản lý điểm thi năng khiếu của thí sinh xét tuyển có sử dụng các tổ hợp có môn Vẽ Mỹ thuật.

## 📋 Tính năng

### Dành cho Thí sinh:
- ✅ Đăng ký và nộp điểm thi năng khiếu
- ✅ Khai báo thông tin cá nhân (Họ tên, Ngày sinh, Số CCCD)
- ✅ Nhập điểm Năng khiếu 1 và Năng khiếu 2
- ✅ Upload minh chứng (ảnh/PDF)
- ✅ Tra cứu kết quả bằng số CCCD

### Dành cho Quản lý (Admin):
- ✅ Xem danh sách tất cả thí sinh đã nộp điểm
- ✅ Thống kê theo trạng thái (Chờ duyệt, Đã duyệt, Không duyệt)
- ✅ Duyệt/Không duyệt hồ sơ
- ✅ Thêm ghi chú cho từng hồ sơ
- ✅ Xóa hồ sơ
- ✅ Xem minh chứng đã upload

## 🚀 Cài đặt

### Yêu cầu hệ thống:
- Node.js (phiên bản 14 trở lên)
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)

### Bước 1: Cài đặt Backend

1. Mở PowerShell/Terminal và di chuyển đến thư mục backend:
```powershell
cd backend
```

2. Cài đặt các dependencies:
```powershell
npm install
```

3. Khởi động server:
```powershell
npm start
```

Hoặc để chạy ở chế độ development (tự động reload khi có thay đổi):
```powershell
npm run dev
```

Server sẽ chạy tại: `http://localhost:3000`

### Bước 2: Mở Frontend

1. Di chuyển đến thư mục frontend
2. Mở file `index.html` bằng trình duyệt web

Hoặc sử dụng Live Server trong VS Code:
- Click chuột phải vào file `index.html`
- Chọn "Open with Live Server"

## 📖 Hướng dẫn sử dụng

### Đối với Thí sinh:

1. **Đăng ký điểm thi:**
   - Truy cập trang web
   - Chọn tab "📝 Đăng ký"
   - Điền đầy đủ thông tin:
     - Họ và tên
     - Ngày sinh
     - Số CCCD (9-12 chữ số)
     - Điểm Năng khiếu 1 (0-10)
     - Điểm Năng khiếu 2 (0-10)
     - Upload minh chứng (tùy chọn, tối đa 5MB)
   - Nhấn nút "Đăng ký"

2. **Tra cứu kết quả:**
   - Chọn tab "🔍 Tra cứu"
   - Nhập số CCCD
   - Nhấn nút "Tra cứu"
   - Xem thông tin và trạng thái duyệt

### Đối với Quản lý (Admin):

1. **Xem danh sách thí sinh:**
   - Chọn tab "⚙️ Quản lý"
   - Xem thống kê tổng quan:
     - Tổng số thí sinh
     - Số hồ sơ chờ duyệt
     - Số hồ sơ đã duyệt
     - Số hồ sơ không duyệt
   - Danh sách chi tiết hiển thị đầy đủ thông tin

2. **Duyệt hồ sơ:**
   - Nhấn nút "Duyệt" tại hàng thí sinh cần duyệt
   - Chọn trạng thái:
     - Đã duyệt
     - Không duyệt
     - Chờ duyệt
   - Nhập ghi chú (nếu cần)
   - Nhấn "Lưu"

3. **Xem minh chứng:**
   - Click vào link "Xem" ở cột "Minh chứng"
   - File sẽ mở trong tab mới

4. **Xóa hồ sơ:**
   - Nhấn nút "Xóa" tại hàng thí sinh cần xóa
   - Xác nhận xóa

## 📁 Cấu trúc thư mục

```
Dang ky bang diem/
│
├── backend/
│   ├── server.js           # Server API
│   ├── package.json        # Dependencies
│   ├── database.json       # Database (tự động tạo)
│   └── uploads/            # Thư mục lưu file upload
│
├── frontend/
│   └── index.html          # Giao diện web
│
└── README.md               # File hướng dẫn này
```

## 🔧 API Endpoints

### Thí sinh:
- `POST /api/students` - Đăng ký mới
- `GET /api/students/lookup/:soCCCD` - Tra cứu bằng CCCD

### Quản lý:
- `GET /api/students` - Lấy danh sách tất cả thí sinh
- `GET /api/students/:id` - Lấy thông tin một thí sinh
- `PUT /api/students/:id/status` - Cập nhật trạng thái duyệt
- `DELETE /api/students/:id` - Xóa thí sinh
- `GET /api/statistics` - Lấy thống kê

## 🎯 Quy định điểm số

- Điểm Năng khiếu 1: 0 - 10 (cho phép số thập phân)
- Điểm Năng khiếu 2: 0 - 10 (cho phép số thập phân)
- Điểm trung bình: Tự động tính = (NK1 + NK2) / 2

## 📝 Quy định file upload

- Định dạng cho phép: JPG, JPEG, PNG, PDF
- Kích thước tối đa: 5MB
- File sẽ được lưu trong thư mục `backend/uploads/`

## 🔒 Bảo mật

- Mỗi số CCCD chỉ được đăng ký 1 lần
- Validate dữ liệu đầu vào ở cả frontend và backend
- File upload được kiểm tra định dạng và kích thước

## ⚙️ Cấu hình

### Thay đổi port server:
Mở file `backend/server.js` và sửa dòng:
```javascript
const PORT = process.env.PORT || 3000;
```

### Thay đổi API URL trong frontend:
Mở file `frontend/index.html` và sửa dòng:
```javascript
const API_URL = 'http://localhost:3000/api';
```

## 🐛 Xử lý lỗi thường gặp

### Lỗi: "Cannot GET /api/students"
- Kiểm tra server backend đã chạy chưa
- Kiểm tra port có bị xung đột không

### Lỗi: "Lỗi kết nối server"
- Kiểm tra URL API trong frontend có đúng không
- Kiểm tra CORS đã được cấu hình chưa
- Kiểm tra firewall có chặn không

### File upload không hoạt động:
- Kiểm tra thư mục `uploads` đã tồn tại chưa
- Kiểm tra quyền ghi file
- Kiểm tra kích thước file < 5MB

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng:
1. Kiểm tra console log trong browser (F12)
2. Kiểm tra log của server
3. Đảm bảo cài đặt đúng các dependencies

## 📄 License

MIT License - Tự do sử dụng cho mục đích giáo dục và thương mại.

---

**Phát triển bởi:** GitHub Copilot
**Ngày tạo:** October 23, 2025
