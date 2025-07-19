import { CheckCircle } from 'lucide-react'

export default function HeroSection() {
  const steps = [
    {
      number: "1",
      title: "Take the Quiz",
      description: "Discover ingredients that match your personality and flavor profile"
    },
    {
      number: "2", 
      title: "Edit Your Blend",
      description: "Add or remove ingredients to suit your health and flavor goals"
    },
    {
      number: "3",
      title: "Order & Delivery", 
      description: "We hand blend your tea and deliver it directly to your doorstep"
    },
    {
      number: "4",
      title: "Sip & Enjoy",
      description: "Experience your perfectly personalized tea blend"
    }
  ]

  return (
    <section id="process" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-brew-primary leading-tight">
                Your Perfect Tea Blend Awaits
              </h2>
              <p className="text-xl text-brew-text-light leading-relaxed">
                Like froyo, but for tea. Mix and match premium organic ingredients to create your ideal blend, perfectly tailored to your taste and wellness goals.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-brew-primary">
                How It Works
              </h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brew-accent rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-brew-primary">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brew-primary mb-1">
                        {step.title}
                      </h4>
                      <p className="text-brew-text-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="#quiz" 
                className="inline-flex items-center bg-brew-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brew-primary/90 transition-colors"
              >
                Start Your Tea Journey
                <CheckCircle className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brew-accent/20 to-brew-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1566792505656-e82d93abac30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHx0ZWElMjBibGVuZGluZyUyMGhlcmJzJTIwaW5ncmVkaWVudHMlMjBvcmdhbmljfGVufDB8MHx8fDE3NTI5MTkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Organic tea herbs and ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-brew-primary/10">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-brew-primary">100%</div>
                <div className="text-sm text-brew-text-light">Organic</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-brew-primary/10">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-brew-primary">50+</div>
                <div className="text-sm text-brew-text-light">Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}