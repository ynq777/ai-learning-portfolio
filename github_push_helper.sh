#!/bin/bash

# GitHub推送助手脚本
# 使用方法：替换下面的 "YOUR_GITHUB_USERNAME" 为你的实际GitHub用户名

echo "🚀 AI学习历程展示网站 - GitHub推送助手"
echo "========================================"
echo ""

# 请把 "YOUR_GITHUB_USERNAME" 替换为你的GitHub用户名
GITHUB_USERNAME="YOUR_GITHUB_USERNAME"

if [ "$GITHUB_USERNAME" = "YOUR_GITHUB_USERNAME" ]; then
    echo "❌ 请先修改脚本中的 GITHUB_USERNAME 变量！"
    echo "   把 YOUR_GITHUB_USERNAME 替换成你的实际GitHub用户名"
    echo ""
    echo "   例如：如果你的用户名是 johndoe，就改成："
    echo "   GITHUB_USERNAME=\"johndoe\""
    exit 1
fi

echo "📋 正在连接GitHub仓库..."
echo "   GitHub用户名: $GITHUB_USERNAME"
echo "   仓库名: ai-learning-portfolio"
echo ""

# 添加远程仓库
echo "🔗 步骤1: 添加远程仓库连接..."
git remote add origin https://github.com/$GITHUB_USERNAME/ai-learning-portfolio.git

# 检查是否成功
if [ $? -eq 0 ]; then
    echo "✅ 远程仓库连接成功！"
else
    echo "❌ 远程仓库连接失败，请检查用户名是否正确"
    exit 1
fi

# 重命名分支
echo ""
echo "🔄 步骤2: 重命名分支为main..."
git branch -M main

# 推送代码
echo ""
echo "📤 步骤3: 推送代码到GitHub..."
git push -u origin main

# 检查推送结果
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 推送成功！你的代码已经在GitHub上了！"
    echo ""
    echo "🔗 仓库地址: https://github.com/$GITHUB_USERNAME/ai-learning-portfolio"
    echo ""
    echo "🚀 下一步：Vercel一键部署"
    echo "   访问: https://vercel.com/new/clone?repository-url=https://github.com/$GITHUB_USERNAME/ai-learning-portfolio"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "   1. GitHub仓库是否已创建"
    echo "   2. 网络连接是否正常"
    echo "   3. GitHub用户名是否正确"
fi