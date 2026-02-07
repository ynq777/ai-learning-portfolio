# 请替换为你的实际GitHub用户名
GITHUB_USERNAME="yourusername"

# 方法1：HTTPS方式（推荐）
git remote add origin https://github.com/${GITHUB_USERNAME}/ai-learning-portfolio.git

# 方法2：SSH方式（如果已配置SSH密钥）
# git remote add origin git@github.com:${GITHUB_USERNAME}/ai-learning-portfolio.git

# 重命名分支为main（GitHub默认分支）
git branch -M main

# 推送代码到GitHub
git push -u origin main