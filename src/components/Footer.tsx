'use client'

import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('footer-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleSocialClick = (platform: string) => {
    console.log(`点击了 ${platform} 图标`)
    // 这里可以添加实际的社交链接跳转逻辑
  }

  const handleButtonClick = (action: string) => {
    console.log(`点击了 ${action} 按钮`)
    // 这里可以添加实际的按钮跳转逻辑
  }

  return (
    <footer 
      id="footer-section"
      className={`bg-[#2c3e50] text-white py-12 md:py-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容 */}
        <div className="text-center space-y-8">
          {/* 标题和提示 */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              💬 如果这个页面对你有帮助
            </h3>
            <p className="text-gray-300 text-lg">
              欢迎与我交流学习心得，一起成长进步！
            </p>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleButtonClick('GitHub Star')}
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Star
            </button>
            
            <button
              onClick={() => handleButtonClick('留言交流')}
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              留言交流
            </button>
          </div>

          {/* 社交图标 */}
          <div className="flex justify-center gap-6">
            <button
              onClick={() => handleSocialClick('GitHub')}
              className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              title="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
            
            <button
              onClick={() => handleSocialClick('Email')}
              className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              title="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            
            <button
              onClick={() => handleSocialClick('WeChat')}
              className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:shadow-lg"
              title="微信"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm4.711 2.854c-2.073-.144-4.312.62-5.932 1.838-1.766 1.474-2.778 3.868-1.933 6.446.268.023.535.05.811.05 1.018 0 1.958-.217 2.837-.403a.864.864 0 0 1 .717.098l1.903 1.114a.326.326 0 0 0 .167.054c.16 0 .29-.132.29-.295a.45.45 0 0 0-.048-.213l-.39-1.48a.59.59 0 0 1 .213-.665c1.83-1.347 3.002-3.338 3.002-5.55 0-1.011-.296-1.983-.84-2.878-.233.094-.478.177-.728.25.098.647.149 1.309.149 1.982 0 3.563-2.498 6.492-5.785 6.492-3.288 0-5.784-2.93-5.784-6.492 0-3.562 2.496-6.49 5.784-6.49.353 0 .696.032 1.026.091z"/>
              </svg>
            </button>
          </div>

          {/* 版权信息 */}
          <div className="border-t border-gray-600 pt-8">
            <div className="text-center space-y-4">
              <div>
                <p className="text-lg font-semibold mb-2">
                  Made with ❤️ by [我的名字]
                </p>
                <p className="text-gray-400">
                  Powered by AI & Vibe Coding
                </p>
              </div>
              
              <div className="text-sm text-gray-500">
                <p>&copy; 2024 AI学习历程展示. All rights reserved.</p>
              </div>
              
              <div className="text-xs text-gray-600">
                <p>从AI学习者到独立开发者的蜕变之路</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}