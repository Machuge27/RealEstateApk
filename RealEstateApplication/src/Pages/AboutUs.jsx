import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Main Section */}
      <div className="relative">
        {/* Visual connector lines using pseudo-elements via className */}
        <div className="absolute left-48 top-24 w-32 h-px bg-yellow-400"></div>
        <div className="absolute left-48 top-56 w-32 h-px bg-yellow-400"></div>
        <div className="absolute left-48 top-88 w-32 h-px bg-yellow-400"></div>
        <div className="absolute left-48 top-24 w-px h-64 bg-yellow-400"></div>

        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-left ml-24">About Us</h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-16 ml-64">
          {/* Mission & Vision */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
            <p className="text-lg leading-relaxed text-gray-700 italic">
              "At Arhibu Homes, our mission is to provide seamless real estate, moving, and home 
              services in Addis Ababa. We're committed to quality and client satisfaction."
            </p>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg leading-relaxed text-gray-700 italic">
              "Meet our team of experienced real estate agents, interior designers, and service 
              managers dedicated to making your home experience exceptional."
            </p>
          </div>

          {/* Community Engagement */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            <p className="text-lg leading-relaxed text-gray-700 italic">
              "Proudly supporting local projects and partnering with businesses in our community."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;