import React, { useState } from 'react';
import {
  Home,
  Truck,
  Sofa,
  Building2,
  Paintbrush2,
  Car
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Home Purchase & Rentals",
    description: "Find your next home with ease, whether you're looking to buy or rent. Our experts are here to guide you every step of the way.",
    additionalInfo: "We offer tailored services to find properties that meet your specific needs and budget.",
    icon: Home,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100"
  },
  {
    id: 2,
    title: "Moving Services",
    description: "Professional moving assistance for a stress-free transition. We handle everything from packing and transport to settling in your new home.",
    additionalInfo: "Our team ensures that your belongings are handled with care, providing packing, unpacking, and secure transport.",
    icon: Truck,
    color: "text-green-600",
    bgColor: "bg-green-50",
    hoverColor: "hover:bg-green-100"
  },
  {
    id: 3,
    title: "Furniture Purchase",
    description: "Browse and buy quality furniture with exclusive deals for Arhibu Homes clients. Make your home stylish and functional.",
    additionalInfo: "From modern to classic styles, we provide a wide selection of furniture to suit all tastes and budgets.",
    icon: Sofa,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100"
  },
  {
    id: 4,
    title: "Property Management",
    description: "Full-service property management for landlords. We take care of tenant screening, rent collection, and property maintenance.",
    additionalInfo: "Our experienced team ensures your property is well-maintained, giving you peace of mind and a steady income.",
    icon: Building2,
    color: "text-red-600",
    bgColor: "bg-red-50",
    hoverColor: "hover:bg-red-100"
  },
  {
    id: 5,
    title: "Cleaning and Maintenance",
    description: "Professional cleaning and maintenance services, including gardening and home upkeep, to keep your property in perfect condition.",
    additionalInfo: "Regular maintenance packages are available to keep your property in top shape year-round.",
    icon: Paintbrush2,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    hoverColor: "hover:bg-yellow-100"
  },
  {
    id: 6,
    title: "Chauffeur Services",
    description: "Luxury chauffeur services for home tours and city navigation. Ideal for foreign visitors looking for exclusive homes.",
    additionalInfo: "Travel in comfort and style while exploring potential properties or touring the city.",
    icon: Car,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverColor: "hover:bg-indigo-100"
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const handleLearnMoreClick = (service) => {
    setActiveService(service); // Open dialog immediately with selected service info
  };

  const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
      <div 
        className={`rounded-lg shadow-md transition-all duration-300 cursor-pointer ${service.hoverColor}`}
      >
        <div className="p-6">
          <div className={`w-12 h-12 rounded-lg ${service.bgColor} ${service.color} flex items-center justify-center mb-4`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">
            {service.description}
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => handleLearnMoreClick(service)}
          >
            Learn More
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions for all your real estate needs. From finding your dream home to maintaining it, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Dialog for additional information */}
      {activeService && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center">
          <div className="bg-black rounded-lg p-8 max-w-md w-full shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{activeService.title}</h3>
            <p className="text-gray-600">{activeService.additionalInfo}</p>
            <button 
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setActiveService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Featured Service Banner */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Premium Services Package</h3>
            <p className="text-blue-100 max-w-xl">
              Get exclusive access to all our premium services with our comprehensive package. Perfect for newcomers and investors.
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            Contact Us
          </button>
        </div>
      </div>

      {/* Service Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Happy Clients", value: "2,500+" },
          { label: "Properties Managed", value: "1,200+" },
          { label: "Moving Services", value: "5,000+" },
          { label: "Cities Covered", value: "25+" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;