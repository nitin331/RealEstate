import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const properties = [
  {
    id: 1, // Unique ID
    image: '/images/pc1.png',
    title: "The Willows of Plainview",
    location: "Pune, Maharashtra",
    price: 30000,
    beds: 2,
    baths: 1,
    size: "1200",
  },
  {
    id: 2, // Unique ID
    image: '/images/pc2.png',
    title: "1BHK SKY Songbirds",
    location: "Opposite Symbiosis College, near Pune airport",
    price: 35000,
    beds: 1,
    baths: 1,
    size: "900",
  },
  {
    id: 3, // Unique ID
    image: '/images/pc3.png',
    title: "Paranjape Blue Ridge",
    location: "Wakad, Pune, Maharashtra",
    price: 35800,
    beds: 2,
    baths: 2,
    size: "1300",
  },
  {
    id: 4, // Unique ID
    image: '/images/pc4.png',
    title: "Kolte Patil Life Republic",
    location: "Hinjewadi, Pimpri-Chinchwad, Maharashtra",
    price: 40000,
    beds: 3,
    baths: 2,
    size: "1500",
  },
  {
    id: 5, // Unique ID
    image: '/images/pc5.png',
    title: "Kolte Patil 24K Glamore",
    location: "NIBM Road, Pune, Maharashtra",
    price: 42000,
    beds: 1,
    baths: 1,
    size: "1000",
  },
  {
    id: 6, // Unique ID
    image: '/images/pc6.png',
    title: "The Willows of Plainview",
    location: "Kothrud, Pune, Maharashtra",
    price: 46000,
    beds: 1,
    baths: 1,
    size: "850",
  },
  {
    id: 7, // Unique ID
    image: '/images/pc7.png',
    title: "Sai Nirvana",
    location: "Baner, Pune, Maharashtra",
    price: 48000,
    beds: 3,
    baths: 2,
    size: "1600",
  },
  {
    id: 8, // Unique ID
    image: '/images/pc8.png',
    title: "EON Homes",
    location: "Hinjewadi, Pune, Maharashtra",
    price: 28000,
    beds: 2,
    baths: 2,
    size: "1100",
  },
  {
    id: 9, // Unique ID
    image: '/images/pc5.png',
    title: "Ganga Legend",
    location: "Bavdhan, Pune, Maharashtra",
    price: 33000,
    beds: 2,
    baths: 2,
    size: "1200",
  },
  {
    id: 10, // Unique ID
    image: '/images/pc4.png',
    title: "Kumar Megapolis",
    location: "Hinjewadi, Pune, Maharashtra",
    price: 29000,
    beds: 2,
    baths: 2,
    size: "1250",
  },
  {
    id: 11, // Unique ID
    image: '/images/pc3.png',
    title: "Park Street",
    location: "Wakad, Pune, Maharashtra",
    price: 31000,
    beds: 2,
    baths: 1,
    size: "1150",
  },
  {
    id: 12, // Unique ID
    image: '/images/pc2.png',
    title: "Forest Trails",
    location: "Bhugaon, Pune, Maharashtra",
    price: 34000,
    beds: 3,
    baths: 2,
    size: "1400",
  },
];

function PropertyCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const navigate = useNavigate(); // Use useNavigate hook

  const [priceRange, setPriceRange] = useState(50000); // Initial maximum price
  const [depositRange, setDepositRange] = useState(0); // Initial maximum deposit

  // Get current properties
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

  // Filter properties based on price and deposit range
  const filteredProperties = properties.filter(
    (property) => property.price <= priceRange
  );

  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle property click
  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`); // Navigate to detail page with property ID
  };

  // Handle price range change
  const handlePriceRangeChange = (e) => {
    setPriceRange(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page on filter change
  };

  // Handle deposit range change
  const handleDepositRangeChange = (e) => {
    setDepositRange(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page on filter change
  };

  return (
    <div>
      <div className="container mx-auto p-4 flex">
        {/* Sidebar */}
        <div className="hidden md:block w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Property Listing</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Search</h3>
            <input type="text" placeholder="Search Keywords" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Location</h3>
            <input type="text" placeholder="Search Location" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Type</h3>
            <select className="w-full p-2 border rounded-lg">
              <option>All</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Condo</option>
            </select>
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Rooms</h3>
            <select className="w-full p-2 border rounded-lg">
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Bathrooms</h3>
            <select className="w-full p-2 border rounded-lg">
              <option>All</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Bedrooms</h3>
            <select className="w-full p-2 border rounded-lg">
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Price Range</h3>
            <input 
              type="range" 
              min="28000" 
              max="50000" 
              value={priceRange} 
              onChange={handlePriceRangeChange} 
              className="w-full"
            />
            <p>Up to ₹{priceRange} per month</p>
          </div>

          {/* Security Deposit Filter */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Security Deposit</h3>
            <input 
              type="range" 
              min="0" 
              max="40000" 
              value={depositRange} 
              onChange={handleDepositRangeChange} 
              className="w-full"
            />
            <p>Up to ₹{depositRange}</p>
          </div>

          <div>
            <button className="w-full bg-red-500 text-white p-2 rounded-lg">Find Properties</button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="w-3/4 ml-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProperties.map((property) => (
              <div
                key={property.id}
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() => handlePropertyClick(property.id)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-xl font-semibold mt-4">{property.title}</h2>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-red-500 font-bold mt-2">₹{property.price} per month</p>
                <div className="flex items-center mt-4">
                  <span>{property.beds} Beds</span>
                  <span className="mx-2">|</span>
                  <span>{property.baths} Baths</span>
                  <span className="mx-2">|</span>
                  <span>{property.size} Sq Ft</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-end sm:justify-center">
  {Array.from({ length: Math.ceil(filteredProperties.length / propertiesPerPage) }).map(
    (_, index) => (
      <button
        key={index}
        onClick={() => paginate(index + 1)}
        className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
      >
        {index + 1}
      </button>
    )
  )}
</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyCard;
