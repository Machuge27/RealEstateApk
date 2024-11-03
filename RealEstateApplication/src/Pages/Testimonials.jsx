import React, { useState } from 'react';
import { Quote, Building, Star } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className="{bg-white rounded-lg shadow p-6 ${className}}">
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

  const caseStudies = [
    {
      title: "Luxury Apartment Complex Renovation",
      description: "Complete renovation of a 50-unit apartment complex in downtown area",
      results: [
        "Increased property value by 40%",
        "Reduced energy consumption by 30%",
        "Full occupancy within 2 months"
      ],
      duration: "8 months"
    },
    {
      title: "Modern Family Home Design",
      description: "Full interior design project for a 4-bedroom family home",
      results: [
        "Custom furniture and fixtures throughout",
        "Smart home integration",
        "Sold above market value"
      ],
      duration: "3 months"
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
                    <span className="font-bold">{testimonial.client}</span>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
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
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-500">Duration: {study.duration}</p>
                </div>
                <div>
                  <p className="mb-4 text-gray-600">{study.description}</p>
                  <h4 className="font-semibold mb-2">Key Results:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;