import React, { useState } from 'react';
import { Home, Paintbrush, MapPin, Search } from 'lucide-react';

// Custom Card Components
const Card = ({ children, className = '' }) => (
  <div className={"bg-white rounded-lg shadow ${className}"}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 pb-3">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-3">{children}</div>
);

// Custom Tab Components
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-4 text-lg flex-1 border-b-2 transition-colors
      ${active ? 'border-purple-500 text-purple-500' : 'border-transparent text-gray-600 hover:text-purple-400'}`}
  >
    {children}
  </button>
);

// Custom Input Component
const Input = ({ className = '', ...props }) => (
  <input
    className={"w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}"}
    {...props}
  />
);

const BlogResourceCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [extended, setExtension] = useState(false);
  const [activeTab, setActiveTab] = useState('homeSetup');

  const articles = {
    homeSetup: [
      {
        title: "Essential Moving Day Checklist",
        excerpt: "Make your move smooth and stress-free with our comprehensive checklist. Make your move smooth and stress-free with our comprehensive checklist. Make your move smooth and stress-free with our comprehensive checklist.",
        readTime: "5 min read",
        category: "Moving Tips",
        image: "./src/assets/images/Essential Moving Day Checklist1.jpeg"
      },
      {
        title: "Investment Property Guide 2024",
        excerpt: "Learn the essentials of real estate investment in Ethiopia's growing market.",
        readTime: "8 min read",
        category: "Investment",
        image: "./src/assets/images/Investment Property Guide 2024.jpeg"
      },
      {
        title: "Seasonal Home Maintenance Guide",
        excerpt: "Keep your home in top condition year-round with these maintenance tips.",
        readTime: "6 min read",
        category: "Maintenance",
        image: "./src/assets/images/Seasonal Home Maintenance Guide.jpeg"
      }
    ],
    interiorDesign: [
      {
        title: "Ethiopian Contemporary Design Trends",
        excerpt: "Blend traditional Ethiopian elements with modern design aesthetics.",
        readTime: "7 min read",
        category: "Trends",
        image: "./src/assets/images/Ethiopian Contemporary Design Trends.jpeg"
      },
      {
        title: "Small Space Organization Solutions",
        excerpt: "Maximize your living space with these clever design and storage ideas.",
        readTime: "5 min read",
        category: "Organization",
        image: "./src/assets/images/Small Space Organization Solutions.jpeg"
      },
      {
        title: "Color Schemes for Every Room",
        excerpt: "Expert color combination advice from our Arhibu Homes design team.",
        readTime: "6 min read",
        category: "Color Theory",
        image: "./src/assets/images/Color Schemes for Every Room.jpeg"
      }
    ],
    localGuides: [
      {
        title: "Bole Area Neighborhood Guide",
        excerpt: "Discover the amenities and lifestyle of Addis Ababa's bustling Bole district.",
        readTime: "10 min read",
        category: "Neighborhood Guide",
        image: "./src/assets/images/Bole Area Neighborhood Guide.jpeg"
      },
      {
        title: "Best Schools in Addis Ababa",
        excerpt: "Comprehensive guide to top educational institutions in the capital.",
        readTime: "8 min read",
        category: "Education",
        image: "./src/assets/images/Best Schools in Addis Ababa.jpeg"
      },
      {
        title: "Shopping and Entertainment Guide",
        excerpt: "Your complete guide to shopping centers and entertainment spots.",
        readTime: "7 min read",
        category: "Lifestyle",
        image: "./src/assets/images/Shopping and Entertainment Guide.jpeg"
      }
    ]
  };

  const filterArticles = (articles) => {
    return articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const ArticleCard = ({ article }) => {
    const [isExtended, setIsExtended] = useState(false);
  
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-purple-600 font-medium">{article.category}</span>
            <span className="text-sm text-gray-500">{article.readTime}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
          <div className="space-y-4">
            <div className={`relative ${isExtended ? 'max-h-none' : 'max-h-10 overflow-hidden'}`}>
              <p className="text-gray-600">{article.excerpt}</p>
              {!isExtended && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>
            <button
              className="mt-4 flex items-center gap-1 text-purple-600 hover:text-purple-800 font-medium transition-colors"
              onClick={() => setIsExtended(!isExtended)}
            >
              {isExtended ? (
                'Read Less'
              ) : (
                'Read More →'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const ArticleGrid = ({ articles }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterArticles(articles).map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog & Resource Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert advice, design inspiration, and local insights to help you make the most of your home and community.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search articles..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="w-full">
        <div className="grid grid-cols-3 mb-8 border-b">
          <TabButton 
            active={activeTab === 'homeSetup'} 
            onClick={() => setActiveTab('homeSetup')}
          >
            <Home className="w-4 h-4 mr-2" />
            Home Setup Tips
          </TabButton>
          <TabButton 
            active={activeTab === 'interiorDesign'} 
            onClick={() => setActiveTab('interiorDesign')}
          >
            <Paintbrush className="w-4 h-4 mr-2" />
            Interior Design Ideas
          </TabButton>
          <TabButton 
            active={activeTab === 'localGuides'} 
            onClick={() => setActiveTab('localGuides')}
          >
            <MapPin className="w-4 h-4 mr-2" />
            Local Area Guides
          </TabButton>
        </div>

        <div>
          {activeTab === 'homeSetup' && <ArticleGrid articles={articles.homeSetup} />}
          {activeTab === 'interiorDesign' && <ArticleGrid articles={articles.interiorDesign} />}
          {activeTab === 'localGuides' && <ArticleGrid articles={articles.localGuides} />}
        </div>
      </div>
    </div>
  );
};

export default BlogResourceCenter;