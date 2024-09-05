import React, { useState } from 'react';

const Banner = () => {
  const [selectedOption, setSelectedOption] = useState('rent');  // Initially selected option

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: 'url(https://png.pngtree.com/background/20231016/original/pngtree-new-homeowners-couple-stands-proudly-in-front-of-their-dream-house-picture-image_5575667.jpg)' }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Find the Perfect Place to Call Home</h1>
        <p className="text-white text-sm md:text-lg mb-8 max-w-md md:max-w-2xl">
          Explore a wide range of properties in the most desirable locations. Whether you’re looking for a cozy apartment,
          a spacious family home, or a luxurious estate, we have listings to suit every lifestyle and budget.
        </p>
        <div className="flex flex-row justify-between space-x-2 md:space-x-4 mb-8 w-full md:w-auto max-w-sm">
          <button
            className={`w-1/3 md:w-auto py-2 px-4 rounded ${selectedOption === 'rent' ? 'bg-red-600 text-white' : 'bg-white text-gray-800'}`}
            onClick={() => handleClick('rent')}
          >
            Rent
          </button>
          <button
            className={`w-1/3 md:w-auto py-2 px-4 rounded ${selectedOption === 'buy' ? 'bg-red-600 text-white' : 'bg-white text-gray-800'}`}
            onClick={() => handleClick('buy')}
          >
            Buy
          </button>
          <button
            className={`w-1/3 md:w-auto py-2 px-4 rounded ${selectedOption === 'sell' ? 'bg-red-600 text-white' : 'bg-white text-gray-800'}`}
            onClick={() => handleClick('sell')}
          >
            Sell
          </button>
        </div>
        <div className="bg-white p-4 rounded flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-3/4 max-w-full md:max-w-3xl">
          <input className="flex-1 p-2 border border-gray-300 rounded" type="text" placeholder="Search Keyword" />
          <input className="flex-1 p-2 border border-gray-300 rounded" type="text" placeholder="Search Location" />
          <select className="p-2 border border-gray-300 rounded">
            <option>All</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Land</option>
          </select>
          <button className="bg-red-600 text-white py-2 px-4 rounded">Find Property</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
