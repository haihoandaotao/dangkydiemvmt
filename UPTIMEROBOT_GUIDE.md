# 🤖 HƯỚNG DẪN SỬ DỤNG UPTIMEROBOT

## 🎯 UptimeRobot là gì?

**UptimeRobot** là dịch vụ miễn phí giúp:
- ✅ Ping (kiểm tra) website của bạn định kỳ
- ✅ Giữ cho Render service không bị "ngủ" (sleep)
- ✅ Thông báo khi website down
- ✅ Hoàn toàn MIỄN PHÍ cho 50 monitors

---

## ❓ TẠI SAO CẦN UPTIMEROBOT?

### Vấn đề với Render Free Plan:
- ⏰ Service **tự động ngủ** sau **15 phút** không có request
- 🐌 Lần đầu truy cập sau khi ngủ phải đợi **30-60 giây** để thức dậy
- 😔 Trải nghiệm người dùng kém

### Giải pháp:
- 🤖 UptimeRobot ping website mỗi **5 phút**
- ✅ Service luôn "thức" → không cần đợi
- 🚀 Tốc độ truy cập nhanh ngay lập tức

---

## 📋 HƯỚNG DẪN TỪNG BƯỚC

### **BƯỚC 1: Đăng ký tài khoản UptimeRobot**

1. Truy cập: **https://uptimerobot.com**

2. Click nút **"Free Sign Up"** (góc trên bên phải)

3. Chọn cách đăng ký:
   - **Option 1:** Dùng Email
     - Nhập email của bạn
     - Tạo mật khẩu
     - Click "Sign Up"
     - Xác thực email
   
   - **Option 2:** Đăng nhập bằng Google (Nhanh hơn)
     - Click "Sign up with Google"
     - Chọn tài khoản Google
     - Cho phép truy cập

4. **Hoàn thành!** Bạn sẽ được chuyển đến Dashboard

---

### **BƯỚC 2: Lấy URL của web app trên Render**

1. Vào Render Dashboard: **https://dashboard.render.com**

2. Click vào service **"dangkydiemvmt"** của bạn

3. Copy URL ở phía trên (dạng):
   ```
   https://dangkydiemvmt.onrender.com
   ```

4. **Giữ URL này**, sẽ dùng ở bước tiếp theo

---

### **BƯỚC 3: Tạo Monitor mới**

1. Tại Dashboard UptimeRobot, click nút **"+ Add New Monitor"** (màu xanh lá)

2. Điền thông tin:

   **Monitor Type:**
   ```
   HTTP(s)
   ```
   *(Chọn từ dropdown, đây là option mặc định)*

   **Friendly Name:** *(Tên để bạn nhớ)*
   ```
   Dang Ky Diem VMT
   ```

   **URL (or IP):** *(Paste URL của bạn từ Render)*
   ```
   https://dangkydiemvmt.onrender.com
   ```

   **Monitoring Interval:** *(Tần suất ping)*
   ```
   Every 5 minutes
   ```
   *(Đây là tùy chọn tốt nhất cho Free Plan)*

3. **Các tùy chọn nâng cao** (có thể bỏ qua):
   - Monitor Timeout: `30 seconds` (mặc định)
   - Alert Contacts: Để mặc định (sẽ gửi email cho bạn nếu down)

4. Click nút **"Create Monitor"** (màu xanh lá, ở dưới cùng)

---

### **BƯỚC 4: Kiểm tra Monitor hoạt động**

1. Quay lại Dashboard, bạn sẽ thấy monitor mới:
   ```
   🟢 Dang Ky Diem VMT - Up (100%)
   ```

2. **Ý nghĩa các trạng thái:**
   - 🟢 **Up:** Website đang chạy bình thường
   - 🔴 **Down:** Website gặp sự cố
   - ⚪ **Paused:** Monitor tạm dừng

3. Click vào tên monitor để xem chi tiết:
   - Response time (thời gian phản hồi)
   - Uptime percentage (tỉ lệ online)
   - Logs (lịch sử ping)

---

## ✅ XÁC NHẬN HOẠT ĐỘNG

### Sau 5-10 phút:

1. **Kiểm tra UptimeRobot:**
   - Vào Dashboard
   - Xem monitor có status **🟢 Up** không
   - Click vào để xem Response Time

2. **Kiểm tra Render:**
   - Vào Render Dashboard
   - Tab "Logs"
   - Sẽ thấy requests từ UptimeRobot mỗi 5 phút:
   ```
   GET / 200 - 123ms
   ```

3. **Test tốc độ:**
   - Mở web app của bạn
   - **Không còn delay 30-60s** nữa!
   - Trang load nhanh ngay lập tức

---

## 🎨 TÙY CHỈNH THÔNG BÁO (OPTIONAL)

### Nhận email khi website down:

1. Vào **"My Settings"** (góc trên bên phải)

2. Tab **"Alert Contacts"**

3. Email của bạn đã được thêm tự động

4. Có thể thêm thêm:
   - Email khác
   - SMS (cần upgrade)
   - Slack
   - Discord webhook
   - Telegram

5. Click **"Save Changes"**

### Bây giờ nếu website down > 5 phút:
- 📧 Bạn sẽ nhận email cảnh báo
- 📱 Có thể khắc phục ngay

---

## 📊 XEM THỐNG KÊ

### Dashboard UptimeRobot hiển thị:

1. **Uptime Percentage:**
   ```
   Last 24 hours: 100%
   Last 7 days: 99.99%
   Last 30 days: 99.95%
   ```

2. **Response Time:**
   ```
   Average: 250ms
   Current: 189ms
   ```

3. **Incident History:**
   - Lịch sử các lần website down
   - Thời gian down
   - Nguyên nhân

4. **Public Status Page** (Optional):
   - Tạo trang status công khai
   - Share với người dùng
   - URL dạng: `status.yoursite.com`

---

## 💡 TIPS & TRICKS

### 1. **Tối ưu Monitoring Interval:**

| Interval | Free Plan | Tác dụng |
|----------|-----------|----------|
| 5 minutes | ✅ Khuyến nghị | Đủ để giữ service thức |
| 1 minute | ❌ Cần upgrade | Tốn bandwidth không cần thiết |
| 30 minutes | ⚠️ Không tốt | Service vẫn có thể ngủ |

### 2. **Monitor nhiều endpoints:**

Nếu muốn, có thể thêm thêm monitors cho:
- `https://dangkydiemvmt.onrender.com/api/statistics`
- `https://dangkydiemvmt.onrender.com/api/students`

Nhưng **không cần thiết**, monitor trang chủ là đủ!

### 3. **Pause monitor khi maintenance:**

- Click vào monitor
- Click nút **"Pause"**
- Làm maintenance
- Click **"Resume"** khi xong

### 4. **Keyword Monitoring (Nâng cao):**

Kiểm tra nội dung trang:
- Thêm "Keyword" khi tạo monitor
- VD: "Hệ thống tiếp nhận"
- Alert nếu keyword không xuất hiện

---

## 🚨 TROUBLESHOOTING

### Monitor báo Down nhưng site vẫn chạy:

**Nguyên nhân:**
- Render đang restart
- Network timeout tạm thời

**Giải pháp:**
- Đợi 2-3 phút
- UptimeRobot sẽ tự động detect Up lại

### Response time cao (>3000ms):

**Nguyên nhân:**
- Render Free tier bị giới hạn CPU
- Database query chậm

**Giải pháp:**
- Tối ưu code
- Hoặc upgrade Render plan

### Không nhận được email alert:

**Giải pháp:**
1. Check spam folder
2. Verify email trong Settings
3. Thêm `support@uptimerobot.com` vào contacts

---

## 📈 GIỚI HẠN FREE PLAN

### UptimeRobot Free Plan cho phép:

| Tính năng | Giới hạn |
|-----------|----------|
| **Số monitors** | 50 monitors |
| **Monitoring interval** | Tối thiểu 5 phút |
| **Alert contacts** | Unlimited |
| **Monitor types** | HTTP(s), Ping, Port, Keyword |
| **Logs retention** | 2 tháng |
| **SSL monitoring** | ✅ Có |
| **Public status page** | 1 page |

**→ Hoàn toàn ĐỦ cho nhu cầu của bạn!**

---

## 🔄 TỰ ĐỘNG HÓA (OPTIONAL)

### Tích hợp với Render:

UptimeRobot có thể:
- Webhook khi service down
- Tự động trigger rebuild trên Render
- Gửi notification vào Discord/Slack

**Setup:** Xem docs tại https://uptimerobot.com/api/

---

## ✅ CHECKLIST HOÀN THÀNH

Sau khi setup xong, check lại:

- [ ] ✅ Đã đăng ký UptimeRobot
- [ ] ✅ Đã tạo monitor cho Render URL
- [ ] ✅ Monitor interval = 5 minutes
- [ ] ✅ Monitor status = 🟢 Up
- [ ] ✅ Đã test web app → load nhanh
- [ ] ✅ Email alert đã được verify
- [ ] ✅ (Optional) Đã tạo public status page

---

## 🎉 HOÀN TẤT!

**Bây giờ web app của bạn:**
- ✅ Luôn online 24/7
- ✅ Không bao giờ "ngủ"
- ✅ Tốc độ truy cập nhanh
- ✅ Nhận thông báo khi có sự cố
- ✅ Hoàn toàn MIỄN PHÍ!

---

## 📚 TÀI LIỆU THAM KHẢO

- Website: https://uptimerobot.com
- Docs: https://uptimerobot.com/help/
- API: https://uptimerobot.com/api/
- Blog: https://blog.uptimerobot.com

---

## 🆘 CẦN HỖ TRỢ?

Nếu gặp vấn đề:
1. Check UptimeRobot docs
2. Xem Render logs
3. Email support@uptimerobot.com

---

**Chúc bạn setup thành công!** 🚀

Made with ❤️ by GitHub Copilot
