'use client'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-16">
          关于我
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 卡片1 - 我们的共同点 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🤝</span>
              我们可能有这些共同点
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">💡</span>
                <span className="text-gray-700">对AI充满好奇但不知道从何开始</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">📚</span>
                <span className="text-gray-700">收藏了很多工具但用得不多</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">🤗</span>
                <span className="text-gray-700">想找个一起学习的伙伴</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">⏰</span>
                <span className="text-gray-700">总是DDL驱动型选手</span>
              </li>
            </ul>
          </div>

          {/* 卡片2 - 我的特点 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">🌈</span>
              关于我的一些小特点
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">🎯</span>
                <span className="text-gray-700">喜欢把复杂的东西讲简单</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">📝</span>
                <span className="text-gray-700">犯错后会认真记录总结</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">🤝</span>
                <span className="text-gray-700">相信分享让学习更有意思</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">💪</span>
                <span className="text-gray-700">时间管理苦手但在努力中</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About