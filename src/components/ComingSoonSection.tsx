export default function ComingSoonSection() {
  return (
    <section className="bg-[#F5F4F0] py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FBFAF7] organic-shape opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white organic-shape-2 opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-playfair text-4xl lg:text-5xl font-medium text-[#264E36] mb-6">
          We're Launching Soon
        </h2>
        
        <p className="font-inter text-lg text-[#737373] mb-12 max-w-2xl mx-auto">
          Be the first to experience personalized tea blending. Sign up now and get 25% off your first order when we launch.
        </p>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🌿</div>
            <h3 className="font-playfair text-xl font-medium text-[#264E36] mb-2">
              100% Organic
            </h3>
            <p className="font-inter text-[#737373] text-sm">
              Premium organic ingredients sourced from trusted growers
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-playfair text-xl font-medium text-[#264E36] mb-2">
              Personalized
            </h3>
            <p className="font-inter text-[#737373] text-sm">
              Custom blends tailored to your unique mood and wellness goals
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🚚</div>
            <h3 className="font-playfair text-xl font-medium text-[#264E36] mb-2">
              Fresh Delivery
            </h3>
            <p className="font-inter text-[#737373] text-sm">
              Hand-blended and delivered fresh to your doorstep
            </p>
          </div>
        </div>

        {/* Email signup */}
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-md mx-auto">
          <h3 className="font-playfair text-2xl font-medium text-[#264E36] mb-2">
            Get 25% Off
          </h3>
          <p className="font-inter text-[#737373] mb-6">
            Join our early access list
          </p>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-full font-inter text-sm focus:outline-none focus:border-[#D1B87F]"
            />
            <button className="w-full bg-[#D1B87F] text-[#264E36] font-inter font-medium py-3 rounded-full btn-hover">
              Notify Me When We Launch
            </button>
          </div>
          
          <p className="font-inter text-xs text-[#737373] mt-4">
            No spam, just tea updates. Unsubscribe anytime.
          </p>
        </div>

        {/* Social proof */}
        <div className="mt-12">
          <p className="font-inter text-sm text-[#737373] mb-4">
            Join 500+ tea lovers already on our waitlist
          </p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 bg-[#D1B87F] rounded-full opacity-80"></div>
            ))}
            <span className="font-inter text-sm text-[#737373] ml-2">+495 more</span>
          </div>
        </div>
      </div>
    </section>
  )
}