import React from 'react';

const PropertyBasicInformation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mr-auto mt-14">
      <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
        <h2 className="text-xl font-semibold">Property Basic Information</h2>
      </div>
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="propertyTitle">
            Property Title
          </label>
          <input
            type="text"
            id="propertyTitle"
            className="w-full px-4 py-2 border border-red-500 rounded"
            placeholder="Property Title"
          />
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option>Select an Option</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label className="block text-gray-700 mb-2" htmlFor="type">
              Type
            </label>
            <select
              id="type"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option>Select an Option</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Land</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="price">
              Price
            </label>
            <div className="flex">
              <input
                type="number"
                id="price"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="000"
              />
              <span className="flex items-center px-4 bg-gray-200 border border-l-0 border-gray-300 rounded-r">
                INR
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="area">
              Area
            </label>
            <div className="flex">
              <input
                type="number"
                id="area"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="000"
              />
              <span className="flex items-center px-4 bg-gray-200 border border-l-0 border-gray-300 rounded-r">
                Sq.ft
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label className="block text-gray-700 mb-2" htmlFor="rooms">
              Rooms
            </label>
            <select
              id="rooms"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option>Select an Option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyBasicInformation;
