'use client'

import { useState, useEffect } from 'react'

interface AccordionItem {
  id: number
  title: string
  content: {
    type: 'text' | 'list' | 'comparison' | 'timeline' | 'mixed'
    data: any
  }
  icon: string
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "收获1：Prompt工程很重要",
    icon: "📝",
    content: {
      type: 'mixed',
      data: {
        intro: "从模糊需求到精准指令的蜕变",
        sections: [
          {
            title: "错误示范：",
            content: "帮我做一个网站",
            type: "text",
            style: "error"
          },
          {
            title: "正确示范：",
            content: "我需要知识卡片工具，用户是分享者，核心功能是选模板、输入内容、下载，用React实现",
            type: "text",
            style: "success"
          },
          {
            title: "我的技巧：",
            content: [
              "明确角色定位",
              "清晰需求描述", 
              "提供充分上下文",
              "分步骤执行"
            ],
            type: "list"
          }
        ]
      }
    }
  },
  {
    id: 2,
    title: "收获2：从想法到产品没那么远",
    icon: "🚀",
    content: {
      type: 'comparison',
      data: {
        before: {
          title: "以前需要：",
          items: [
            "精通编程 + 专业设计 + 复杂部署",
            "学习成本高，门槛重重"
          ]
        },
        after: {
          title: "现在发现：",
          items: [
            "AI写代码 + 模板辅助 + Vercel一键部署",
            "敢于开始，快速迭代！"
          ]
        },
        conclusion: "关键：敢于开始，快速迭代！"
      }
    }
  },
  {
    id: 3,
    title: "收获3：真实的心路历程",
    icon: "💪",
    content: {
      type: 'timeline',
      data: [
        { week: "Week 1", feeling: "信心满满", color: "green" },
        { week: "Week 2", feeling: "越来越难", color: "yellow" },
        { week: "Week 3", feeling: "疯狂补作业", color: "orange" },
        { week: "Week 4", feeling: "终于跟上", color: "blue" },
        { week: "Week 5", feeling: "感觉入门", color: "indigo" },
        { week: "Week 6", feeling: "Git把我整懵", color: "purple" },
        { week: "Week 7", feeling: "享受创作", color: "pink" },
        { week: "Week 8", feeling: "成长巨大！", color: "red" }
      ]
    }
  }
]

const adviceList = [
  "先完成再完美",
  "学一个用一个",
  "90%的bug AI能解决",
  "每天至少写一行代码",
  "把项目上线",
  "找学习伙伴"
]

export default function Reflection() {
  const [openItems, setOpenItems] = useState<number[]>([])
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

    const element = document.getElementById('reflection-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const renderContent = (content: AccordionItem['content']) => {
    switch (content.type) {
      case 'mixed':
        return (
          <div className="space-y-4">
            <p className="text-gray-700">{content.data.intro}</p>
            {content.data.sections.map((section: any, index: number) => (
              <div key={index} className="space-y-2">
                <h4 className={`font-semibold ${
                  section.style === 'error' ? 'text-red-600' : 
                  section.style === 'success' ? 'text-green-600' : 'text-orange-600'
                }`}>{section.title}</h4>
                {section.type === 'text' && (
                  <p className={`p-3 rounded-lg ${
                    section.style === 'error' ? 'bg-red-50 text-red-700' :
                    section.style === 'success' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-700'
                  }`}>{section.content}</p>
                )}
                {section.type === 'list' && (
                  <ul className="space-y-1">
                    {section.content.map((item: string, itemIndex: number) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )
      
      case 'comparison':
        return (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 mb-2">{content.data.before.title}</h4>
                <ul className="space-y-1">
                  {content.data.before.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span className="text-red-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">{content.data.after.title}</h4>
                <ul className="space-y-1">
                  {content.data.after.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span className="text-green-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-orange-600 bg-orange-50 p-3 rounded-lg">
                {content.data.conclusion}
              </p>
            </div>
          </div>
        )
      
      case 'timeline':
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {content.data.map((week: any, index: number) => (
                <div key={index} className={`p-3 rounded-lg text-center ${
                  week.color === 'green' ? 'bg-green-100' :
                  week.color === 'yellow' ? 'bg-yellow-100' :
                  week.color === 'orange' ? 'bg-orange-100' :
                  week.color === 'blue' ? 'bg-blue-100' :
                  week.color === 'indigo' ? 'bg-indigo-100' :
                  week.color === 'purple' ? 'bg-purple-100' :
                  week.color === 'pink' ? 'bg-pink-100' :
                  'bg-red-100'
                }`}>
                  <div className={`font-semibold ${
                    week.color === 'green' ? 'text-green-800' :
                    week.color === 'yellow' ? 'text-yellow-800' :
                    week.color === 'orange' ? 'text-orange-800' :
                    week.color === 'blue' ? 'text-blue-800' :
                    week.color === 'indigo' ? 'text-indigo-800' :
                    week.color === 'purple' ? 'text-purple-800' :
                    week.color === 'pink' ? 'text-pink-800' :
                    'text-red-800'
                  }`}>
                    {week.week}
                  </div>
                  <div className={`text-sm ${
                    week.color === 'green' ? 'text-green-600' :
                    week.color === 'yellow' ? 'text-yellow-600' :
                    week.color === 'orange' ? 'text-orange-600' :
                    week.color === 'blue' ? 'text-blue-600' :
                    week.color === 'indigo' ? 'text-indigo-600' :
                    week.color === 'purple' ? 'text-purple-600' :
                    week.color === 'pink' ? 'text-pink-600' :
                    'text-red-600'
                  }`}>
                    {week.feeling}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-lg font-semibold text-gray-700 bg-gray-50 p-3 rounded-lg">
                💡 感悟：进度慢不可怕，放弃才可怕
              </p>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section 
      id="reflection-section"
      className={`py-16 md:py-20 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🎓 我的AI编程心得
          </h2>
          <p className="text-lg text-gray-600">
            从0到1的学习感悟与成长心得
          </p>
        </div>

        {/* 手风琴内容 */}
        <div className="space-y-4 mb-12">
          {accordionData.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-lg font-semibold text-gray-800">{item.title}</span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(item.id) ? 'max-h-screen' : 'max-h-0'
              }`}>
                <div className="px-6 py-4 bg-white">
                  {renderContent(item.content)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 给新手的建议 */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
            💡 给新手的建议
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adviceList.map((advice, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-orange-500 text-2xl mb-2">
                  {index === 0 && '✨'}
                  {index === 1 && '🎯'}
                  {index === 2 && '🔧'}
                  {index === 3 && '💻'}
                  {index === 4 && '🚀'}
                  {index === 5 && '👥'}
                </div>
                <p className="text-gray-700 font-medium">{advice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}