'use client'

import { useState, useEffect } from 'react'

interface TimelineNode {
  id: number
  title: string
  time: string
  tag?: string
  content: string[]
  link?: {
    text: string
    url: string
  }
  isImportant?: boolean
}

const timelineData: TimelineNode[] = [
  {
    id: 1,
    title: "大多不可逆，得势者必胜",
    time: "Week 1",
    content: [
      "核心任务：从Website开始构建产品思维",
      "我的思考：微信群消息整理工具",
      "产出：用户画像 + 痛点分析",
      "工具：思维导图 + AI对话",
      "收获：学会从生活中发现真实痛点"
    ]
  },
  {
    id: 2,
    title: "撰写产品PRD文档",
    time: "Week 2",
    content: [
      "核心任务：需求文档化",
      "产出：微信群工具PRD + 流程图",
      "工具：流程图工具",
      "收获：学会用产品思维拆解需求"
    ]
  },
  {
    id: 3,
    title: "做出第一款AI应用",
    time: "Week 3",
    tag: "重点项目 🌟",
    content: [
      "作品：知识卡片生成工具",
      "功能：个人主页 + 卡片生成 + 模板选择 + 历史记录",
      "工具：Enter开发平台",
      "收获：第一次完成从0到1，AI辅助开发真快！"
    ],
    link: {
      text: "在线体验",
      url: "#"
    },
    isImportant: true
  },
  {
    id: 4,
    title: "深入代码世界",
    time: "Week 4",
    content: [
      "作品：Gitee学习闯关网站",
      "特色：游戏化学习路径，3个难度关卡",
      "工具：Trae开发",
      "收获：学会用游戏化思维设计学习产品"
    ]
  },
  {
    id: 5,
    title: "和AI一起Vibe Coding",
    time: "Week 5",
    tag: "综合实践 🎯",
    content: [
      "作品：AI工具推荐平台",
      "板块：个人介绍 + 共同痛点 + 工具推荐",
      "工具：Trae",
      "收获：学会情感化设计拉近用户距离"
    ]
  },
  {
    id: 6,
    title: "产品上线发布",
    time: "Week 6",
    tag: "里程碑 🚀",
    content: [
      "任务：部署到真实世界",
      "实践：GitHub + Vercel自动化部署",
      "收获：作品终于可以分享给朋友了！"
    ],
    link: {
      text: "查看上线作品",
      url: "#"
    },
    isImportant: true
  },
  {
    id: 7,
    title: "再次挖掘真实痛点",
    time: "Week 7",
    content: [
      "发现：DDL焦虑管理问题",
      "场景：多DDL并存，时间管理混乱",
      "方案：可视化时间线 + 情绪记录",
      "状态：产品设计阶段",
      "收获：学会从真实情绪找到有价值的痛点"
    ]
  },
  {
    id: 8,
    title: "Demo Day 毕业展示",
    time: "Week 8",
    tag: "当前进行中 ⚡",
    content: [
      "任务：整理学习成果",
      "产出：这个展示页面！",
      "状态：正在制作中..."
    ]
  }
]

const TimelineNode = ({ node, isLeft, index }: { node: TimelineNode; isLeft: boolean; index: number }) => {
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

    const element = document.getElementById(`timeline-node-${node.id}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [node.id])

  // 添加脉冲动画给重点项目
  const pulseAnimation = node.isImportant ? 'animate-pulse' : ''

  return (
    <div
      id={`timeline-node-${node.id}`}
      className={`flex items-start mb-12 md:mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* 时间标签 - 移动端固定左侧 */}
      <div className={`flex-shrink-0 w-20 md:w-24 ${
        index % 2 === 1 ? 'md:order-2' : ''
      }`}>
        <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-orange-500 text-white rounded-full font-bold text-xs md:text-sm shadow-lg transition-all duration-300 ${
          isHovered ? 'scale-110' : ''
        } ${pulseAnimation}`}>
          {node.time}
        </div>
      </div>

      {/* 连接线 - 只在桌面端显示 */}
      <div className={`hidden md:block flex-shrink-0 w-8 h-px bg-orange-300 relative ${
        index % 2 === 1 ? 'md:order-1' : ''
      }`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
      </div>

      {/* 内容卡片 */}
      <div className={`flex-1 ${
        index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
      } ${
        index % 2 === 1 ? 'md:order-0' : ''
      }`}>
        <div 
          className={`bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
            node.isImportant ? 'border-2 border-yellow-400 hover:border-yellow-500' : 'hover:border-orange-200'
          } ${
            isHovered ? 'shadow-2xl' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col md:flex-row md:items-center mb-3 md:mb-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-0">{node.title}</h3>
            {node.tag && (
              <span className="md:ml-3 px-2 md:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs md:text-sm font-medium">
                {node.tag}
              </span>
            )}
          </div>
          
          <ul className="space-y-2 mb-4">
            {node.content.map((item, contentIndex) => (
              <li key={contentIndex} className="flex items-start group">
                <span className={`text-orange-500 mr-2 mt-1 text-xs md:text-sm transition-colors duration-200 ${
                  isHovered ? 'text-orange-600' : ''
                }`}>•</span>
                <span className={`text-gray-700 text-sm md:text-base transition-colors duration-200 ${
                  isHovered ? 'text-gray-800' : ''
                }`}>{item}</span>
              </li>
            ))}
          </ul>

          {node.link && (
            <a
              href={node.link.url}
              className="inline-flex items-center px-3 md:px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105"
              onClick={(e) => {
                if (node.link?.url === '#') {
                  e.preventDefault()
                  // 这里可以添加实际的链接跳转逻辑
                  console.log(`导航到: ${node.link.text}`)
                }
              }}
            >
              {node.link.text}
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Journey = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            📚 我的8周学习历程
          </h2>
          <p className="text-xl text-gray-600">
            从零基础到独立开发的蜕变之路
          </p>
        </div>

        {/* 时间线 */}
        <div className="relative">
          {/* 垂直连接线 - 只在桌面端显示 */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-orange-300 transform -translate-x-1/2"></div>
          
          {/* 时间线节点 */}
          <div className="space-y-0">
            {timelineData.map((node, index) => (
              <TimelineNode
                key={node.id}
                node={node}
                isLeft={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* 结束标识 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-full shadow-lg animate-bounce">
            <span className="text-2xl">🎓</span>
          </div>
          <p className="mt-4 text-gray-600 font-medium">学习历程仍在继续...</p>
        </div>
      </div>
    </section>
  )
}

export default Journey