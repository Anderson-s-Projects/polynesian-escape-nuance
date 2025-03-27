
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl md:text-3xl font-bold text-ocean transition-all duration-300">
            <span className="font-black tracking-tight">Polynesian</span>
            <span className="text-ocean-dark">Escapes</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#destinations" className="font-medium text-gray-700 hover:text-ocean transition-colors duration-300">Destinations</a>
            <a href="#packages" className="font-medium text-gray-700 hover:text-ocean transition-colors duration-300">Packages</a>
            <a href="#about" className="font-medium text-gray-700 hover:text-ocean transition-colors duration-300">About</a>
            <a href="#contact" className="neomorphic-btn font-medium text-ocean hover:text-ocean-dark">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden neomorphic-btn p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#destinations" 
            className="font-medium text-gray-700 hover:text-ocean transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Destinations
          </a>
          <a 
            href="#packages" 
            className="font-medium text-gray-700 hover:text-ocean transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Packages
          </a>
          <a 
            href="#about" 
            className="font-medium text-gray-700 hover:text-ocean transition-colors duration-300 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="neomorphic-btn font-medium text-ocean hover:text-ocean-dark text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
