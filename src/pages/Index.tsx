
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import PackageSection from '../components/PackageSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const destinations = [
    {
      id: "bora-bora",
      title: "Bora Bora Paradise",
      location: "French Polynesia",
      image: "https://images.unsplash.com/photo-1589152607430-a69b32b1f65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Experience the ultimate luxury in overwater bungalows with stunning views of Mount Otemanu and crystal-clear lagoons.",
      price: "From $3,499",
    },
    {
      id: "santorini",
      title: "Santorini Getaway",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Wander through whitewashed villages perched on volcanic cliffs, enjoying breathtaking sunsets over the Aegean Sea.",
      price: "From $2,799",
    },
    {
      id: "kyoto",
      title: "Kyoto Cultural Immersion",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Discover ancient temples, traditional tea ceremonies, and serene bamboo forests in Japan's cultural heart.",
      price: "From $2,999",
    },
    {
      id: "maui",
      title: "Maui Adventure",
      location: "Hawaii, USA",
      image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "From the Road to Hana to snorkeling in Molokini Crater, experience the perfect blend of adventure and relaxation.",
      price: "From $2,599",
    },
    {
      id: "maldives",
      title: "Maldives Retreat",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
      description: "Indulge in ultimate luxury at private island resorts with pristine beaches and vibrant coral reefs at your doorstep.",
      price: "From $4,199",
    },
    {
      id: "bali",
      title: "Bali Spiritual Journey",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80",
      description: "Rejuvenate your soul in the Island of Gods with yoga retreats, ancient temples, and lush rice terraces.",
      price: "From $1,999",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Destinations Section */}
      <section id="destinations" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">Popular Destinations</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Perfect Getaway</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the azure waters of Polynesia to ancient cities rich with history, our curated destinations offer unforgettable experiences for every traveler.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                index={index}
                id={destination.id}
                title={destination.title}
                location={destination.location}
                image={destination.image}
                description={destination.description}
                price={destination.price}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="neomorphic-btn text-ocean hover:text-ocean-dark">
              View All Destinations
            </button>
          </div>
        </div>
      </section>
      
      <PackageSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
