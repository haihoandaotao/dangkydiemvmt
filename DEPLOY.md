# 🚀 HƯỚNG DẪN DEPLOY WEB APP LÊN INTERNET

Có nhiều cách để deploy web app miễn phí. Dưới đây là 3 phương án phổ biến nhất:

---

## 🎯 PHƯƠNG ÁN 1: RENDER (KHUYẾN NGHỊ - MIỄN PHÍ)

Render cung cấp hosting miễn phí với domain HTTPS tự động.

### Bước 1: Chuẩn bị Git Repository

1. Tạo tài khoản GitHub (nếu chưa có): https://github.com
2. Tạo repository mới trên GitHub
3. Push code lên GitHub:

```powershell
# Mở PowerShell tại thư mục "Dang ky bang diem"
cd "d:\Dang ky bang diem"

# Khởi tạo git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 2: Deploy trên Render

1. Truy cập: https://render.com
2. Đăng ký tài khoản (có thể dùng GitHub để đăng nhập)
3. Click "New +" → "Web Service"
4. Kết nối với GitHub repository của bạn
5. Cấu hình như sau:
   - **Name**: `dang-ky-diem` (hoặc tên bạn muốn)
   - **Region**: `Singapore` (gần Việt Nam nhất)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

6. Click "Create Web Service"

### Bước 3: Đợi Deploy Hoàn Tất

- Render sẽ tự động build và deploy
- Quá trình mất khoảng 2-3 phút
- Sau khi xong, bạn sẽ nhận được URL dạng: `https://dang-ky-diem.onrender.com`

### Bước 4: Truy Cập Web App

Mở trình duyệt và truy cập URL mà Render cung cấp!

**Lưu ý với Free Plan:**
- Service sẽ "ngủ" sau 15 phút không hoạt động
- Lần đầu truy cập sau khi "ngủ" sẽ mất 30-60s để "thức dậy"
- Bandwidth: 100GB/tháng
- Hoàn toàn đủ cho mục đích học tập và demo

---

## 🎯 PHƯƠNG ÁN 2: RAILWAY (MIỄN PHÍ CÓ GIỚI HẠN)

Railway cung cấp $5 credit miễn phí mỗi tháng.

### Bước 1: Chuẩn bị Git Repository

Làm tương tự Phương án 1, bước 1.

### Bước 2: Deploy trên Railway

1. Truy cập: https://railway.app
2. Đăng nhập bằng GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Chọn repository của bạn
5. Cấu hình:
   - **Root Directory**: `backend`
   - Railway sẽ tự động detect Node.js
6. Thêm biến môi trường (Settings → Variables):
   - `NODE_ENV`: `production`
7. Deploy sẽ tự động chạy

### Bước 3: Tạo Public Domain

1. Vào Settings của service
2. Click "Generate Domain"
3. Bạn sẽ nhận được URL dạng: `https://dang-ky-diem-production.up.railway.app`

---

## 🎯 PHƯƠNG ÁN 3: VERCEL (CHỈ CHO STATIC/SERVERLESS)

**Lưu ý**: Vercel phù hợp hơn cho static sites. Với app của chúng ta cần upload file và lưu database, Render hoặc Railway sẽ tốt hơn.

---

## 🎯 PHƯƠNG ÁN 4: HEROKU (TRẢ PHÍ TỪ 2022)

Heroku không còn free tier. Nếu muốn dùng phải trả $5-7/tháng.

---

## 🎯 PHƯƠNG ÁN 5: DEPLOY LOCAL + NGROK (TẠM THỜI)

Nếu bạn chỉ cần share tạm thời trong vài giờ:

### Bước 1: Cài đặt ngrok

1. Tải ngrok: https://ngrok.com/download
2. Giải nén và chạy

### Bước 2: Chạy Server Local

```powershell
cd "d:\Dang ky bang diem\backend"
npm start
```

### Bước 3: Expose ra Internet

```powershell
# Mở PowerShell mới
ngrok http 3000
```

Bạn sẽ nhận được URL dạng: `https://abcd-1234.ngrok.io`

**Lưu ý**: 
- URL sẽ thay đổi mỗi lần chạy lại
- Chỉ hoạt động khi máy tính của bạn đang bật
- Free plan có giới hạn thời gian

---

## 📋 SO SÁNH CÁC PHƯƠNG ÁN

| Tính năng | Render | Railway | Ngrok |
|-----------|--------|---------|-------|
| **Giá** | Miễn phí | $5/tháng free | Miễn phí có giới hạn |
| **Domain** | HTTPS tự động | HTTPS tự động | Tạm thời |
| **Uptime** | Ngủ sau 15 phút | 24/7 | Khi máy bật |
| **Database** | ✅ Persistent | ✅ Persistent | ❌ Local only |
| **Upload Files** | ✅ | ✅ | ✅ |
| **Khuyến nghị** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ (demo) |

---

## ✅ KHUYẾN NGHỊ

**Dùng RENDER** - Lý do:
- ✅ Hoàn toàn miễn phí
- ✅ Dễ setup
- ✅ HTTPS miễn phí
- ✅ Persistent storage
- ✅ Không cần credit card
- ✅ Region Singapore gần VN

---

## 🔧 TROUBLESHOOTING

### Lỗi: "Application Error" sau khi deploy

**Giải pháp**:
1. Kiểm tra logs trên Render/Railway
2. Đảm bảo `package.json` có đúng dependencies
3. Kiểm tra biến môi trường `PORT` được set đúng

### Lỗi: Upload file không hoạt động

**Giải pháp**:
- Render Free tier có persistent disk
- File upload sẽ bị mất khi service restart
- Để lưu lâu dài, cần dùng cloud storage (AWS S3, Cloudinary)

### Lỗi: Database bị reset

**Giải pháp**:
- File `database.json` sẽ bị reset khi deploy mới
- Nên chuyển sang database thật (MongoDB, PostgreSQL)
- Hoặc dùng Railway với volume mount

### Lỗi: CORS khi truy cập từ domain khác

**Giải pháp**: Code đã được cấu hình CORS sẵn, không cần thay đổi.

---

## 🎓 NÂNG CAO (TÙY CHỌN)

### Thêm Database thật (MongoDB)

1. Tạo database miễn phí trên: https://www.mongodb.com/cloud/atlas
2. Cài thêm package: `npm install mongoose`
3. Update code để dùng MongoDB thay vì JSON file

### Thêm Cloud Storage cho Upload

1. Dùng Cloudinary: https://cloudinary.com (miễn phí)
2. Cài package: `npm install cloudinary multer-storage-cloudinary`
3. Update multer config

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề khi deploy:
1. Kiểm tra logs của service
2. Đảm bảo code chạy được ở local trước
3. Kiểm tra file `.gitignore` không ignore file quan trọng
4. Xem documentation của platform bạn chọn

---

## 🎉 HOÀN THÀNH!

Sau khi deploy thành công, bạn có thể:
- Share URL cho người khác truy cập
- Test trên nhiều thiết bị khác nhau
- Thêm vào CV/portfolio của bạn

**Chúc bạn deploy thành công!** 🚀
