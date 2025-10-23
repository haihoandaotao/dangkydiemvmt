@echo off
echo ================================================
echo    KHOI DONG WEB APP - DANG KY DIEM THI
echo ================================================
echo.

cd backend

echo [1/2] Kiem tra Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERRO: Chua cai Node.js! Tai tai: https://nodejs.org
    pause
    exit /b 1
)

echo [2/2] Khoi dong server...
echo.
echo Server se chay tai: http://localhost:3000
echo Mo trinh duyet va truy cap URL tren!
echo.
echo Nhan Ctrl+C de dung server
echo.

npm start
