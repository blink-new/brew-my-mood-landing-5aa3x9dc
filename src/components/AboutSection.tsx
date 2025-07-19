import { Heart, MapPin, Leaf, Award } from 'lucide-react'

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Started by a couple who believe everyone deserves their perfect cup of tea"
    },
    {
      icon: MapPin,
      title: "Melbourne Local",
      description: "Proudly based and owned in Melbourne, supporting our local community"
    },
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Only the finest organic ingredients, sourced ethically and sustainably"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Hand-blended with care, ensuring every cup meets our high standards"
    }
  ]

  return (
    <section id="about" className="py-20 bg-brew-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brew-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-brew-text-light leading-relaxed">
                <p>
                  We're Sarah and James, a Melbourne couple who fell in love with the art of tea blending during our travels through Asia. We discovered that the perfect cup of tea isn't just about taste—it's about how it makes you feel.
                </p>
                <p>
                  Frustrated by one-size-fits-all tea options, we dreamed of creating something personal. Just like how froyo lets you customize your perfect treat, we wanted to bring that same joy and personalization to tea.
                </p>
                <p>
                  Every blend we create is made with 100% organic ingredients, sourced directly from sustainable farms. We believe that what's good for you should also be good for the planet.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-brew-accent/20 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-brew-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brew-primary mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-brew-text-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-brew-accent/20 to-brew-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1547965010-3189f704431b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHx0ZWElMjBibGVuZGluZyUyMGhlcmJzJTIwaW5ncmVkaWVudHMlMjBvcmdhbmljfGVufDB8MHx8fDE3NTI5MTkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional tea preparation"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quote Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-brew-primary/10">
              <blockquote className="text-brew-primary">
                <p className="font-serif text-lg italic mb-3">
                  "Tea is not just a beverage, it's a moment of mindfulness in our busy lives."
                </p>
                <footer className="text-sm text-brew-text-light">
                  — Sarah & James, Founders
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-brew-primary/5 to-brew-accent/5 rounded-2xl p-12">
          <h3 className="text-3xl font-serif font-bold text-brew-primary mb-4">
            Ready to Start Your Tea Journey?
          </h3>
          <p className="text-xl text-brew-text-light mb-8 max-w-2xl mx-auto">
            Join our community of tea lovers and be the first to experience personalized tea blending when we launch.
          </p>
          <a 
            href="#quiz" 
            className="inline-flex items-center bg-brew-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brew-primary/90 transition-colors"
          >
            Take the Quiz Again
          </a>
        </div>
      </div>
    </section>
  )
}