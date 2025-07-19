export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FBFAF7] py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <div>
            <h2 className="font-playfair text-4xl font-medium text-[#264E36] mb-6">
              Our Story
            </h2>
            
            <div className="space-y-6 font-inter text-[#737373] leading-relaxed">
              <p>
                We're Sarah and James, a Melbourne couple passionate about the healing power of tea. 
                After years of struggling with stress and busy city life, we discovered how the right 
                blend of herbs could transform our daily routine.
              </p>
              
              <p>
                What started as personal experimentation in our kitchen became a mission to help others 
                find their perfect cup of calm. We believe everyone deserves a moment of peace in their day, 
                and tea is our way of delivering that.
              </p>
              
              <p>
                Every blend we create is organic, locally sourced where possible, and crafted with intention. 
                We're not just selling tea – we're sharing a ritual of self-care, one sip at a time.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-6">
                <div className="text-2xl mb-3">🌱</div>
                <h3 className="font-playfair text-lg font-medium text-[#264E36] mb-2">
                  Locally Sourced
                </h3>
                <p className="font-inter text-sm text-[#737373]">
                  Supporting Melbourne growers and sustainable practices
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6">
                <div className="text-2xl mb-3">💚</div>
                <h3 className="font-playfair text-lg font-medium text-[#264E36] mb-2">
                  Wellness First
                </h3>
                <p className="font-inter text-sm text-[#737373]">
                  Every ingredient chosen for its therapeutic benefits
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Founders */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#F5F4F0] rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍🦰</span>
                  </div>
                  <div className="w-16 h-16 bg-[#F5F4F0] rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍🦱</span>
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-medium text-[#264E36] mb-2">
                  Sarah & James
                </h3>
                <p className="font-inter text-[#737373] text-sm">
                  Founders & Tea Enthusiasts
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-playfair text-2xl font-medium text-[#264E36]">50+</div>
                  <div className="font-inter text-xs text-[#737373]">Ingredients Tested</div>
                </div>
                <div>
                  <div className="font-playfair text-2xl font-medium text-[#264E36]">2</div>
                  <div className="font-inter text-xs text-[#737373]">Years Research</div>
                </div>
                <div>
                  <div className="font-playfair text-2xl font-medium text-[#264E36]">100%</div>
                  <div className="font-inter text-xs text-[#737373]">Organic</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#D1B87F] rounded-full opacity-20 float"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#264E36] rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="font-playfair text-2xl font-medium text-[#264E36] mb-4">
            Ready to find your perfect blend?
          </h3>
          <button className="bg-[#D1B87F] text-[#264E36] font-inter font-medium px-8 py-4 rounded-full btn-hover">
            Take the Quiz
          </button>
        </div>
      </div>
    </section>
  )
}