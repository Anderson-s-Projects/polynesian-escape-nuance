
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Heart, Share2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

interface DestinationDetailProps {}

const DestinationDetail: React.FC<DestinationDetailProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we're using the sample data to match the one from the index page
    const destinations = [
      {
        id: "bora-bora",
        title: "Bora Bora Paradise",
        location: "French Polynesia",
        image: "https://images.unsplash.com/photo-1589152607430-a69b32b1f65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Experience the ultimate luxury in overwater bungalows with stunning views of Mount Otemanu and crystal-clear lagoons.",
        longDescription: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it's known for its scuba diving. It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island's center rises Mt. Otemanu, a 727m dormant volcano.",
        price: "From $3,499",
        priceNumeric: 3499,
        duration: "7 days",
        activities: ["Snorkeling", "Jet Skiing", "Sunset Cruises", "Island Tour", "Spa Treatments"],
        rating: 4.9,
        reviews: 245,
        gallery: [
          "https://images.unsplash.com/photo-1589152607430-a69b32b1f65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1494137269338-d36b0f687715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
          "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80",
          "https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        ]
      },
      {
        id: "santorini",
        title: "Santorini Getaway",
        location: "Greece",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        description: "Wander through whitewashed villages perched on volcanic cliffs, enjoying breathtaking sunsets over the Aegean Sea.",
        longDescription: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
        price: "From $2,799",
        priceNumeric: 2799,
        duration: "8 days",
        activities: ["Wine Tasting", "Boat Tour", "Archaeological Sites", "Cliff Jumping", "Beach Relaxation"],
        rating: 4.7,
        reviews: 312,
        gallery: [
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1602544204029-581d9c155afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        ]
      },
      {
        id: "kyoto",
        title: "Kyoto Cultural Immersion",
        location: "Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "Discover ancient temples, traditional tea ceremonies, and serene bamboo forests in Japan's cultural heart.",
        longDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
        price: "From $2,999",
        priceNumeric: 2999,
        duration: "10 days",
        activities: ["Temple Tours", "Tea Ceremony", "Kimono Experience", "Bamboo Forest Walk", "Cooking Class"],
        rating: 4.8,
        reviews: 189,
        gallery: [
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ]
      },
      {
        id: "maui",
        title: "Maui Adventure",
        location: "Hawaii, USA",
        image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "From the Road to Hana to snorkeling in Molokini Crater, experience the perfect blend of adventure and relaxation.",
        longDescription: "Maui is an island in the Central Pacific, part of the Hawaiian archipelago. Sprawling Haleakala National Park encompasses the island's highest peak, volcanic Haleakala, as well as the pools and waterfalls of Ohe'o Gulch, accessed via scenic, winding Hana Highway. The island's 30 miles of beaches include golden-crescent Kapalua, sheltered from strong currents by lava-rock promontories.",
        price: "From $2,599",
        priceNumeric: 2599,
        duration: "7 days",
        activities: ["Road to Hana Drive", "Snorkeling", "Whale Watching", "Volcano Sunrise", "Luau Experience"],
        rating: 4.6,
        reviews: 276,
        gallery: [
          "https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
          "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          "https://images.unsplash.com/photo-1547099037-5a67e3028828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ]
      },
      {
        id: "maldives",
        title: "Maldives Retreat",
        location: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
        description: "Indulge in ultimate luxury at private island resorts with pristine beaches and vibrant coral reefs at your doorstep.",
        longDescription: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue lagoons and extensive reefs. The capital, Malé, has a busy fish market, restaurants and shops on the main road, Majeedhee Magu, and 17th-century Hukuru Miskiy (also known as Friday Mosque) made of carved white coral.",
        price: "From $4,199",
        priceNumeric: 4199,
        duration: "9 days",
        activities: ["Scuba Diving", "Island Hopping", "Underwater Restaurant", "Sunset Fishing", "Spa Treatments"],
        rating: 4.9,
        reviews: 203,
        gallery: [
          "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
          "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
          "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80",
        ]
      },
      {
        id: "bali",
        title: "Bali Spiritual Journey",
        location: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80",
        description: "Rejuvenate your soul in the Island of Gods with yoga retreats, ancient temples, and lush rice terraces.",
        longDescription: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.",
        price: "From $1,999",
        priceNumeric: 1999,
        duration: "10 days",
        activities: ["Yoga Retreat", "Temple Tour", "Rice Terrace Trek", "Waterfall Swimming", "Monkey Forest Visit"],
        rating: 4.7,
        reviews: 341,
        gallery: [
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80",
          "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ]
      },
    ];
    
    // Find the destination by ID
    const found = destinations.find(dest => dest.id === id);
    
    // Simulate loading
    setTimeout(() => {
      if (found) {
        setDestination(found);
      }
      setLoading(false);
    }, 300);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleBookNow = () => {
    toast.success("Booking inquiry sent! Our team will contact you shortly.");
  };
  
  const handleAddToFavorites = () => {
    toast.success("Added to your favorites!");
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };
  
  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!destination) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h2 className="text-3xl font-bold mb-4">Destination Not Found</h2>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="neomorphic-btn text-ocean hover:text-salmon">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div>
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 md:px-8 mb-6">
          <nav className="text-sm text-gray-500">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="hover:text-ocean">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center">
                <Link to="/#destinations" className="hover:text-ocean">Destinations</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="text-gray-700 font-medium">{destination.title}</li>
            </ol>
          </nav>
        </div>
        
        {/* Destination Header */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{destination.title}</h1>
              <div className="flex items-center mb-1">
                <MapPin size={18} className="text-ocean mr-2" />
                <span className="text-gray-700">{destination.location}</span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-700">{destination.rating} ({destination.reviews} reviews)</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-ocean">{destination.price}</div>
              <div className="text-sm text-gray-500">per person</div>
            </div>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 h-96 rounded-xl overflow-hidden neomorphic">
              <img 
                src={destination.gallery[selectedImage]} 
                alt={destination.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-3 gap-4">
              {destination.gallery.slice(1, 4).map((img, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden cursor-pointer neomorphic"
                  onClick={() => setSelectedImage(index + 1)}
                >
                  <img 
                    src={img} 
                    alt={`${destination.title} ${index + 1}`} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <div className="neomorphic-card mb-8">
                <h2 className="text-2xl font-bold mb-4">About this Destination</h2>
                <p className="text-gray-700 mb-6">{destination.longDescription}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 rounded-xl neomorphic">
                    <Calendar className="text-ocean mb-2" size={24} />
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="font-medium">{destination.duration}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl neomorphic">
                    <Users className="text-salmon mb-2" size={24} />
                    <span className="text-sm text-gray-500">Group Size</span>
                    <span className="font-medium">2-12 people</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl neomorphic">
                    <Clock className="text-ocean mb-2" size={24} />
                    <span className="text-sm text-gray-500">Best Time</span>
                    <span className="font-medium">Apr-Oct</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl neomorphic">
                    <MapPin className="text-salmon mb-2" size={24} />
                    <span className="text-sm text-gray-500">Location</span>
                    <span className="font-medium">{destination.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="neomorphic-card mb-8">
                <h2 className="text-2xl font-bold mb-4">Activities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.activities.map((activity, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg neomorphic">
                      <div className="rounded-full bg-ocean/10 p-2 mr-3">
                        <div className="w-2 h-2 rounded-full bg-ocean"></div>
                      </div>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="neomorphic-card">
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="rounded-xl overflow-hidden neomorphic h-72 mb-6">
                  <img 
                    src={`https://placehold.co/800x400/e2e8f0/1e293b?text=Map+of+${destination.location.replace(/\s/g, '+')}`} 
                    alt={`Map of ${destination.location}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="text-gray-700">
                  Discover the beauty of {destination.location}, where breathtaking scenery meets unique cultural experiences. 
                  Our carefully designed itineraries ensure you'll experience the best this destination has to offer.
                </p>
              </div>
            </div>
            
            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="neomorphic-card sticky top-24">
                <h3 className="text-xl font-bold mb-4">Book This Trip</h3>
                
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="neomorphic-input p-4 rounded-xl">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Departure Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent focus:outline-none" 
                    />
                  </div>
                  
                  <div className="neomorphic-input p-4 rounded-xl">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Travelers
                    </label>
                    <select className="w-full bg-transparent focus:outline-none">
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5+">5+ Travelers</option>
                    </select>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Base Price:</span>
                    <span>${destination.priceNumeric.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Taxes & Fees:</span>
                    <span>${Math.round(destination.priceNumeric * 0.12).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-ocean">${Math.round(destination.priceNumeric * 1.12).toLocaleString()}</span>
                  </div>
                </div>
                
                <Button
                  onClick={handleBookNow}
                  className="neomorphic-btn bg-ocean text-white hover:bg-ocean-dark w-full mb-4 py-6 text-lg"
                >
                  Book Now
                </Button>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={handleAddToFavorites}
                    className="flex-1 neomorphic-btn flex items-center justify-center"
                  >
                    <Heart size={20} className="mr-2" />
                    <span>Save</span>
                  </button>
                  <button 
                    onClick={handleShare}
                    className="flex-1 neomorphic-btn flex items-center justify-center"
                  >
                    <Share2 size={20} className="mr-2" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;
