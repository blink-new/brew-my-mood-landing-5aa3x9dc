import { Heart, MapPin, Leaf, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-brew-background to-brew-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-brew-accent/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-brew-primary/20 rounded-full blur-3xl floating-animation-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-brew-accent/20 text-brew-primary px-6 py-3 rounded-full text-lg font-semibold">
                <Heart className="w-5 h-5 mr-2" />
                Our Story
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
                <span className="gradient-text">Locally Owned,</span>
                <br />
                <span className="text-brew-primary">Globally Inspired</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-brew-text-light leading-relaxed">
                We're a Melbourne couple passionate about creating the perfect cup of tea for every mood, moment, and person. 🫖💕
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-brew-primary/10 hover-lift">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brew-accent to-brew-primary rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-brew-primary mb-2">
                    Born in Melbourne
                  </h3>
                  <p className="text-brew-text-light">
                    Proudly local, we understand Melbourne's unique coffee culture and are excited to bring the same artisanal approach to tea blending.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-brew-primary/10 hover-lift">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brew-accent to-brew-primary rounded-2xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-brew-primary mb-2">
                    100% Organic Promise
                  </h3>
                  <p className="text-brew-text-light">
                    Every ingredient is carefully sourced from organic farms. We believe what goes into your body should be pure, natural, and beneficial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-brew-primary/10 hover-lift">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brew-accent to-brew-primary rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-brew-primary mb-2">
                    Personal Touch
                  </h3>
                  <p className="text-brew-text-light">
                    As a small, couple-owned business, every blend is hand-crafted with love. We're not just selling tea – we're sharing our passion for wellness and flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Main Content Card */}
              <div className="absolute inset-4 glass-card rounded-3xl p-8 shadow-2xl hover-lift">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4">🫖</div>
                  
                  <h3 className="text-3xl font-serif font-bold text-brew-primary">
                    Why We Started Brew My Mood
                  </h3>
                  
                  <div className="space-y-4 text-brew-text-light">
                    <p className="text-lg">
                      "We noticed that while Melbourne has amazing coffee culture, tea lovers were left with limited, generic options."
                    </p>
                    
                    <p className="text-lg">
                      "We wanted to create something personal – where your mood, taste, and wellness goals shape your perfect cup."
                    </p>
                    
                    <p className="text-lg font-semibold text-brew-primary">
                      "Every blend tells your story." ✨
                    </p>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-center justify-center gap-4 text-brew-primary">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-brew-accent to-brew-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <p className="text-sm font-medium">Sarah</p>
                      </div>
                      <div className="text-2xl">💕</div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-brew-primary to-brew-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <p className="text-sm font-medium">Marcus</p>
                      </div>
                    </div>
                    <p className="text-sm text-brew-text-light mt-3">
                      Co-founders & Tea Enthusiasts
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl floating-animation">
                <div className="text-center">
                  <div className="text-2xl mb-1">🌱</div>
                  <div className="text-xs text-brew-text-light font-medium">Sustainable</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-xl floating-animation-delayed">
                <div className="text-center">
                  <div className="text-2xl mb-1">❤️</div>
                  <div className="text-xs text-brew-text-light font-medium">Made with Love</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 glass-card rounded-2xl p-3 shadow-xl floating-animation">
                <div className="text-center">
                  <div className="text-xl">🇦🇺</div>
                  <div className="text-xs text-brew-text-light font-medium mt-1">Melbourne</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-16 border-t border-brew-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Organic Ingredients', emoji: '🌿' },
              { number: '100%', label: 'Melbourne Made', emoji: '🇦🇺' },
              { number: '∞', label: 'Blend Possibilities', emoji: '✨' },
              { number: '2', label: 'Passionate Founders', emoji: '💕' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.emoji}
                </div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-brew-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-brew-text-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}