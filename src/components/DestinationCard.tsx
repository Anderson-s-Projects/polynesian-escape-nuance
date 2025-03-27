
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  location: string;
  image: string;
  description: string;
  price: string;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  location,
  image,
  description,
  price,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`neomorphic-card overflow-hidden transition-all duration-500 animate-fade-in`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl h-64 mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white/90 text-sm mb-1">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="px-2">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-salmon font-bold text-lg">{price}</span>
          <button className="neomorphic-btn text-ocean hover:text-salmon text-sm px-4 py-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
