import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import QuizSection from './components/QuizSection'
import ComingSoonSection from './components/ComingSoonSection'
import AboutSection from './components/AboutSection'

function App() {
  return (
    <div className="min-h-screen bg-[#FBFAF7]">
      <Header />
      <HeroSection />
      <ProcessSection />
      <QuizSection />
      <ComingSoonSection />
      <AboutSection />
    </div>
  )
}

export default App