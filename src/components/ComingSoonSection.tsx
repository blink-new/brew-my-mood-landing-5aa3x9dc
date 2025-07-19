import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Mail, Gift, Clock, Users } from 'lucide-react'

export default function ComingSoonSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="signup" className="py-20 bg-brew-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            We're Launching Soon!
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Be the first to experience personalized tea blending. Sign up now and get 25% off your first order when we launch.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-2xl font-serif font-bold mb-1">Coming Soon</div>
            <div className="text-white/80">Launch Date TBA</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-serif font-bold mb-1">500+</div>
            <div className="text-white/80">Early Subscribers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3">
              <Gift className="w-6 h-6" />
            </div>
            <div className="text-2xl font-serif font-bold mb-1">25% Off</div>
            <div className="text-white/80">Launch Discount</div>
          </div>
        </div>

        {/* Email Signup */}
        {!isSubmitted ? (
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-brew-accent text-brew-primary hover:bg-brew-accent/90 font-semibold"
                >
                  Get 25% Off Launch
                </Button>
              </form>
              <p className="text-sm text-white/70 mt-3">
                No spam, just tea updates and your exclusive discount code.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-brew-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-brew-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">You're In!</h3>
              <p className="text-white/80">
                Thanks for signing up! We'll send you your 25% discount code as soon as we launch.
              </p>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 text-white/70">
          <p>Join hundreds of tea lovers already waiting for launch</p>
        </div>
      </div>
    </section>
  )
}