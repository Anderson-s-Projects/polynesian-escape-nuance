
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PackageFeaturesProps {
  features: string[];
}

const PackageFeatures = ({ features }: PackageFeaturesProps) => {
  return (
    <div className="neomorphic-card p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6">Package Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className={`${index % 2 === 0 ? 'text-ocean' : 'text-salmon'} flex-shrink-0 mr-2 mt-1`} size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageFeatures;
