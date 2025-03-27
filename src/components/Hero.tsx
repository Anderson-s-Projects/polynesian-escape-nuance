
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease-in-out"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 text-center z-10">
        <div className={`transition-all duration-700 delay-300 transform ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Discover Paradise <br className="hidden md:block" />Around the World
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Experience luxury travel inspired by Polynesian culture, tailored to your dreams
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="#destinations" 
              className="neomorphic-btn bg-ocean hover:bg-ocean-dark text-white px-8 py-4 rounded-xl font-medium text-lg transform transition-all hover:scale-105"
            >
              Explore Destinations
            </a>
            <a 
              href="#contact" 
              className="neomorphic-btn bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-4 rounded-xl font-medium text-lg transform transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2 animate-fade-in">Scroll to Explore</span>
        <ChevronDown className="text-white animate-bounce w-6 h-6" />
      </div>
    </div>
  );
};

export default Hero;
