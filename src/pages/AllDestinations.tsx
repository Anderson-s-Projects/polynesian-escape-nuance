
import React from 'react';
import Navbar from '../components/Navbar';
import DestinationCard from '../components/DestinationCard';
import Footer from '../components/Footer';

const AllDestinations = () => {
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
    {
      id: "amalfi",
      title: "Amalfi Coast Tour",
      location: "Italy",
      image: "https://images.unsplash.com/photo-1533606688190-a44bc9bb3cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Drive along the stunning coastline, visiting charming villages, savoring authentic Italian cuisine, and enjoying the Mediterranean lifestyle.",
      price: "From $3,299",
    },
    {
      id: "tahiti",
      title: "Tahiti Island Hopping",
      location: "French Polynesia",
      image: "https://images.unsplash.com/photo-1582750580712-ba33e87b4742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Experience multiple islands with unique characters, from the vibrant markets of Papeete to the vanilla plantations of Taha'a.",
      price: "From $4,099",
    },
    {
      id: "fiji",
      title: "Fiji Island Paradise",
      location: "Fiji",
      image: "https://images.unsplash.com/photo-1587407627257-27b7127c868c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Discover the pristine beaches, vibrant coral reefs, and authentic village experiences that make Fiji a true South Pacific gem.",
      price: "From $3,199",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">Explore the World</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Destinations</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of handpicked destinations, each offering unique experiences and unforgettable memories.
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AllDestinations;
