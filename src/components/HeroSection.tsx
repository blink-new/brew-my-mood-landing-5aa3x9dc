import { CheckCircle, Sparkles, Heart, Zap } from 'lucide-react'

export default function HeroSection() {
  const steps = [
    {
      number: "1",
      title: "Take the Quiz",
      description: "Discover ingredients that match your personality and flavor profile",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      number: "2", 
      title: "Edit Your Blend",
      description: "Add or remove ingredients to suit your health and flavor goals",
      icon: <Heart className="w-5 h-5" />
    },
    {
      number: "3",
      title: "Order & Delivery", 
      description: "We hand blend your tea and deliver it directly to your doorstep",
      icon: <Zap className="w-5 h-5" />
    },
    {
      number: "4",
      title: "Sip & Enjoy",
      description: "Experience your perfectly personalized tea blend",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ]

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brew-background via-brew-accent/5 to-brew-primary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-brew-accent/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brew-primary/20 rounded-full blur-3xl floating-animation-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-brew-accent/20 text-brew-primary px-4 py-2 rounded-full text-sm font-semibold">
                🌿 Coming Soon to Melbourne
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                <span className="gradient-text">Your Perfect</span>
                <br />
                <span className="text-brew-primary">Tea Blend</span>
                <br />
                <span className="text-brew-text-light">Awaits</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-brew-text-light leading-relaxed">
                Like froyo, but for tea ✨ Mix and match premium organic ingredients to create your ideal blend, perfectly tailored to your taste and wellness goals.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-semibold text-brew-primary flex items-center gap-3">
                How It Works
                <span className="text-2xl">🫖</span>
              </h2>
              
              <div className="grid gap-6">
                {steps.map((step, index) => (
                  <div key={step.number} className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-white/50 transition-all duration-300 hover-lift">
                    <div className="flex-shrink-0 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-brew-accent to-brew-primary rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-brew-accent rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-brew-primary mb-2 group-hover:text-brew-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-brew-text-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="#quiz" 
                className="group inline-flex items-center bg-gradient-to-r from-brew-primary to-brew-accent text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 pulse-glow"
              >
                Start Your Tea Journey
                <CheckCircle className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Main Image Container */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden bg-gradient-to-br from-brew-accent/30 to-brew-primary/30 shadow-2xl hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1566792505656-e82d93abac30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHx0ZWElMjBibGVuZGluZyUyMGhlcmJzJTIwaW5ncmVkaWVudHMlMjBvcmdhbmljfGVufDB8MHx8fDE3NTI5MTkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Organic tea herbs and ingredients"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brew-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-6 shadow-xl floating-animation">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-brew-primary">100%</div>
                  <div className="text-sm text-brew-text-light font-medium">Organic</div>
                  <div className="text-2xl mt-1">🌱</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 shadow-xl floating-animation-delayed">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-brew-primary">50+</div>
                  <div className="text-sm text-brew-text-light font-medium">Ingredients</div>
                  <div className="text-2xl mt-1">🍃</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-8 glass-card rounded-2xl p-4 shadow-xl floating-animation">
                <div className="text-center">
                  <div className="text-2xl">🫖</div>
                  <div className="text-xs text-brew-text-light font-medium mt-1">Hand Blended</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}