import React from 'react';
import { Home, Calendar, Phone, ArrowRight } from 'lucide-react';

// Custom Button Component
const Button = ({ children, className, size = 'md', ...props }) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Card Component
const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CTABanner = ({ type = 'primary' }) => {
  const bannerTypes = {
    primary: {
      title: "Find Your Dream Home Today",
      description: "Browse our exclusive listings and schedule a viewing at your convenience.",
      icon: <Home className="w-6 h-6" />,
      buttonText: "Schedule Property Tour",
      bgColorClass: "bg-gradient-to-r from-purple-600 to-purple-800",
      secondaryAction: "or call us at +251 11 234 5678"
    },
    consultation: {
      title: "Get Expert Home Services",
      description: "From interior design to property management, our team is here to help.",
      icon: <Phone className="w-6 h-6" />,
      buttonText: "Free Consultation",
      bgColorClass: "bg-gradient-to-r from-blue-600 to-blue-800",
      secondaryAction: "No obligation consultation"
    },
    appointment: {
      title: "Ready to Take the Next Step?",
      description: "Schedule a meeting with our real estate experts to discuss your needs.",
      icon: <Calendar className="w-6 h-6" />,
      buttonText: "Book Appointment",
      bgColorClass: "bg-gradient-to-r from-indigo-600 to-indigo-800",
      secondaryAction: "Available 7 days a week"
    }
  };

  const selectedBanner = bannerTypes[type];

  // Floating CTA Banner Component
  const FloatingCTA = () => (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-700 text-white">
        <Phone className="w-5 h-5 mr-2" />
        Contact Us
      </Button>
    </div>
  );

  // Hero-style CTA Banner
  const HeroCTA = () => (
    <div className={`relative overflow-hidden rounded-2xl ${selectedBanner.bgColorClass} text-white`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative px-6 py-12 md:py-16 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {selectedBanner.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {selectedBanner.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {selectedBanner.description}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              {selectedBanner.buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <span className="text-sm opacity-75">
              {selectedBanner.secondaryAction}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Inline CTA Card
  const InlineCTA = () => (
    <Card className="bg-gray-50 border-0 shadow-sm">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{selectedBanner.title}</h3>
            <p className="text-gray-600">{selectedBanner.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              {selectedBanner.buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-12 max-w-7xl mx-auto p-6">
      {/* Hero CTA */}
      <section>
        <h2 className="sr-only">Call to Action</h2>
        <HeroCTA />
      </section>

      {/* Inline CTA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InlineCTA />
        <InlineCTA />
      </section>

      {/* Floating CTA for mobile */}
      <FloatingCTA />
    </div>
  );
};

export default CTABanner;