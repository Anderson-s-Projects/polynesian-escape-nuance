
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { packages } from '../data/PackageData';
import PackageDetailHeader from '../components/PackageDetail/PackageDetailHeader';
import PackageFeatures from '../components/PackageDetail/PackageFeatures';
import PackageLocations from '../components/PackageDetail/PackageLocations';
import PriceCallToAction from '../components/PackageDetail/PriceCallToAction';

const PackageDetail = () => {
  const { type } = useParams<{ type: string }>();
  const packageInfo = type ? packages[type] : null;
  
  if (!packageInfo) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-16 bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Package Not Found</h1>
            <p className="mb-8">Sorry, the package you're looking for doesn't exist.</p>
            <Link to="/#packages" className="neomorphic-btn text-ocean hover:text-salmon">
              View All Packages
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <PackageDetailHeader 
              image={packageInfo.image} 
              title={packageInfo.title} 
              description={packageInfo.description} 
            />
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg mb-8">{packageInfo.details}</p>
              
              <PackageFeatures features={packageInfo.features} />
              
              <PackageLocations locations={packageInfo.locations} />
              
              <PriceCallToAction price={packageInfo.price} />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;
