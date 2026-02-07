# GitHub推送命令参考

## 方法1：HTTPS方式（推荐新手）
```bash
git remote add origin https://github.com/你的用户名/ai-learning-portfolio.git
git branch -M main
git push -u origin main
```

## 方法2：SSH方式（需要配置SSH密钥）
```bash
git remote add origin git@github.com:你的用户名/ai-learning-portfolio.git
git branch -M main
git push -u origin main
```

## 备用命令（如果分支名不同）
```bash
# 查看当前分支
git branch

# 如果当前是master分支，重命名为main
git branch -M main

# 推送代码
git push -u origin main
```

## 验证推送成功
```bash
# 查看远程仓库连接状态
git remote -v

# 查看推送历史
git log --oneline
```