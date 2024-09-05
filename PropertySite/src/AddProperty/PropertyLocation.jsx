import React from 'react';

const PropertyLocation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mr-auto mt-14">
      <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
        <h2 className="text-xl font-semibold">Property Location</h2>
      </div>
      <form className="w-full">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Address"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-gray-700 mb-2" htmlFor="cityName">
              City Name
            </label>
            <input
              type="text"
              id="cityName"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="City Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="state">
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="State"
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-gray-700 mb-2" htmlFor="zipCode">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="000000"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyLocation;
