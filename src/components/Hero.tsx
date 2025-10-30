'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Software Engineer | QA Specialist | AI Enthusiast | Educator'

  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        // Hide cursor immediately after typing is complete
        setShowCursor(false)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="h-[80vh] bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-4 animate-fade-in-up text-gray-900">
          Hi, I'm <span className="font-medium text-gray-800">Khadijah</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-700 min-h-[1.5rem] animate-fade-in-up animation-delay-200 font-light">
          {displayText}
          {showCursor && <span className="animate-pulse text-gray-400">|</span>}
        </p>

        <p className="text-base md:text-lg mb-8 text-gray-500 max-w-xl mx-auto animate-fade-in-up animation-delay-400 font-light leading-relaxed">
          Passionate about building quality software, exploring AI frontiers, and sharing knowledge through teaching.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-sm font-medium transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-sm font-medium transition-all duration-300 border border-gray-300 hover:border-gray-400 text-sm uppercase tracking-wider"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}