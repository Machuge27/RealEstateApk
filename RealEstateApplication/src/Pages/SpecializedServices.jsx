import React, { useState } from 'react';
import { 
  Zap, 
  Camera, 
  Mountain, 
  Paintbrush,
  ArrowRight,
  CheckCircle2,
  Phone,
  X
} from 'lucide-react';

const specializedServices = [
  {
    id: 1,
    title: "Electric Installation",
    description: "From basic wiring to advanced electrical setups, our certified technicians ensure safety and efficiency.",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    features: [
      "Complete electrical system design",
      "Smart home wiring integration",
      "Safety inspections & certifications",
      "Emergency electrical repairs"
    ],
    portfolioImages: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    id: 2,
    title: "Camera Installation",
    description: "Secure your property with our expert camera and smart home security installations.",
    icon: Camera,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    features: [
      "HD security camera systems",
      "Remote monitoring setup",
      "Motion detection systems",
      "24/7 surveillance options"
    ],
    portfolioImages: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    id: 3,
    title: "Stone & Fountain Works",
    description: "Enhance your space with elegant stonework and custom fountains. Check out our completed projects in Addis Ababa.",
    icon: Mountain,
    color: "text-stone-500",
    bgColor: "bg-stone-50",
    features: [
      "Custom fountain design",
      "Natural stone installation",
      "Decorative stonework",
      "Water feature maintenance"
    ],
    portfolioImages: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    id: 4,
    title: "Finishing Works & Interior Design",
    description: "Transform your home with our interior design services. See our portfolio and book a consultation.",
    icon: Paintbrush,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    features: [
      "Complete interior design",
      "Custom furniture selection",
      "Color scheme consultation",
      "Space optimization"
    ],
    portfolioImages: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  }
];

const ServiceDetailsDialog = ({ service, isOpen, onClose }) => {
  const Icon = service.icon;
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Icon className={`w-6 h-6 ${service.color}`} />
              <h2 className="text-xl font-semibold">{service.title}</h2>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.portfolioImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${service.title} example ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
            <div>
              <h4 className="font-semibold mb-2">Service Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecializedServices = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert technical and design services to enhance your property with professional installations and custom solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specializedServices.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="group hover:shadow-lg transition-shadow rounded-lg border">
              <div className={`${service.bgColor} p-6 rounded-t-lg`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${service.bgColor} ${service.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 border-t">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedService && (
        <ServiceDetailsDialog 
          service={selectedService} 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Need Expert Services?</h3>
            <p className="text-orange-100 max-w-xl">
              Our team of certified professionals is ready to help with your specialized service needs.
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecializedServices;