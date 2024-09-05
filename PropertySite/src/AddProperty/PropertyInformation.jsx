import React from 'react';

const PropertyInformation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mr-auto mt-14">
      <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
        <h2 className="text-xl font-semibold">Property Information</h2>
      </div>
      <form className="w-full">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="propertyDescription">
            Property Description
          </label>
          <textarea
            id="propertyDescription"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Write Description here"
          />
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="buildingAge">
              Building Age
            </label>
            <select
              id="buildingAge"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option>Select an Option</option>
              <option>0-5 years</option>
              <option>5-10 years</option>
              <option>10-20 years</option>
              <option>20+ years</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="bedrooms">
              Bedrooms
            </label>
            <select
              id="bedrooms"
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
          <div className="w-full md:w-1/3 px-2">
            <label className="block text-gray-700 mb-2" htmlFor="bathrooms">
              Bathrooms
            </label>
            <select
              id="bathrooms"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            >
              <option>Select an Option</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Other Features (Optional)</label>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Air Conditioning</span>
              </label>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Swimming Pool</span>
              </label>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Central Heating</span>
              </label>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Laundry Rooms</span>
              </label>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Gym</span>
              </label>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Window Covering</span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyInformation;
