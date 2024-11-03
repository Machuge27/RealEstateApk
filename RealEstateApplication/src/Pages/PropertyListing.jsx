import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Filter } from 'lucide-react';

// Simple Select Component
const Select = ({ value, onChange, placeholder, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      padding: '8px 12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      backgroundColor: '#fff',
      width: '100%'
    }}
  >
    <option value="" disabled>
      {placeholder}
    </option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

// Simple Card Component
const Card = ({ children, className = '', onClick = null }) => (
  <div 
    onClick={onClick}
    style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
      padding: '16px',
      margin: '8px 0',
      transition: 'box-shadow 0.3s ease'
    }}
    className={className}
  >
    {children}
  </div>
);

// Simple Checkbox Component
const Checkbox = ({ id, checked, onChange, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      style={{ cursor: 'pointer' }}
    />
    <label htmlFor={id} style={{ fontSize: '14px', cursor: 'pointer' }}>
      {label}
    </label>
  </div>
);

// Enhanced dummy data with more amenities
const dummyProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    location: "Downtown",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    size: 1200,
    amenities: ["Pool", "Gym", "Parking", "Security", "Elevator"],
    coordinates: { lat: 40.7128, lng: -74.0060 },
    description: "Beautiful modern apartment in the heart of downtown.",
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: 750000,
    location: "Suburbs",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    size: 2500,
    amenities: ["Garden", "Garage", "Fireplace", "Central AC", "Smart Home"],
    coordinates: { lat: 40.7300, lng: -74.0100 },
    description: "Spacious family home with a beautiful garden.",
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    price: 1200000,
    location: "Waterfront",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3.5,
    size: 3000,
    amenities: ["Terrace", "Private Elevator", "Wine Cellar", "Pool", "Security"],
    coordinates: { lat: 40.7200, lng: -74.0200 },
    description: "Stunning penthouse with panoramic city views.",
  },
  {
    id: 4,
    title: "Cozy Studio Apartment",
    price: 280000,
    location: "Downtown",
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    size: 500,
    amenities: ["Gym", "Parking", "Laundry"],
    coordinates: { lat: 40.7150, lng: -74.0080 },
    description: "Perfect starter home in a prime location.",
  },
  {
    id: 5,
    title: "Waterfront Condo",
    price: 850000,
    location: "Waterfront",
    type: "Condo",
    bedrooms: 3,
    bathrooms: 2,
    size: 1800,
    amenities: ["Pool", "Gym", "Security", "Parking", "Smart Home"],
    coordinates: { lat: 40.7220, lng: -74.0180 },
    description: "Luxurious waterfront living with stunning views.",
  }
];

// Price ranges for filter
const priceRanges = [
  { label: "Under $300,000", min: 0, max: 300000 },
  { label: "$300,000 - $500,000", min: 300000, max: 500000 },
  { label: "$500,000 - $750,000", min: 500000, max: 750000 },
  { label: "$750,000 - $1,000,000", min: 750000, max: 1000000 },
  { label: "Over $1,000,000", min: 1000000, max: Infinity }
];

// All available amenities (collected from properties)
const allAmenities = Array.from(
  new Set(dummyProperties.flatMap(property => property.amenities))
).sort();

const PropertyListings = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties] = useState(dummyProperties);
  const [filters, setFilters] = useState({
    priceRange: null,
    location: "all",
    propertyType: "all",
    amenities: []
  });

  // Filter properties based on current filters
  const filteredProperties = properties.filter(property => {
    const priceMatch = filters.priceRange 
      ? property.price >= filters.priceRange.min && property.price <= filters.priceRange.max
      : true;
    
    const locationMatch = filters.location === "all" || property.location === filters.location;
    const typeMatch = filters.propertyType === "all" || property.type === filters.propertyType;
    
    const amenitiesMatch = filters.amenities.length === 0 || 
      filters.amenities.every(amenity => property.amenities.includes(amenity));

    return priceMatch && locationMatch && typeMatch && amenitiesMatch;
  });

  // Filter Panel Component
  const FilterPanel = () => (
    <Card className="mb-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Filter className="w-5 h-5" />
        Filters
      </h2>
      <div className="space-y-6">
        {/* Price Range Filter */}
        <div>
          <label className="block mb-3 text-sm font-medium">Price Range</label>
          <div className="space-y-2">
            {priceRanges.map((range, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2"
                  checked={filters.priceRange === range}
                  onChange={() => setFilters({...filters, priceRange: range})}
                />
                <span className="text-sm">{range.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block mb-2 text-sm font-medium">Location</label>
          <Select
            value={filters.location}
            onChange={(value) => setFilters({...filters, location: value})}
            placeholder="Select location"
            options={[
              { value: 'all', label: 'All Locations' },
              { value: 'Downtown', label: 'Downtown' },
              { value: 'Suburbs', label: 'Suburbs' },
              { value: 'Waterfront', label: 'Waterfront' }
            ]}
          />
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="block mb-2 text-sm font-medium">Property Type</label>
          <Select
            value={filters.propertyType}
            onChange={(value) => setFilters({...filters, propertyType: value})}
            placeholder="Select type"
            options={[
              { value: 'all', label: 'All Types' },
              { value: 'Apartment', label: 'Apartment' },
              { value: 'House', label: 'House' },
              { value: 'Penthouse', label: 'Penthouse' },
              { value: 'Studio', label: 'Studio' },
              { value: 'Condo', label: 'Condo' }
            ]}
          />
        </div>

        {/* Amenities Filter */}
        <div>
          <label className="block mb-3 text-sm font-medium">Amenities</label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {allAmenities.map((amenity) => (
              <Checkbox
                key={amenity}
                id={amenity}
                checked={filters.amenities.includes(amenity)}
                onChange={(checked) => {
                  setFilters(prev => ({
                    ...prev,
                    amenities: checked
                      ? [...prev.amenities, amenity]
                      : prev.amenities.filter(a => a !== amenity)
                  }));
                }}
                label={amenity}
              />
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={() => setFilters({
            priceRange: null,
            location: "all",
            propertyType: "all",
            amenities: []
          })}
          className="w-full py-2 mt-4 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Clear All Filters
        </button>
      </div>
    </Card>
  );

  // Property Card Component
  const PropertyCard = ({ property }) => (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => setSelectedProperty(property)}
    >
      <img
        src="/api/placeholder/400/300"
        alt={property.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{property.title}</h3>
        <div className="flex items-center text-gray-600">
          <DollarSign className="w-4 h-4 mr-1" />
          <span>${property.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Home className="w-4 h-4 mr-1" />
          <span>{property.type}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 rounded-full"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 rounded-full">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Card>
  );

  // Property Details Component
  const PropertyDetails = ({ property }) => (
    <Card>
      <div>
        <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
        <p className="text-gray-600">${property.price.toLocaleString()}</p>
      </div>
      <img
        src="/api/placeholder/800/400"
        alt={property.title}
        className="w-full h-64 object-cover rounded-lg my-4"
      />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Details</h4>
            <ul className="mt-2 space-y-1">
              <li>Bedrooms: {property.bedrooms}</li>
              <li>Bathrooms: {property.bathrooms}</li>
              <li>Size: {property.size} sq ft</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Amenities</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {property.amenities.map((amenity, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Description</h4>
          <p className="mt-2">{property.description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Location</h4>
          <div className="mt-2 bg-gray-100 h-48 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Would Display Here</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Filter Panel */}
        <div className="md:col-span-3">
          <FilterPanel />
        </div>

        {/* Main Content */}
        <div className="md:col-span-9">
          {selectedProperty ? (
            <>
              <button
                onClick={() => setSelectedProperty(null)}
                className="mb-4 text-blue-600 hover:underline"
              >
                ← Back to listings
              </button>
              <PropertyDetails property={selectedProperty} />
            </>
          ) : (
            <>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">
                  {filteredProperties.length} Properties Found
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;