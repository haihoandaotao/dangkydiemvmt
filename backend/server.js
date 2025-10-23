const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Cấu hình multer để upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = './uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Chỉ chấp nhận file ảnh (JPEG, PNG) hoặc PDF!'));
    }
  }
});

// Database đơn giản (lưu vào file JSON)
const DB_FILE = './database.json';

// Khởi tạo database
function initDatabase() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = {
      students: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
  }
}

// Đọc database
function readDatabase() {
  const data = fs.readFileSync(DB_FILE, 'utf8');
  return JSON.parse(data);
}

// Ghi database
function writeDatabase(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// API Routes

// 1. Đăng ký thí sinh mới
app.post('/api/students', upload.single('minhChung'), (req, res) => {
  try {
    const { hoTen, ngaySinh, soCCCD, diemNK1, diemNK2 } = req.body;
    
    // Validate dữ liệu
    if (!hoTen || !ngaySinh || !soCCCD || !diemNK1 || !diemNK2) {
      return res.status(400).json({ 
        success: false, 
        message: 'Vui lòng điền đầy đủ thông tin!' 
      });
    }

    // Kiểm tra điểm hợp lệ (0-10)
    const diem1 = parseFloat(diemNK1);
    const diem2 = parseFloat(diemNK2);
    
    if (isNaN(diem1) || isNaN(diem2) || diem1 < 0 || diem1 > 10 || diem2 < 0 || diem2 > 10) {
      return res.status(400).json({ 
        success: false, 
        message: 'Điểm phải là số từ 0 đến 10!' 
      });
    }

    const db = readDatabase();
    
    // Kiểm tra trùng CCCD
    const existingStudent = db.students.find(s => s.soCCCD === soCCCD);
    if (existingStudent) {
      return res.status(400).json({ 
        success: false, 
        message: 'Số CCCD đã tồn tại trong hệ thống!' 
      });
    }

    const newStudent = {
      id: uuidv4(),
      hoTen,
      ngaySinh,
      soCCCD,
      diemNK1: diem1,
      diemNK2: diem2,
      diemTB: ((diem1 + diem2) / 2).toFixed(2),
      minhChung: req.file ? `/uploads/${req.file.filename}` : null,
      trangThai: 'Chờ duyệt',
      ngayNop: new Date().toISOString(),
      ghiChu: ''
    };

    db.students.push(newStudent);
    writeDatabase(db);

    res.status(201).json({ 
      success: true, 
      message: 'Đăng ký thành công!',
      data: newStudent
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra: ' + error.message 
    });
  }
});

// 2. Lấy danh sách tất cả thí sinh (cho admin)
app.get('/api/students', (req, res) => {
  try {
    const db = readDatabase();
    res.json({ 
      success: true, 
      data: db.students 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra!' 
    });
  }
});

// 3. Lấy thông tin một thí sinh
app.get('/api/students/:id', (req, res) => {
  try {
    const db = readDatabase();
    const student = db.students.find(s => s.id === req.params.id);
    
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'Không tìm thấy thí sinh!' 
      });
    }
    
    res.json({ 
      success: true, 
      data: student 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra!' 
    });
  }
});

// 4. Tra cứu thông tin bằng CCCD
app.get('/api/students/lookup/:soCCCD', (req, res) => {
  try {
    const db = readDatabase();
    const student = db.students.find(s => s.soCCCD === req.params.soCCCD);
    
    if (!student) {
      return res.status(404).json({ 
        success: false, 
        message: 'Không tìm thấy thông tin!' 
      });
    }
    
    res.json({ 
      success: true, 
      data: student 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra!' 
    });
  }
});

// 5. Cập nhật trạng thái duyệt
app.put('/api/students/:id/status', (req, res) => {
  try {
    const { trangThai, ghiChu } = req.body;
    
    if (!trangThai) {
      return res.status(400).json({ 
        success: false, 
        message: 'Vui lòng chọn trạng thái!' 
      });
    }

    const db = readDatabase();
    const studentIndex = db.students.findIndex(s => s.id === req.params.id);
    
    if (studentIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'Không tìm thấy thí sinh!' 
      });
    }

    db.students[studentIndex].trangThai = trangThai;
    db.students[studentIndex].ghiChu = ghiChu || '';
    db.students[studentIndex].ngayDuyet = new Date().toISOString();
    
    writeDatabase(db);

    res.json({ 
      success: true, 
      message: 'Cập nhật trạng thái thành công!',
      data: db.students[studentIndex]
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra!' 
    });
  }
});

// 6. Xóa thí sinh (cho admin)
app.delete('/api/students/:id', (req, res) => {
  try {
    const db = readDatabase();
    const studentIndex = db.students.findIndex(s => s.id === req.params.id);
    
    if (studentIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'Không tìm thấy thí sinh!' 
      });
    }

    // Xóa file minh chứng nếu có
    const student = db.students[studentIndex];
    if (student.minhChung) {
      const filePath = path.join(__dirname, student.minhChung);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    db.students.splice(studentIndex, 1);
    writeDatabase(db);

    res.json({ 
      success: true, 
      message: 'Xóa thành công!' 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra!' 
    });
  }
});

// 7. Thống kê
app.get('/api/statistics', (req, res) => {
  try {
    const db = readDatabase();
    const total = db.students.length;
    const approved = db.students.filter(s => s.trangThai === 'Đã duyệt').length;
    const rejected = db.students.filter(s => s.trangThai === 'Không duyệt').length;
    const pending = db.students.filter(s => s.trangThai === 'Chờ duyệt').length;

    res.json({
      success: true,
      data: {
        total,
        approved,
        rejected,
        pending
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Có lỗi xảy ra!' 
    });
  }
});

// Serve frontend as default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Khởi tạo database khi start server
initDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api`);
});
