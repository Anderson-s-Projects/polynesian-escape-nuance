
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the package price?",
      answer: "Our package prices typically include accommodation, selected meals, guided tours, and transfers as specified in each itinerary. International flights are usually not included unless specifically stated. We provide detailed inclusions for each trip on the destination page."
    },
    {
      question: "How many people are typically in a tour group?",
      answer: "Our group sizes vary by destination and tour type. For most cultural and adventure tours, we limit groups to 12-16 travelers to ensure a personalized experience. Luxury tours may have smaller groups of 8-10, while certain special tours may accommodate up to 20 participants."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand plans can change. For most tours, cancellations made 60+ days before departure receive a full refund minus deposit. Cancellations 30-59 days prior receive a 50% refund. Cancellations less than 30 days before departure are non-refundable. We strongly recommend travel insurance to protect your investment."
    },
    {
      question: "Do I need travel insurance?",
      answer: "While not mandatory, we strongly recommend comprehensive travel insurance that includes coverage for trip cancellation, medical emergencies, and baggage loss. For certain adventure activities or remote destinations, specific insurance may be required. We can suggest appropriate insurance options based on your selected destination."
    },
    {
      question: "What is the best time to visit Polynesian destinations?",
      answer: "The best time to visit Polynesian destinations like Bora Bora, Tahiti, and Fiji is during the dry season, which generally runs from May to October. These months offer pleasant temperatures, lower humidity, and less rainfall, creating ideal conditions for beach activities and water sports."
    },
    {
      question: "How do I make a reservation?",
      answer: "Making a reservation is easy! You can book directly through our website by selecting your desired tour and clicking 'Book Now.' Alternatively, you can contact our travel specialists by phone or email. A deposit is required to secure your booking, with the balance due 60 days before departure."
    },
    {
      question: "Are your tours suitable for solo travelers?",
      answer: "Absolutely! Many of our clients are solo travelers. Our small group tours are perfect for meeting like-minded travelers while enjoying the safety and convenience of organized travel. We offer single room options, or we can match you with a roommate of the same gender to avoid single supplements if preferred."
    },
    {
      question: "Do you arrange custom or private tours?",
      answer: "Yes, we specialize in creating custom itineraries tailored to your specific interests, timeframe, and budget. Our travel specialists can customize any of our regular tours or design something completely unique for you, your family, or your group of friends."
    },
    {
      question: "What should I pack for my trip?",
      answer: "Packing recommendations vary by destination, season, and activities planned. Upon booking, you'll receive a detailed packing list specific to your tour. Generally, we recommend lightweight, breathable clothing, comfortable walking shoes, sun protection, and any specialty items needed for specific activities like snorkeling or hiking."
    },
    {
      question: "Do I need a visa for my destination?",
      answer: "Visa requirements depend on your nationality and destination. We provide general visa information for each tour, but it's the traveler's responsibility to secure necessary visas. Our team can guide you through the process and provide documentation to support visa applications when needed."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-28 pb-16 polynesian-pattern">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">Help Center</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our travel packages, booking process, and destinations. If you can't find what you're looking for, please contact our support team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group neomorphic-card mb-4 p-6 rounded-xl open:mb-8 transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-ocean group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          
          <div className="neomorphic-card max-w-4xl mx-auto mt-12 p-6 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Our travel experts are here to help you plan your perfect getaway.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:info@polynesianescapes.com" 
                  className="neomorphic-btn text-ocean hover:text-salmon px-8 py-3"
                >
                  Email Us
                </a>
                <a 
                  href="#contact" 
                  className="neomorphic-btn bg-ocean text-white hover:bg-ocean-dark px-8 py-3"
                >
                  Contact Form
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

export default FAQ;
