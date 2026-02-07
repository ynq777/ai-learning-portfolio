'use client'

import { useState, useEffect } from 'react'

const Navigation = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              首页
            </button>
            <button 
              onClick={() => scrollToSection('journey')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              学习历程
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              项目展示
            </button>
            <button 
              onClick={() => scrollToSection('review')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              学习复盘
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
            >
              联系我
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation