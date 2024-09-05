
import React from 'react';

const PropertyContactDetail = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mr-auto mt-14">
      <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
        <h2 className="text-xl font-semibold">Property Contact Detail</h2>
      </div>
      <form className="w-full">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label className="block text-gray-700 mb-2" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Phone Number"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyContactDetail;
