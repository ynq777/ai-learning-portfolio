'use client'

import { useState, useEffect } from 'react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* 头像 */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full border-4 border-blue-400 flex items-center justify-center animate-float">
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
          </div>
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          嘿！我也是个AI学习者
        </h1>

        {/* 副标题 */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          正在AI世界里跌跌撞撞
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
            🤖 AI学习者
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
            💻 Vibe Coding学员
          </span>
          <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 font-medium shadow-sm">
            ⚡ DDL战士
          </span>
        </div>

        {/* CTA按钮 */}
        <button 
          onClick={scrollToAbout}
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          查看我的学习历程
        </button>
      </div>

      {/* 装饰性元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl"></div>
    </section>
  )
}

export default Hero