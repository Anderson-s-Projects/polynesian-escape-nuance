
import React from 'react';
import { Compass, Waves, BookOpen } from 'lucide-react';

const PackageSection = () => {
  const packages = [
    {
      title: "Adventure Seekers",
      icon: <Compass className="w-12 h-12 text-ocean mb-4" />,
      description: "Embark on thrilling journeys. Hiking, diving, and exploring untamed landscapes for those with an adventurous spirit.",
      features: ["Guided Expeditions", "Extreme Sports", "Wildlife Encounters", "Mountain Hikes"]
    },
    {
      title: "Relaxation Retreats",
      icon: <Waves className="w-12 h-12 text-salmon mb-4" />,
      description: "Unwind in serene destinations. Spa treatments, pristine beaches, and peaceful environments for total rejuvenation.",
      features: ["Luxury Spas", "Private Beaches", "Yoga Sessions", "Meditation Retreats"]
    },
    {
      title: "Cultural Immersion",
      icon: <BookOpen className="w-12 h-12 text-ocean mb-4" />,
      description: "Dive into rich cultural experiences. Historical tours, authentic cuisine, and local traditions for curious travelers.",
      features: ["Local Guides", "Cooking Classes", "Historical Tours", "Festival Experiences"]
    }
  ];

  return (
    <section id="packages" className="section-padding polynesian-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-salmon/10 text-salmon rounded-full text-sm font-medium mb-4">Our Specialties</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Travel Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the travel style that resonates with your spirit. Each package is crafted with care to provide unforgettable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="neomorphic-card flex flex-col items-center text-center p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="rounded-full neomorphic p-6 mb-6">
                {pkg.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 flex items-center justify-center">
                    <span className={`w-2 h-2 ${index % 2 === 0 ? 'bg-ocean' : 'bg-salmon'} rounded-full mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`neomorphic-btn mt-auto ${index % 2 === 0 ? 'text-ocean hover:text-salmon' : 'text-salmon hover:text-ocean'}`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
