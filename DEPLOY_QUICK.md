# 🚀 HƯỚNG DẪN NHANH - DEPLOY LÊN RENDER

## Bước 1: Push code lên GitHub

```powershell
# Di chuyển đến thư mục dự án
cd "d:\Dang ky bang diem"

# Khởi tạo git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Deploy: Web app tiep nhan diem thi nang khieu"

# Tạo repository trên GitHub trước, sau đó:
# Thay YOUR_USERNAME và YOUR_REPO bằng thông tin của bạn
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

## Bước 2: Deploy trên Render

1. Truy cập: https://render.com
2. Đăng ký/Đăng nhập (dùng GitHub)
3. Click "New +" → "Web Service"
4. Chọn repository GitHub của bạn
5. Cấu hình:
   ```
   Name: dang-ky-diem
   Region: Singapore
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Free
   ```
6. Click "Create Web Service"
7. Đợi 2-3 phút để deploy

## Bước 3: Truy cập

Render sẽ cung cấp URL dạng: `https://dang-ky-diem.onrender.com`

Mở URL đó trên trình duyệt và sử dụng!

---

## ⚡ CÁCH NHANH NHẤT - DÙNG NGROK (TẠM THỜI)

Nếu chỉ cần demo nhanh trong vài giờ:

```powershell
# Terminal 1: Chạy server
cd "d:\Dang ky bang diem\backend"
npm start

# Terminal 2: Mở PowerShell mới và chạy
ngrok http 3000
```

Ngrok sẽ cho bạn URL public tạm thời!

---

## 📚 Chi tiết đầy đủ

Xem file `DEPLOY.md` để biết thêm chi tiết về các phương án khác.
