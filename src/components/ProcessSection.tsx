import { Brain, Palette, Package, Coffee } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    {
      icon: Brain,
      emoji: '🧠',
      title: 'Take the Mood Quiz',
      description: 'Tell us how you\'re feeling. Our unique algorithm understands your mood profile.'
    },
    {
      icon: Palette,
      emoji: '🎨',
      title: 'Get Your Perfect Blend',
      description: 'We match you with ingredients tailored to your mood and flavour goals.'
    },
    {
      icon: Package,
      emoji: '🌿',
      title: 'Sip Into Balance',
      description: 'Brew your tea, breathe deeply, and feel the shift.'
    }
  ]

  return (
    <section className="bg-[#FBFAF7] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Process steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 fade-in-up">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#F5F4F0] rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-playfair text-2xl font-medium text-[#264E36] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[#737373] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
            
            <button className="bg-[#D1B87F] text-[#264E36] font-inter font-medium px-8 py-4 rounded-full btn-hover">
              START BLENDING
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=700&fit=crop"
                alt="Tea blending process"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg float">
                <div className="text-center">
                  <div className="font-playfair text-lg font-medium text-[#264E36]">BREW</div>
                  <div className="font-playfair text-lg font-medium text-[#264E36]">MY MOOD</div>
                  <div className="w-8 h-px bg-[#D1B87F] mx-auto mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-20">
          <h2 className="font-playfair text-4xl font-medium text-[#264E36] mb-4">
            Feeling creative? Build Your Own Tea.
          </h2>
        </div>
      </div>
    </section>
  )
}