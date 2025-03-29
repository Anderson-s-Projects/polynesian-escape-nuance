
import React from 'react';

interface Location {
  name: string;
  image: string;
  description: string;
}

interface PackageLocationsProps {
  locations: Location[];
}

const PackageLocations = ({ locations }: PackageLocationsProps) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {locations.map((location, index) => (
          <div key={index} className="neomorphic-card overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{location.name}</h3>
              <p className="text-gray-600 text-sm">{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageLocations;
