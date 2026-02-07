'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  painPoint: string
  solution: string
  features: string[]
  tech: string
  buttons: {
    text: string
    url: string
  }[]
  imageAlt: string
  isImportant?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "知识卡片生成工具",
    painPoint: "知识分享缺少美观工具",
    solution: "零门槛卡片生成",
    features: [
      "纯文字/图文混排模式",
      "多种视觉模板",
      "自定义样式",
      "历史记录",
      "一键下载分享"
    ],
    tech: "Enter平台，约X小时开发",
    buttons: [
      { text: "在线体验", url: "#" },
      { text: "查看详情", url: "#" }
    ],
    imageAlt: "知识卡片生成工具",
    isImportant: true
  },
  {
    id: 2,
    title: "Gitee学习闯关",
    painPoint: "Git学习曲线陡峭",
    solution: "游戏化闯关学习",
    features: [
      "3关递进式学习",
      "任务清单系统",
      "积分激励机制",
      "实时进度反馈",
      "成就徽章收集"
    ],
    tech: "Trae开发，游戏化设计",
    buttons: [
      { text: "在线体验", url: "#" }
    ],
    imageAlt: "Gitee学习闯关",
    isImportant: false
  },
  {
    id: 3,
    title: "AI工具推荐平台",
    painPoint: "AI工具选择困难",
    solution: "情感化推荐体验",
    features: [
      "真实体验分享",
      "情感化开场设计",
      "共鸣式内容",
      "分类工具推荐",
      "用户互动反馈"
    ],
    tech: "Trae开发，Vercel部署",
    buttons: [
      { text: "访问网站", url: "#" }
    ],
    imageAlt: "AI工具推荐平台",
    isImportant: false
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(`project-${project.id}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [project.id])

  return (
    <div
      id={`project-${project.id}`}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isHovered ? 'shadow-2xl' : ''
      } ${
        project.isImportant ? 'border-2 border-yellow-400' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* 项目图片占位 */}
      <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
        <div className="text-orange-400 text-6xl opacity-50">
          💡
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        {project.isImportant && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            重点项目
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
        
        <div className="space-y-3 mb-4">
          <div>
            <span className="text-sm font-semibold text-orange-600">痛点：</span>
            <span className="text-sm text-gray-700">{project.painPoint}</span>
          </div>
          <div>
            <span className="text-sm font-semibold text-orange-600">解决方案：</span>
            <span className="text-sm text-gray-700">{project.solution}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">核心功能：</h4>
          <ul className="space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start group">
                <span className={`text-orange-500 mr-2 mt-1 text-xs transition-colors duration-200 ${
                  isHovered ? 'text-orange-600' : ''
                }`}>•</span>
                <span className={`text-sm text-gray-700 transition-colors duration-200 ${
                  isHovered ? 'text-gray-800' : ''
                }`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {project.tech}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.buttons.map((button, buttonIndex) => (
            <a
              key={buttonIndex}
              href={button.url}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
                buttonIndex === 0 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              onClick={(e) => {
                if (button.url === '#') {
                  e.preventDefault()
                  console.log(`导航到: ${button.text}`)
                }
              }}
            >
              {button.text}
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            💡 精选项目深度展示
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从零基础到独立开发，每一个项目都是成长的见证
          </p>
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* 底部提示 */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            🎯 每个项目都承载着解决真实痛点的初心
          </p>
        </div>
      </div>
    </section>
  )
}