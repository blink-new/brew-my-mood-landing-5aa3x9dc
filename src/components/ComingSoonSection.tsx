import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Mail, Gift, Sparkles, CheckCircle } from 'lucide-react'

export default function ComingSoonSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
    }
  }

  if (isSubmitted) {
    return (
      <section id="signup" className="py-24 bg-gradient-to-br from-brew-primary/5 via-brew-accent/10 to-brew-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-brew-accent/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brew-primary/20 rounded-full blur-3xl floating-animation-delayed"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12 hover-lift">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-8 pulse-glow">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-bold gradient-text mb-6">
              You're In! 🎉
            </h2>
            
            <p className="text-xl text-brew-text-light mb-8 max-w-2xl mx-auto">
              Welcome to the Brew My Mood family! We'll notify you as soon as we launch in Melbourne, and your <span className="font-bold text-brew-primary">25% discount</span> is waiting for you.
            </p>

            <div className="bg-brew-accent/20 rounded-2xl p-6 border border-brew-accent/30">
              <div className="flex items-center justify-center gap-3 text-brew-primary font-semibold text-lg">
                <Gift className="w-6 h-6" />
                Your 25% discount is secured!
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="signup" className="py-24 bg-gradient-to-br from-brew-primary/5 via-brew-accent/10 to-brew-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-brew-accent/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-brew-primary/20 rounded-full blur-3xl floating-animation-delayed"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brew-accent/20 text-brew-primary px-6 py-3 rounded-full text-lg font-semibold mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Coming Soon to Melbourne
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-8">
            <span className="gradient-text">We're Brewing</span>
            <br />
            <span className="text-brew-primary">Something Special</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-brew-text-light max-w-3xl mx-auto mb-12">
            Get ready for the most personalized tea experience Melbourne has ever seen. Sign up now and be the first to blend your perfect cup with <span className="font-bold text-brew-primary">25% off</span> your first order! 🫖✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: '🌿', title: '100% Organic Ingredients', desc: 'Premium herbs and teas sourced from sustainable farms' },
                { icon: '🎯', title: 'Personalized Blends', desc: 'Every blend is crafted specifically for your taste and wellness goals' },
                { icon: '🚚', title: 'Melbourne Delivery', desc: 'Fresh, hand-blended teas delivered straight to your door' },
                { icon: '💝', title: '25% Launch Discount', desc: 'Exclusive early bird pricing for our founding members' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-brew-primary/10 hover-lift">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-brew-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-brew-text-light">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="lg:pl-8">
            <Card className="glass-card border-brew-primary/20 hover-lift">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brew-accent to-brew-primary rounded-2xl mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brew-primary mb-2">
                    Join the Waitlist
                  </h3>
                  <p className="text-brew-text-light">
                    Be the first to know when we launch + get 25% off!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 text-lg rounded-2xl border-brew-primary/20 focus:border-brew-primary focus:ring-brew-primary/20"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-brew-primary to-brew-accent hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-2xl"
                  >
                    <Gift className="w-5 h-5 mr-2" />
                    Secure My 25% Discount
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-brew-text-light">
                    🔒 We respect your privacy. No spam, just tea updates!
                  </p>
                </div>

                {/* Social Proof */}
                <div className="mt-8 pt-6 border-t border-brew-primary/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-brew-primary font-semibold mb-2">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-8 h-8 bg-gradient-to-br from-brew-accent to-brew-primary rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <span className="ml-2">127+ tea lovers waiting</span>
                    </div>
                    <p className="text-sm text-brew-text-light">
                      Join Melbourne's most excited tea community!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}