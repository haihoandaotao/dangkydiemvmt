@echo off
echo ================================================
echo    CAI DAT WEB APP - DANG KY DIEM THI
echo ================================================
echo.

echo [1/2] Kiem tra Node.js...
node --version
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Chua cai dat Node.js!
    echo Vui long tai va cai dat Node.js tu: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo.
echo [2/2] Cai dat dependencies cho backend...
cd backend
npm install

if %errorlevel% equ 0 (
    echo.
    echo ================================================
    echo    CAI DAT THANH CONG!
    echo ================================================
    echo.
    echo Ban co the chay ung dung bang cach:
    echo   1. Double-click file START.bat
    echo   2. Hoac chay lenh: npm start
    echo.
    echo Sau khi server chay, mo trinh duyet va truy cap:
    echo   http://localhost:3000
    echo.
) else (
    echo.
    echo ERROR: Cai dat that bai!
    echo Vui long kiem tra ket noi internet va thu lai.
    echo.
)

pause
