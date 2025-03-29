
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface PackageInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
  features: string[];
  locations: {
    name: string;
    image: string;
    description: string;
  }[];
  price: string;
  icon: string;
}

const PackageDetail = () => {
  const { type } = useParams<{ type: string }>();
  
  const packages: Record<string, PackageInfo> = {
    'adventure': {
      id: 'adventure',
      title: 'Adventure Seekers',
      description: 'Embark on thrilling journeys. Hiking, diving, and exploring untamed landscapes for those with an adventurous spirit.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: 'Our Adventure Seekers package is designed for travelers who crave excitement and adrenaline. From scaling mountain peaks to diving deep into ocean waters, these journeys push boundaries and create unforgettable memories. Guided by experienced experts who prioritize both thrills and safety, you\'ll discover the world\'s most stunning natural environments through activities that challenge and exhilarate.',
      features: [
        'Professional expedition leaders with safety certification',
        'Top-quality equipment provided for all activities',
        'Small groups for personalized attention',
        'Flexible itineraries adapted to weather and conditions',
        'Accommodation ranging from luxury lodges to authentic wilderness camps',
        'Transportation optimized for remote destinations'
      ],
      locations: [
        {
          name: 'Patagonia Trek',
          image: 'https://images.unsplash.com/photo-1531794506730-7ebb17a959cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
          description: 'Trek through Torres del Paine National Park, experiencing some of the most dramatic landscapes on Earth.'
        },
        {
          name: 'Galapagos Expedition',
          image: 'https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
          description: 'Snorkel with sea lions, hike volcanic landscapes, and encounter wildlife found nowhere else on the planet.'
        },
        {
          name: 'New Zealand Multi-Sport',
          image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80',
          description: 'Kayak, hike, and bike through the stunning landscapes of New Zealand\'s South Island.'
        }
      ],
      price: 'From $3,999 per person',
      icon: 'Compass'
    },
    'relaxation': {
      id: 'relaxation',
      title: 'Relaxation Retreats',
      description: 'Unwind in serene destinations. Spa treatments, pristine beaches, and peaceful environments for total rejuvenation.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      details: 'Our Relaxation Retreats are carefully crafted to provide the ultimate in restful luxury. These journeys take you to tranquil settings where the pace slows, allowing for deep relaxation and renewal. From beachfront villas to mountain wellness resorts, each accommodation is selected for its peaceful ambiance and exceptional service. Daily schedules offer the perfect balance of structured wellness activities and free time to simply be.',
      features: [
        'Premium spa treatments included in every package',
        'Luxury accommodations in serene settings',
        'Daily yoga and meditation sessions with expert instructors',
        'Nutritious, gourmet meals featuring local ingredients',
        'Digital detox options for complete disconnection',
        'Personalized wellness consultations'
      ],
      locations: [
        {
          name: 'Maldives Overwater Villa',
          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80',
          description: 'Experience absolute tranquility in a private overwater villa with direct access to crystal-clear waters.'
        },
        {
          name: 'Bali Wellness Retreat',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1438&q=80',
          description: 'Immerse yourself in Bali\'s spiritual culture with a retreat focused on holistic wellness and inner peace.'
        },
        {
          name: 'Thai Island Escape',
          image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1439&q=80',
          description: 'Unwind on secluded beaches and enjoy traditional Thai massage and wellness treatments in luxurious surroundings.'
        }
      ],
      price: 'From $4,299 per person',
      icon: 'Waves'
    },
    'cultural': {
      id: 'cultural',
      title: 'Cultural Immersion',
      description: 'Dive into rich cultural experiences. Historical tours, authentic cuisine, and local traditions for curious travelers.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      details: 'Our Cultural Immersion journeys go beyond typical tourism to offer authentic connections with local communities and traditions. These carefully crafted experiences provide meaningful insights into different ways of life, guided by locals who share their knowledge and passion. From cooking classes with family recipes to participating in traditional ceremonies, these journeys foster understanding and appreciation of global cultural diversity.',
      features: [
        'Local expert guides with deep cultural knowledge',
        'Small group sizes to facilitate genuine community interactions',
        'Accommodations that reflect local architectural traditions',
        'Culinary experiences featuring regional specialties',
        'Participation in local festivals and cultural events',
        'Ethical photography workshops in culturally sensitive settings'
      ],
      locations: [
        {
          name: 'Japan Heritage Journey',
          image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          description: 'Experience ancient traditions alongside modern innovation in Kyoto, Tokyo, and rural Japanese villages.'
        },
        {
          name: 'Moroccan Mosaic',
          image: 'https://images.unsplash.com/photo-1577047548262-991feb2556f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          description: 'Explore bustling markets, historic medinas, and the Berber villages of the Atlas Mountains.'
        },
        {
          name: 'Peruvian Highlands',
          image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          description: 'Connect with indigenous communities in the Sacred Valley and discover the living history of Machu Picchu.'
        }
      ],
      price: 'From $3,599 per person',
      icon: 'BookOpen'
    }
  };
  
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
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden neomorphic mb-8">
              <img 
                src={packageInfo.image} 
                alt={packageInfo.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{packageInfo.title}</h1>
                <p className="text-lg md:text-xl text-white/90 max-w-3xl">{packageInfo.description}</p>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 text-lg mb-8">{packageInfo.details}</p>
              
              <div className="neomorphic-card p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6">Package Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className={`${index % 2 === 0 ? 'text-ocean' : 'text-salmon'} flex-shrink-0 mr-2 mt-1`} size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold mb-8">Featured Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {packageInfo.locations.map((location, index) => (
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
              
              <div className="text-center">
                <p className="text-2xl font-bold text-ocean mb-6">{packageInfo.price}</p>
                <a href="/#contact" className="neomorphic-btn text-ocean hover:text-salmon inline-block">
                  Inquire About This Package
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;
