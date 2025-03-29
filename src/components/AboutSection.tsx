
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Journey, Our Expertise</h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for authentic travel experiences, Polynesian Escapes brings the spirit of Polynesian hospitality to destinations worldwide. Our team of seasoned travelers and local experts craft journeys that balance luxury, adventure, and cultural immersion.
            </p>
            <p className="text-gray-600 mb-8">
              We believe travel should transform, inspire, and rejuvenate. Whether you're seeking a serene beach retreat or an adrenaline-filled expedition, we design each itinerary with meticulous attention to detail and a commitment to responsible tourism.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-ocean flex-shrink-0 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Personalized Service</h4>
                  <p className="text-sm text-gray-600">Tailored experiences for your unique preferences</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-salmon flex-shrink-0 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Expert Guides</h4>
                  <p className="text-sm text-gray-600">Local knowledge and insider access</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-ocean flex-shrink-0 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Luxury Accommodations</h4>
                  <p className="text-sm text-gray-600">Carefully selected for comfort and authenticity</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-salmon flex-shrink-0 mr-2 mt-1" size={20} />
                <div>
                  <h4 className="font-medium mb-1">Sustainable Travel</h4>
                  <p className="text-sm text-gray-600">Responsible practices that respect local communities</p>
                </div>
              </div>
            </div>
            
            <Link to="/our-story" className="neomorphic-btn text-ocean hover:text-salmon">
              Learn Our Story
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden neomorphic">
              <img 
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Travel experts planning a journey" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-2xl neomorphic rotate-6 z-0 border-2 border-salmon/20"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl neomorphic -rotate-12 z-0 border-2 border-ocean/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
