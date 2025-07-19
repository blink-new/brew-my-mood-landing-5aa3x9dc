import { Leaf } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-brew-background/95 backdrop-blur-sm border-b border-brew-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brew-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-semibold text-brew-primary">
              Brew My Mood
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-brew-text hover:text-brew-primary transition-colors">
              Process
            </a>
            <a href="#quiz" className="text-brew-text hover:text-brew-primary transition-colors">
              Quiz
            </a>
            <a href="#about" className="text-brew-text hover:text-brew-primary transition-colors">
              About
            </a>
            <a href="#signup" className="bg-brew-primary text-white px-4 py-2 rounded-lg hover:bg-brew-primary/90 transition-colors">
              Get 25% Off
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}