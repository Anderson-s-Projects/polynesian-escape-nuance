
import React from 'react';

interface PackageDetailHeaderProps {
  image: string;
  title: string;
  description: string;
}

const PackageDetailHeader = ({ image, title, description }: PackageDetailHeaderProps) => {
  return (
    <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden neomorphic mb-8">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl">{description}</p>
      </div>
    </div>
  );
};

export default PackageDetailHeader;
