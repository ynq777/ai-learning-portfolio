'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 模拟加载进度
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="text-center text-white">
        {/* Logo/头像区域 */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-3xl">🚀</span>
          </div>
        </div>

        {/* 标题 */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          AI学习历程
        </h1>
        <p className="text-lg mb-8 opacity-90">
          正在加载我的学习之旅...
        </p>

        {/* 进度条 */}
        <div className="w-64 mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* 进度百分比 */}
        <div className="text-sm opacity-75">
          {Math.round(Math.min(progress, 100))}%
        </div>

        {/* 加载动画点 */}
        <div className="flex justify-center mt-8 space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}