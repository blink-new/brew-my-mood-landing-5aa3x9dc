import { Leaf, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-brew-background/80 backdrop-blur-xl border-b border-brew-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-brew-primary to-brew-accent rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-brew-accent rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold gradient-text">
                Brew My Mood
              </h1>
              <p className="text-xs text-brew-text-light -mt-1">Custom Tea Blends</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-brew-text hover:text-brew-primary transition-colors duration-300 font-medium relative group">
              Process
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brew-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#quiz" className="text-brew-text hover:text-brew-primary transition-colors duration-300 font-medium relative group">
              Quiz
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brew-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-brew-text hover:text-brew-primary transition-colors duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brew-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#signup" className="bg-gradient-to-r from-brew-primary to-brew-accent text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold">
              Get 25% Off ✨
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-xl bg-brew-primary/10 hover:bg-brew-primary/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brew-primary/10">
            <div className="flex flex-col space-y-4">
              <a href="#process" className="text-brew-text hover:text-brew-primary transition-colors font-medium">
                Process
              </a>
              <a href="#quiz" className="text-brew-text hover:text-brew-primary transition-colors font-medium">
                Quiz
              </a>
              <a href="#about" className="text-brew-text hover:text-brew-primary transition-colors font-medium">
                About
              </a>
              <a href="#signup" className="bg-gradient-to-r from-brew-primary to-brew-accent text-white px-6 py-3 rounded-full text-center font-semibold">
                Get 25% Off ✨
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}