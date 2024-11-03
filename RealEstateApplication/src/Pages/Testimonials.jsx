import React, { useState } from 'react';
import { Quote, Building, Star } from 'lucide-react';

// Import the default profile pictures from the assets folder
import defaultProfilePicture from '../assets/girlphoto.jpg';
import defaultProfilePicture1 from '../assets/boyphoto.jpg';
import defaultProfilePicture2 from '../assets/girlphoto1.jpg';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
    {children}
  </div>
);

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-4 text-lg flex-1 border-b-2 transition-colors
      ${active ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-600 hover:text-blue-400'}`}
  >
    {children}
  </button>
);

const TestimonialsPage = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  // Map of clients to their respective static profile photos
  const profilePhotos = {
    "Sarah Johnson": defaultProfilePicture,
    "Michael Chen": defaultProfilePicture1,
    "Emma Davis": defaultProfilePicture2,
  };

  const testimonials = [
    {
      client: "Sarah Johnson",
      service: "Home Purchase",
      text: "Working with this team made buying our first home a breeze. They were professional, attentive, and guided us through every step of the process.",
      rating: 5
    },
    {
      client: "Michael Chen",
      service: "Property Rental",
      text: "Found the perfect apartment in just two weeks. The team understood exactly what I was looking for and made the rental process seamless.",
      rating: 5
    },
    {
      client: "Emma Davis",
      service: "Interior Design",
      text: "The interior design service transformed our space completely. The attention to detail and creativity exceeded our expectations.",
      rating: 5
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Testimonials & Success Stories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover what our clients say about their experiences and explore our successful projects.
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 mb-8 border-b">
          <TabButton 
            active={activeTab === 'testimonials'} 
            onClick={() => setActiveTab('testimonials')}
          >
            <Quote className="w-4 h-4 mr-2" />
            Client Testimonials
          </TabButton>
          <TabButton 
            active={activeTab === 'casestudies'} 
            onClick={() => setActiveTab('casestudies')}
          >
            <Building className="w-4 h-4 mr-2" />
            Case Studies
          </TabButton>
        </div>

        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    {/* Display the static profile picture */}
                    <div className="flex items-center">
                      <img
                        src={profilePhotos[testimonial.client]}
                        alt={`${testimonial.client} profile`}
                        className="w-10 h-10 rounded-full mr-2 object-cover"
                      />
                      <span className="font-bold">{testimonial.client}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'casestudies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Code for case studies goes here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;