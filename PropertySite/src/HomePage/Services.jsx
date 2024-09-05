import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="text-center text-red-500 mb-4">OUR SERVICES</div>
      <h2 className="text-center text-2xl font-bold mb-8">What We Do?</h2>
      <div className="flex flex-wrap justify-center space-x-4 lg:space-x-4 md:space-x-2 sm:space-x-0">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs w-full sm:w-80 md:w-60 lg:w-64 text-center mx-2 mb-4">
          <div className="mb-4">
            <img src="/images/buy.png" alt="Buy A New Home" className="mx-auto h-16 sm:h-20"/>
          </div>
          <h3 className="text-xl font-semibold mb-2">Buy A New Home</h3>
          <p className="text-gray-600 mb-4">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs w-full sm:w-80 md:w-60 lg:w-64 text-center mx-2 mb-4">
          <div className="mb-4">
            <img src="/images/rent.png" alt="Rent A Home" className="mx-auto h-16 sm:h-20"/>
          </div>
          <h3 className="text-xl font-semibold mb-2">Rent A Home</h3>
          <p className="text-gray-600 mb-4">Discover your perfect rental effortlessly. Explore a variety of listings tailored precisely to suit your unique lifestyle needs.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Learn More</button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs w-full sm:w-80 md:w-60 lg:w-64 text-center mx-2 mb-4">
          <div className="mb-4">
            <img src="/images/sale.png" alt="Sell A Home" className="mx-auto h-16 sm:h-20"/>
          </div>
          <h3 className="text-xl font-semibold mb-2">Sell A Home</h3>
          <p className="text-gray-600 mb-4">Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
