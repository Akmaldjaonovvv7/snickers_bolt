import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
        {/* Chocolate breaking animation */}
        <div className="chocolate-break absolute inset-0 opacity-20"></div>
        
        {/* Melting chocolate overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/30 to-amber-900/60"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-yellow-600/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-orange-500/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-amber-400/50 rounded-full animate-ping"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
          <span className="block text-amber-300 text-shadow-lg animate-pulse">OCHLIK?</span>
          <span className="block text-5xl md:text-7xl mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            SNICKERS BOR!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-amber-100 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Haqiqiy ta'm va energiya. Har bir luqmada ajoyib lazzat!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg rounded-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden">
            <span className="relative z-10">HOZIROQ XARID QILING</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          
          <button className="px-8 py-4 border-2 border-amber-300 text-amber-300 font-bold text-lg rounded-2xl hover:bg-amber-300 hover:text-amber-900 transition-all duration-300 transform hover:scale-105">
            MAHSULOTLARNI KORISH
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Caramel drizzle effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="caramel-drizzle absolute top-10 left-1/4 w-2 h-32 bg-gradient-to-b from-yellow-400 to-transparent opacity-60 animate-pulse"></div>
        <div className="caramel-drizzle absolute top-20 right-1/3 w-1 h-24 bg-gradient-to-b from-orange-400 to-transparent opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Hero;