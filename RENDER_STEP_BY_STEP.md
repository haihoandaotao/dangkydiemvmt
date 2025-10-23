# 🚀 HƯỚNG DẪN CHI TIẾT DEPLOY LÊN RENDER

## 📌 TỔNG QUAN

**Render** là nền tảng hosting miễn phí, cung cấp:
- ✅ Hosting miễn phí vĩnh viễn
- ✅ HTTPS tự động
- ✅ Domain đẹp (.onrender.com)
- ✅ Deploy tự động từ GitHub
- ✅ Region Singapore (gần VN)

**Thời gian:** 10-15 phút (lần đầu)

---

## 🎯 BƯỚC 1: CHUẨN BỊ TÀI KHOẢN GITHUB

### 1.1. Tạo tài khoản GitHub (nếu chưa có)

1. Truy cập: **https://github.com**
2. Click nút **"Sign up"** (góc trên bên phải)
3. Điền thông tin:
   - **Email**: Email của bạn
   - **Password**: Mật khẩu mạnh
   - **Username**: Tên người dùng (VD: `nguyenvana123`)
4. Xác thực email
5. Đăng nhập vào GitHub

### 1.2. Tạo Repository mới

1. Sau khi đăng nhập GitHub, click nút **"+" (góc trên bên phải)**
2. Chọn **"New repository"**
3. Điền thông tin:
   - **Repository name**: `dang-ky-diem` (hoặc tên bạn thích)
   - **Description**: `Web app tiếp nhận điểm thi năng khiếu`
   - **Public/Private**: Chọn **Public** (để Render miễn phí)
   - ❌ **KHÔNG** tick vào "Add a README file"
   - ❌ **KHÔNG** tick vào ".gitignore"
4. Click nút **"Create repository"** (màu xanh)

**Kết quả:** Bạn sẽ thấy trang hướng dẫn push code lên repo

📸 **Ghi chú:** Để lại trang này mở, chúng ta sẽ dùng ở bước tiếp theo!

---

## 🎯 BƯỚC 2: PUSH CODE LÊN GITHUB

### 2.1. Mở PowerShell

1. Nhấn **Windows + R**
2. Gõ: `powershell`
3. Nhấn **Enter**

### 2.2. Di chuyển đến thư mục dự án

```powershell
cd "d:\Dang ky bang diem"
```

Nhấn **Enter**

### 2.3. Kiểm tra Git đã cài đặt chưa

```powershell
git --version
```

**Nếu hiện lỗi "git is not recognized":**
1. Tải Git tại: https://git-scm.com/download/win
2. Cài đặt Git (nhấn Next liên tục)
3. Khởi động lại PowerShell
4. Thử lại lệnh `git --version`

**Nếu thành công:** Sẽ hiện dòng giống: `git version 2.42.0`

### 2.4. Cấu hình Git (chỉ làm 1 lần)

```powershell
git config --global user.name "Ten Cua Ban"
git config --global user.email "email@example.com"
```

⚠️ **Lưu ý:** Thay email bằng email GitHub của bạn!

### 2.5. Khởi tạo Git repository

```powershell
git init
```

**Kết quả:** `Initialized empty Git repository...`

### 2.6. Thêm tất cả files vào Git

```powershell
git add .
```

**Lưu ý:** Có dấu chấm ở cuối!

### 2.7. Commit code

```powershell
git commit -m "Initial commit - Web app dang ky diem thi"
```

**Kết quả:** Sẽ liệt kê các files đã commit

### 2.8. Kết nối với GitHub Repository

Quay lại trang GitHub repository bạn vừa tạo, copy dòng lệnh có dạng:
```
https://github.com/YOUR_USERNAME/dang-ky-diem.git
```

Rồi chạy lệnh (thay YOUR_USERNAME bằng username của bạn):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/dang-ky-diem.git
```

**Ví dụ:**
```powershell
git remote add origin https://github.com/nguyenvana123/dang-ky-diem.git
```

### 2.9. Đổi tên branch thành main

```powershell
git branch -M main
```

### 2.10. Push code lên GitHub

```powershell
git push -u origin main
```

**Sẽ hỏi đăng nhập GitHub:**
- **Username**: username GitHub của bạn
- **Password**: ⚠️ **KHÔNG phải mật khẩu!** Mà là **Personal Access Token**

### 2.11. Tạo Personal Access Token (nếu cần)

Nếu GitHub yêu cầu token:

1. Vào: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Đặt tên: `Render Deploy Token`
4. Chọn thời hạn: **No expiration** (hoặc 90 days)
5. Tick vào ô: **`repo`** (full access)
6. Scroll xuống, click **"Generate token"** (màu xanh)
7. **Copy token ngay!** (chỉ hiện 1 lần)
8. Paste token vào PowerShell khi hỏi password

### 2.12. Xác nhận push thành công

Refresh lại trang GitHub repository, bạn sẽ thấy tất cả code đã lên!

✅ **Checkpoint:** Code đã có trên GitHub!

---

## 🎯 BƯỚC 3: TẠO TÀI KHOẢN RENDER

### 3.1. Truy cập Render

Mở trình duyệt, vào: **https://render.com**

### 3.2. Đăng ký tài khoản

**CÁCH 1: Đăng nhập bằng GitHub (Khuyến nghị)**
1. Click nút **"Get Started for Free"** hoặc **"Sign Up"**
2. Click **"GitHub"**
3. Cho phép Render truy cập GitHub
4. Xong!

**CÁCH 2: Đăng ký bằng Email**
1. Nhập email và mật khẩu
2. Xác thực email
3. Sau đó kết nối với GitHub trong Settings

### 3.3. Kết nối GitHub (nếu chưa)

Nếu chưa kết nối GitHub:
1. Vào **Account Settings**
2. Tab **"GitHub"**
3. Click **"Connect GitHub Account"**
4. Cho phép Render truy cập repositories

✅ **Checkpoint:** Render đã kết nối với GitHub!

---

## 🎯 BƯỚC 4: TẠO WEB SERVICE TRÊN RENDER

### 4.1. Tạo service mới

1. Tại Dashboard Render, click nút **"New +"** (góc trên bên phải)
2. Chọn **"Web Service"**

### 4.2. Chọn repository

1. Bạn sẽ thấy danh sách repositories từ GitHub
2. Tìm repository **"dang-ky-diem"**
3. Click nút **"Connect"** bên cạnh repository đó

**Nếu không thấy repository:**
- Click **"Configure account"**
- Cho phép Render truy cập tất cả repos hoặc chọn repo cụ thể
- Quay lại và refresh

### 4.3. Cấu hình Web Service

Điền thông tin như sau:

**📝 Name** (Tên service)
```
dang-ky-diem
```
Hoặc tên bạn thích (chữ thường, dấu gạch ngang)

**📍 Region** (Vùng server)
```
Singapore
```
Chọn Singapore vì gần Việt Nam nhất → tốc độ nhanh

**🌿 Branch** (Nhánh Git)
```
main
```

**📂 Root Directory** (Thư mục gốc) - **QUAN TRỌNG!**
```
backend
```
⚠️ Nhập chính xác: `backend` (chữ thường, không dấu cách)

**⚙️ Runtime** (Môi trường)
```
Node
```
Render sẽ tự động detect, nếu không thì chọn **Node**

**🔨 Build Command** (Lệnh build)
```
npm install
```

**▶️ Start Command** (Lệnh chạy)
```
npm start
```

**💰 Instance Type** (Loại máy chủ)
```
Free
```
Chọn **Free** (0 USD/tháng)

### 4.4. Environment Variables (Tùy chọn)

Có thể bỏ qua hoặc thêm:

Click **"Advanced"** → **"Add Environment Variable"**

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `10000` |

**Lưu ý:** Render tự động set PORT, bạn không cần thêm cũng được.

### 4.5. Khởi tạo service

1. Kiểm tra lại tất cả thông tin
2. Click nút **"Create Web Service"** (màu xanh dương, ở cuối trang)

✅ **Checkpoint:** Service đang được tạo!

---

## 🎯 BƯỚC 5: ĐỢI DEPLOY HOÀN TẤT

### 5.1. Theo dõi quá trình deploy

Render sẽ tự động:
1. ✅ Clone code từ GitHub
2. ✅ Chạy `npm install`
3. ✅ Chạy `npm start`
4. ✅ Cấp phát domain

Bạn sẽ thấy logs real-time trên màn hình:
```
==> Cloning from https://github.com/...
==> Running 'npm install'
==> Installing dependencies...
==> Starting service with 'npm start'
==> Server đang chạy tại http://localhost:10000
==> Your service is live 🎉
```

### 5.2. Thời gian chờ

- **Lần đầu:** 2-5 phút
- **Những lần sau:** 1-2 phút (khi push code mới)

### 5.3. Kiểm tra trạng thái

Ở phía trên, bạn sẽ thấy:
- 🔴 **Deploying...** → Đang deploy
- 🟢 **Live** → Đã xong!

Khi thấy **🟢 Live** → Deploy thành công!

✅ **Checkpoint:** Service đã chạy!

---

## 🎯 BƯỚC 6: TRUY CẬP WEB APP

### 6.1. Lấy URL

Ở phía trên dashboard, bạn sẽ thấy URL dạng:
```
https://dang-ky-diem.onrender.com
```

Hoặc URL tùy chỉnh nếu bạn đặt tên khác.

### 6.2. Mở web app

1. Click vào URL hoặc copy và paste vào trình duyệt
2. **Lần đầu tiên có thể chậm** (30-60 giây) vì service đang "thức dậy"
3. Sau đó sẽ thấy giao diện web app!

### 6.3. Kiểm tra các chức năng

**Test đăng ký:**
1. Click tab "📝 Đăng ký"
2. Điền thông tin test
3. Upload file minh chứng (nếu muốn)
4. Click "Đăng ký"
5. Xem thông báo thành công

**Test tra cứu:**
1. Click tab "🔍 Tra cứu"
2. Nhập CCCD vừa đăng ký
3. Click "Tra cứu"
4. Xem kết quả

**Test quản lý:**
1. Click tab "⚙️ Quản lý"
2. Xem danh sách thí sinh
3. Click "Duyệt" để thử duyệt hồ sơ

✅ **Checkpoint:** Web app hoạt động hoàn hảo!

---

## 🎯 BƯỚC 7: CHIA SẺ VỚI NGƯỜI KHÁC

### 7.1. Copy URL

```
https://dang-ky-diem.onrender.com
```

### 7.2. Share

Gửi URL này cho:
- Thí sinh để đăng ký
- Admin để quản lý
- Bạn bè để test

### 7.3. Truy cập từ mọi nơi

✅ Máy tính
✅ Điện thoại
✅ Tablet
✅ Bất kỳ thiết bị nào có internet

---

## 📌 BONUS: THIẾT LẬP THÊM (TÙY CHỌN)

### Custom Domain (Domain riêng)

Nếu bạn có domain (VD: dangkydiem.com):

1. Vào Settings của service
2. Tab **"Custom Domain"**
3. Add domain của bạn
4. Cấu hình DNS theo hướng dẫn
5. Đợi vài phút → Xong!

### Tự động deploy khi push code mới

Mặc định đã bật! Mỗi khi bạn push code mới lên GitHub:
```powershell
git add .
git commit -m "Update feature"
git push
```
→ Render sẽ tự động deploy lại!

### Xem Logs

1. Vào Dashboard service
2. Tab **"Logs"**
3. Xem real-time logs của server

### Metrics

1. Tab **"Metrics"**
2. Xem CPU, Memory, Requests
3. Theo dõi hiệu suất

---

## ⚠️ LƯU Ý QUAN TRỌNG VỚI FREE PLAN

### 1. Service sẽ "ngủ" (Sleep)

**Khi nào ngủ:**
- Sau 15 phút không có request nào

**Khi nào thức:**
- Khi có người truy cập

**Thời gian thức dậy:**
- 30-60 giây (lần đầu)

**Cách khắc phục:**
- Dùng UptimeRobot (miễn phí) để ping app 5 phút/lần
- Hoặc upgrade lên Paid plan ($7/tháng)

### 2. Bandwidth giới hạn

- **100GB/tháng** cho Free plan
- Đủ cho 10,000+ người dùng/tháng

### 3. File upload sẽ mất khi restart

**Vấn đề:**
- File trong `uploads/` sẽ bị xóa khi service restart
- Database JSON cũng có thể bị reset

**Giải pháp:**
- Dùng Cloud Storage (Cloudinary miễn phí)
- Hoặc dùng Render Disk (Paid)
- Hoặc chuyển sang database thật (MongoDB Atlas miễn phí)

### 4. Build time

- Mỗi tháng có **500 build hours** miễn phí
- Mỗi lần deploy mất ~1-2 phút
- Hoàn toàn đủ dùng!

---

## 🐛 TROUBLESHOOTING (XỬ LÝ LỖI)

### Lỗi 1: "Build failed"

**Nguyên nhân:** Thiếu dependencies

**Giải pháp:**
1. Kiểm tra file `package.json` có đầy đủ không
2. Xem logs để biết thiếu gì
3. Push lại code sau khi sửa

### Lỗi 2: "Application Error"

**Nguyên nhân:** Code lỗi hoặc port sai

**Giải pháp:**
1. Xem Logs trên Render
2. Kiểm tra server.js có dùng `process.env.PORT` không
3. Test lại ở local trước

### Lỗi 3: "Repository not found"

**Nguyên nhân:** Render không truy cập được repo

**Giải pháp:**
1. Vào GitHub Settings → Applications
2. Tìm Render, cho phép truy cập repo
3. Hoặc đổi repo thành Public

### Lỗi 4: "Cannot GET /api/students"

**Nguyên nhân:** API không hoạt động

**Giải pháp:**
1. Kiểm tra Root Directory = `backend`
2. Kiểm tra Start Command = `npm start`
3. Xem logs để debug

### Lỗi 5: Frontend hiển thị nhưng API lỗi

**Nguyên nhân:** CORS hoặc URL sai

**Giải pháp:**
- Code đã được cấu hình tự động detect URL
- Nếu vẫn lỗi, mở Console (F12) để xem lỗi cụ thể

---

## ✅ CHECKLIST HOÀN THÀNH

Sau khi làm xong, check lại:

- [ ] ✅ Code đã push lên GitHub
- [ ] ✅ Service đã tạo trên Render
- [ ] ✅ Deploy status = Live (màu xanh)
- [ ] ✅ Truy cập URL được
- [ ] ✅ Test đăng ký → OK
- [ ] ✅ Test tra cứu → OK
- [ ] ✅ Test quản lý → OK
- [ ] ✅ Test upload file → OK
- [ ] ✅ Đã share URL cho người khác

---

## 🎉 HOÀN THÀNH!

Chúc mừng! Web app của bạn đã online và có thể truy cập từ bất kỳ đâu!

**URL của bạn:**
```
https://dang-ky-diem.onrender.com
```
(hoặc URL tương tự)

**Bây giờ bạn có thể:**
- ✅ Share cho bạn bè
- ✅ Thêm vào CV
- ✅ Demo cho nhà tuyển dụng
- ✅ Sử dụng thực tế

---

## 📚 BƯỚC TIẾP THEO (TÙY CHỌN)

### Nâng cấp lên Paid Plan

Nếu cần:
- ❌ Không bị sleep
- ❌ Persistent disk
- ❌ More resources

→ Chỉ $7/tháng

### Thêm tính năng

- 🔐 Hệ thống đăng nhập
- 📊 Dashboard analytics
- 📧 Email notification
- 💾 Database thật (MongoDB)
- ☁️ Cloud storage (Cloudinary)

### Tối ưu hóa

- 🚀 Caching
- 🔒 Rate limiting
- 📱 PWA (Progressive Web App)
- 🌐 Multi-language

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề:
1. Xem lại từng bước trong file này
2. Check logs trên Render
3. Test lại ở local
4. Google error message cụ thể

---

**Chúc bạn deploy thành công!** 🚀

Made with ❤️ by GitHub Copilot
