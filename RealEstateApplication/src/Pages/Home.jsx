import React, { useState, useEffect } from 'react';
import { Search, Home, Phone, MapPin, Bed, Bath, Square } from 'lucide-react';

const ALL_LISTINGS = [
  {
    id: 1,
    title: "Luxury Villa in Bole",
    price: 45000,
    location: "Bole, Addis Ababa",
    type: "rent",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    image: "/src/assets/images/image30.jpg",
    description: "Modern luxury villa with garden",
    propertyType: "villa"
  },
  {
    id: 2,
    title: "Modern Apartment in CMC",
    price: 4500000,
    location: "CMC, Addis Ababa",
    type: "sale",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "/src/assets/images/image31.jpg",
    description: "Newly built apartment with parking",
    propertyType: "apartment"
  },
  {
    id: 3,
    title: "Commercial Space in Kasanchis",
    price: 65000,
    location: "Kasanchis, Addis Ababa",
    type: "rent",
    bedrooms: 0,
    bathrooms: 2,
    area: 250,
    image: "/src/assets/images/image32.jpg",
    description: "Prime location commercial space",
    propertyType: "commercial"
  },
  {
    id: 4,
    title: "Family Home in Summit",
    price: 8500000,
    location: "Summit, Addis Ababa",
    type: "sale",
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    image: "/src/assets/images/image33.jpg",
    description: "Spacious family home with garden",
    propertyType: "house"
  },
  {
    id: 5,
    title: "Penthouse in Sarbet",
    price: 85000,
    location: "Sarbet, Addis Ababa",
    type: "rent",
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    image: "/src/assets/images/image34.jpg",
    description: "Luxurious penthouse with city view",
    propertyType: "apartment"
  },
  {
    id: 6,
    title: "Office Space in Mexico",
    price: 5800000,
    location: "Mexico, Addis Ababa",
    type: "sale",
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    image: "/src/assets/images/image35.jpg",
    description: "Modern office space in prime location",
    propertyType: "commercial"
  }
];

const SearchFilters = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [propertyType, setPropertyType] = useState("");

  useEffect(() => {
    onFilterChange({ minPrice, maxPrice, bedrooms, propertyType });
  }, [minPrice, maxPrice, bedrooms, propertyType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">All Property Types</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="house">House</option>
        <option value="commercial">Commercial</option>
      </select>
      <input
        type="number"
        placeholder="Min Price (ETB)"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="p-2 border rounded-md"
      />
      <input
        type="number"
        placeholder="Max Price (ETB)"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-2 border rounded-md"
      />
      <select
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">Any Bedrooms</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
      </select>
    </div>
  );
};

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
    <img 
      src={property.image} 
      alt={property.title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
      <p className="text-blue-600 font-bold mb-2">
        {property.price.toLocaleString()} ETB
        {property.type === 'rent' ? '/month' : ''}
      </p>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        {property.location}
      </div>
      <div className="flex justify-between mb-4 text-gray-600">
        <span className="flex items-center">
          <Bed className="w-4 h-4 mr-1" />
          {property.bedrooms} beds
        </span>
        <span className="flex items-center">
          <Bath className="w-4 h-4 mr-1" />
          {property.bathrooms} baths
        </span>
        <span className="flex items-center">
          <Square className="w-4 h-4 mr-1" />
          {property.area} m²
        </span>
      </div>
      <button 
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        onClick={() => alert(property.title)}
      >
        View Details
      </button>
    </div>
  </div>
);

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('');
  const [filters, setFilters] = useState({});
  const [filteredListings, setFilteredListings] = useState(ALL_LISTINGS);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = [...ALL_LISTINGS];
    
    if (searchType) {
      filtered = filtered.filter(listing => listing.type === searchType);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase().includes(query) ||
        listing.title.toLowerCase().includes(query)
      );
    }
    
    if (filters.propertyType) {
      filtered = filtered.filter(listing => listing.propertyType === filters.propertyType);
    }
    
    if (filters.minPrice) {
      filtered = filtered.filter(listing => listing.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(listing => listing.price <= parseInt(filters.maxPrice));
    }
    
    if (filters.bedrooms) {
      filtered = filtered.filter(listing => listing.bedrooms >= parseInt(filters.bedrooms));
    }
    
    setFilteredListings(filtered);
  }, [searchQuery, searchType, filters]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-96 bg-transparent">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/image.jpg"
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Your Complete Real Estate and Home Services Partner
          </h1>
          <p className="text-xl text-center mb-8">
            Find your dream property in Addis Ababa with Arhibu Homes
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto -mt-8 relative z-20 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="p-3 border rounded-md flex-1"
            >
              <option value="">All Types</option>
              <option value="rent">Rent</option>
              <option value="sale">Buy</option>
            </select>
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search by location or property type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border rounded-md pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200"
            >
              Filters
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>
          
          {showFilters && (
            <SearchFilters onFilterChange={setFilters} />
          )}
        </div>
      </div>

      {/* Featured Listings */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Featured Properties 
          <span className="text-gray-500 text-lg ml-4">
            ({filteredListings.length} properties found)
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing) => (
            <PropertyCard key={listing.id} property={listing} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div 
        className="bg-gray-100 py-16 px-4 bg-cover bg-center"
        style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/images/image36.jpg")'
         }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Find Your Perfect Home?</h2>
          <p className="text-gray-200 mb-8">
            Let us help you navigate your next real estate journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => alert('Browse Properties clicked')}
            >
              <Home className="w-5 h-5" />
              Browse Properties
            </button>
            <button 
              className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
              onClick={() => alert('Contact form would open')}
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;