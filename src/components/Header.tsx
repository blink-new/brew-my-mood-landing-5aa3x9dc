import { Leaf } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-[#FBFAF7] py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#264E36] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="font-playfair text-2xl font-semibold text-[#264E36]">
            Brew My Mood
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#shop" className="font-inter text-[#264E36] hover:text-[#D1B87F] transition-colors">
            Shop
          </a>
          <a href="#about" className="font-inter text-[#264E36] hover:text-[#D1B87F] transition-colors">
            About
          </a>
          <a href="#contact" className="font-inter text-[#264E36] hover:text-[#D1B87F] transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}