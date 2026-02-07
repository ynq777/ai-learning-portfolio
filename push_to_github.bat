@echo off
echo 🚀 AI学习历程展示网站 - GitHub推送助手
echo ========================================
echo.

REM 请把下面的 "YOUR_GITHUB_USERNAME" 替换为你的GitHub用户名
set GITHUB_USERNAME=YOUR_GITHUB_USERNAME

if "%GITHUB_USERNAME%"=="YOUR_GITHUB_USERNAME" (
    echo ❌ 请先修改脚本中的 GITHUB_USERNAME 变量！
    echo    把 YOUR_GITHUB_USERNAME 替换成你的实际GitHub用户名
echo.
    echo    例如：如果你的用户名是 johndoe，就改成：
    echo    set GITHUB_USERNAME=johndoe
echo.
    echo 修改方法：
    echo 1. 右键点击这个文件 → 编辑
echo 2. 找到 set GITHUB_USERNAME=YOUR_GITHUB_USERNAME
echo 3. 把 YOUR_GITHUB_USERNAME 改成你的用户名
echo 4. 保存文件，重新运行
echo.
    pause
    exit /b 1
)

echo 📋 正在连接GitHub仓库...
echo    GitHub用户名: %GITHUB_USERNAME%
echo    仓库名: ai-learning-portfolio
echo.

REM 添加远程仓库
echo 🔗 步骤1: 添加远程仓库连接...
git remote add origin https://github.com/%GITHUB_USERNAME%/ai-learning-portfolio.git

if %errorlevel% equ 0 (
    echo ✅ 远程仓库连接成功！
) else (
    echo ❌ 远程仓库连接失败，请检查用户名是否正确
    pause
    exit /b 1
)

echo.
echo 🔄 步骤2: 重命名分支为main...
git branch -M main

echo.
echo 📤 步骤3: 推送代码到GitHub...
git push -u origin main

if %errorlevel% equ 0 (
echo.
    echo 🎉 推送成功！你的代码已经在GitHub上了！
echo.
    echo 🔗 仓库地址: https://github.com/%GITHUB_USERNAME%/ai-learning-portfolio
echo.
    echo 🚀 下一步：Vercel一键部署
    echo    访问: https://vercel.com/new/clone?repository-url=https://github.com/%GITHUB_USERNAME%/ai-learning-portfolio
echo.
    echo 或者直接访问：https://vercel.com
    echo 点击 "New Project" → 选择你的GitHub仓库 → 点击 "Deploy"
echo.
) else (
echo.
    echo ❌ 推送失败，请检查：
    echo    1. GitHub仓库是否已创建
    echo    2. 网络连接是否正常
    echo    3. GitHub用户名是否正确
echo.
    echo 解决方案：
    echo 1. 确认已在GitHub创建仓库：https://github.com/new
    echo 2. 检查网络连接
    echo 3. 确认用户名拼写正确
echo.
)

pause