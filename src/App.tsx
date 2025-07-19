import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import QuizSection from './components/QuizSection'
import ComingSoonSection from './components/ComingSoonSection'
import AboutSection from './components/AboutSection'

function App() {
  return (
    <div className="min-h-screen bg-brew-background">
      <Header />
      <main>
        <HeroSection />
        <QuizSection />
        <ComingSoonSection />
        <AboutSection />
      </main>
    </div>
  )
}

export default App