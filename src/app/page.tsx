'use client'

import { useState, useEffect } from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Reflection from '@/components/Reflection'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 模拟页面加载
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Reflection />
      <Footer />
    </main>
  )
}