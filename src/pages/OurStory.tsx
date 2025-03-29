
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Polynesian Escapes Journey</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How a passion for authentic travel experiences grew into a global travel company dedicated to transformative journeys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="relative z-10 rounded-2xl overflow-hidden neomorphic">
                <img 
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80" 
                  alt="The beginning of our journey" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-2xl neomorphic rotate-12 z-0 border-2 border-salmon/20"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Beginning</h2>
              <p className="text-gray-600 mb-6">
                Polynesian Escapes was born in 2010 when our founders, Maria and James, fell in love with the serene beauty and rich culture of the Polynesian islands. What started as a personal journey turned into a mission to share these authentic experiences with travelers seeking more than just a vacation.
              </p>
              <p className="text-gray-600">
                Their first guided tour with just eight adventurous travelers set the foundation for what would become our company philosophy: intimate experiences, cultural immersion, and responsible tourism that benefits local communities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Growing Our Vision</h2>
              <p className="text-gray-600 mb-6">
                As word spread about our unique approach to travel, we expanded beyond Polynesia to destinations worldwide. Yet we maintained our commitment to small groups, exceptional service, and experiences that can't be found in guidebooks.
              </p>
              <p className="text-gray-600">
                We carefully vetted each new destination, forming partnerships with local guides, family-owned accommodations, and community organizations to ensure our travelers gained authentic insights while positively impacting the places they visited.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative z-10 rounded-2xl overflow-hidden neomorphic">
                <img 
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
                  alt="Growing our vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl neomorphic -rotate-12 z-0 border-2 border-ocean/20"></div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              At the heart of Polynesian Escapes are the values that guide every journey we create, every partnership we form, and every interaction with our travelers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="neomorphic-card p-6 flex flex-col items-center text-center">
                <div className="rounded-full neomorphic p-4 mb-4">
                  <CheckCircle className="text-ocean" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Authenticity</h3>
                <p className="text-gray-600">We create experiences that engage with local cultures respectfully and genuinely.</p>
              </div>
              
              <div className="neomorphic-card p-6 flex flex-col items-center text-center">
                <div className="rounded-full neomorphic p-4 mb-4">
                  <CheckCircle className="text-salmon" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Sustainability</h3>
                <p className="text-gray-600">We're committed to minimizing our environmental footprint and supporting conservation efforts.</p>
              </div>
              
              <div className="neomorphic-card p-6 flex flex-col items-center text-center">
                <div className="rounded-full neomorphic p-4 mb-4">
                  <CheckCircle className="text-ocean" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Excellence</h3>
                <p className="text-gray-600">We strive for exceptional quality in every aspect of the travel experience we provide.</p>
              </div>
              
              <div className="neomorphic-card p-6 flex flex-col items-center text-center">
                <div className="rounded-full neomorphic p-4 mb-4">
                  <CheckCircle className="text-salmon" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">Community</h3>
                <p className="text-gray-600">We contribute to local economies and support initiatives that benefit the communities we visit.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Every traveler who chooses Polynesian Escapes becomes part of our ongoing story. We invite you to experience the world with us, creating memories that will last a lifetime while contributing to a more connected and sustainable global community.
            </p>
            <a href="/#contact" className="neomorphic-btn text-ocean hover:text-salmon inline-block">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurStory;
