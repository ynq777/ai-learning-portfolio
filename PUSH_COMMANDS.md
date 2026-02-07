# 请将下面的 "yourusername" 替换为你的实际GitHub用户名
# 例如：如果你的用户名是 "johndoe"，就替换为 "johndoe"

# 步骤1：添加远程仓库（使用HTTPS方式，最稳定）
git remote add origin https://github.com/yourusername/ai-learning-portfolio.git

# 步骤2：重命名分支为main（GitHub默认）
git branch -M main

# 步骤3：推送代码到GitHub
git push -u origin main

# 如果推送成功，你会看到类似这样的输出：
# Enumerating objects: 23, done.
# Counting objects: 100% (23/23), done.
# Delta compression using up to 8 threads
# Compressing objects: 100% (22/22), done.
# Writing objects: 100% (23/23), 15.67 KiB | 1.96 MiB/s, done.
# Total 23 (delta 0), reused 0 (delta 0)
# To https://github.com/yourusername/ai-learning-portfolio.git
#  * [new branch]      main -> main
# Branch 'main' set up to track remote branch 'main' from 'origin'.