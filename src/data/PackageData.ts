
export interface PackageInfo {
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

export const packages: Record<string, PackageInfo> = {
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
