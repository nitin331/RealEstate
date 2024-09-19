import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1, // Unique id
    price: '₹ 36000 per month',
    title: 'The Willows of Pashlore',
    location: 'Pashan gaon | Apartment, Kothrud',
    agent: 'Ajit Kumar',
    time: '1 Days ago',
    image: '/images/1.png',
  },
  {
    id: 2,
    price: '₹ 26000 per month',
    title: '1BHK Skyi Songbirds',
    location: 'Opposite Symbiosis College, Pune',
    agent: 'Vishal Pandit',
    time: '1 Days ago',
    image: '/images/2.png',
  },
  {
    id: 3,
    price: '₹ 30000 per month',
    title: 'Paranjape Blue Ridge',
    location: 'Wakad, Pune, Maharashtra',
    agent: 'Anil Pore',
    time: '1 Days ago',
    image: '/images/3.png',
  },
   {
      id: 4,
      price: '₹ 40000 per month',
      title: 'Kolte Patil Life Republic',
      location: 'Hinjewadi, Pimpri Chinchwad, Maharashtra',
      agent: 'Vidya Joshi',
      time: '1 Days ago',
      image: '/images/4.png',
    },
    {
      id: 5,
      price: '₹ 31000 per month',
      title: 'Amarora Trendy Homes',
      location: 'Near Amarora Mall, Hadapsar, Pune',
      agent: 'Hemant Shrivastav',
      time: '2 Days ago',
      image: '/images/5.png',
    },
    {
      id: 6,
      price: '₹ 27000 per month',
      title: 'Kolte-Patil 24K Glamore',
      location: 'No. 405, NIBM, Pune, Maharashtra',
      agent: 'Vishwas Dubey',
      time: '2 Days ago',
      image: '/images/6.png', 
    },
    {
      id: 7,
      price: '₹ 28000 per month',
      title: 'SP Infinity, Pune',
      location: 'Baner, Pune 411045, Maharashtra',
      agent: 'Dipak Khanna',
      time: '2 Days ago',
      image: '/images/7.png', 
    },
    {
      id: 8,
      price: '₹ 26000 per month',
      title: 'Todkar Township, Sasane Nagar',
      location: 'Hadapsar, Pune 411028, Maharashtra',
      agent: 'Swati Sharma',
      time: '2 Days ago',
      image: '/images/8.png', 
    },
    {
      id: 9,
      price: '₹ 26000 per month',
      title: 'Malpani Greens, Wakad',
      location: 'Wakad, Pune 411057, Maharashtra',
      agent: 'Devika Shah',
      time: '2 Days ago',
      image:'/images/9.png',
    },
];

const PropertyList = () => {
  const [activeButton, setActiveButton] = useState('All');

  const buttons = [
    { label: 'View All', value: 'All' },
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Villa', value: 'Villa' },
    { label: 'Studio', value: 'Studio' },
    { label: 'Home', value: 'Home' },
    { label: 'Office', value: 'Office' },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-8">Recommended For You</h2>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center mb-8">
          {buttons.map((button) => (
            <button
              key={button.value}
              onClick={() => setActiveButton(button.value)}
              className={`px-4 py-2 rounded mx-2 mb-2 ${
                activeButton === button.value ? 'bg-red-600 text-white' : 'bg-gray-200'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Property Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {properties.map((property) => (
              <Link to={`/property/${property.id}`} key={property.id}>
                <div className="bg-white p-3 rounded shadow-sm w-full sm:w-full md:w-80 lg:w-80 h-auto sm:h-80 md:h-96 lg:h-96">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-40 sm:h-48 md:h-48 lg:h-48 object-cover mb-3 rounded"
                  />
                  <div className="text-red-600 font-bold mb-1">{property.price}</div>
                  <div className="text-lg font-semibold mb-1">{property.title}</div>
                  <div className="text-gray-500 mb-1">{property.location}</div>
                  <div className="flex items-center justify-between text-gray-500 text-sm mt-3">
                    <div>{property.agent}</div>
                    <div>{property.time}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
