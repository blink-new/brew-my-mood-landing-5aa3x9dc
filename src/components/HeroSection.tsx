export default function HeroSection() {
  return (
    <section className="relative bg-[#FBFAF7] py-20 px-6 lg:px-12 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5F4F0] organic-shape opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0F0EC] organic-shape-2 opacity-40"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="font-playfair text-5xl lg:text-6xl font-medium text-[#264E36] mb-6 leading-tight">
          Find Your Perfect<br />
          <span className="text-[#D1B87F]">Cup of Calm</span>
        </h1>
        
        <p className="font-inter text-lg text-[#737373] mb-12 max-w-2xl mx-auto">
          Personalised tea blends crafted for<br />
          your mood and wellness
        </p>

        <button className="bg-[#D1B87F] text-[#264E36] font-inter font-medium px-8 py-4 rounded-full btn-hover mb-16">
          Take the Mood Quiz
        </button>

        {/* Curved signup section */}
        <div className="relative">
          {/* Curved background */}
          <div className="absolute inset-0 bg-[#F5F4F0] curve-top transform -translate-y-8 h-32"></div>
          
          {/* Signup card */}
          <div className="relative bg-white rounded-2xl p-8 shadow-sm max-w-md mx-auto">
            <h3 className="font-playfair text-2xl font-medium text-[#264E36] mb-2">
              Get 25% off your first order
            </h3>
            <p className="font-inter text-[#737373] mb-6">
              Sign up for early access
            </p>
            
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full font-inter text-sm focus:outline-none focus:border-[#D1B87F]"
              />
              <button className="bg-[#D1B87F] text-[#264E36] font-inter font-medium px-6 py-3 rounded-full btn-hover">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}