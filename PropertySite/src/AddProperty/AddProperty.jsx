import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Footer from '../HomePage/Footer';


const UploadPropertyLargeScreen = () => {
  const [activeItem, setActiveItem] = useState('Add property');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const menuItems = [
    { name: 'Dashboards' },
    { name: 'My Properties' },
    { name: 'My Invoices' },
    { name: 'My Favourites' },
    { name: 'Reviews' },
    { name: 'My Profile' },
    { name: 'Add property' },
    { name: 'Logout' },
  ];

  return (
    <div>
      {/* Sidebar */}
      <div className="absolute left-0 top-0 h-full w-60 bg-gray-100 p-4 shadow-lg mt-16">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-4">
              <a
                href="#"
                className={`block p-2 ${activeItem === item.name ? 'bg-red-200' : ''}`}
                onClick={() => handleItemClick(item.name)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mt-6">
        <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
          <h2 className="text-xl font-semibold">Property Gallery</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-lg">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className="mb-4 max-h-60" />
          ) : (
            <div className="mb-4">
              <img src="/images/image1.png" className="h-10" alt="Placeholder" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="px-4 py-2 mb-2 text-white bg-red-500 rounded cursor-pointer"
          >
            Choose Image
          </label>
          <p className="text-gray-500">Or drag image here to upload</p>
        </div>
      </div>

      {/* Property Basic Information */}
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mt-14">
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


      <button className="flex flex-col items-center justify-center p-2 bg-red-500 text-white rounded-lg shadow-md w-3/4 ml-80 mb-10 mt-6">
        Submit Property
      </button>
      <Footer/>
    </div>
  );
};




// Small Screen Component
const UploadPropertySmallScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const steps = [
    { label: 'Property Gallery' },
    { label: 'Property Information' },
    { label: 'Property Location' },
    { label: 'Contact Details' }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const setStep = (step) => {
    setCurrentStep(step);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-full max-w-xl mx-auto">
      <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <button
              key={index}
              className={`text-xs font-semibold px-2 py-1 ${index === currentStep ? 'bg-red-300' : ''}`}
              onClick={() => setStep(index)}
            >
              {step.label}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-xs">{`${(currentStep + 1) * 25}%`}</div>
          <div className="flex-grow mx-2 h-1 bg-gray-200 rounded">
            <div
              className="h-full bg-red-500 rounded"
              style={{ width: `${(currentStep + 1) * 25}%` }}
            ></div>
          </div>
        </div>
      </div>

      {currentStep === 0 && (
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg w-full">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className="mb-4 w-full max-h-48 object-cover" />
          ) : (
            <div className="mb-4 text-center">
              <img src='/images/image1.png' className='h-16 mx-auto mb-2'></img>
              <p className="text-gray-500 text-xs">Click from camera or browse to upload</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="px-4 py-2 mb-2 text-white bg-red-500 rounded cursor-pointer"
          >
            Add Photos
          </label>
          <p className="text-gray-500 text-xs">At least 8 photos will increase property quality score by 15%</p>
          <p className="text-gray-500 text-xs">Hall, Bedroom, Kitchen, and Bathroom photos will get more points in quality score</p>
        </div>
      )}

      {currentStep === 1 && (
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="propertyTitle">Property Title</label>
            <input
              type="text"
              id="propertyTitle"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Property Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="propertyDescription">Property Description</label>
            <textarea
              id="propertyDescription"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Add short description of property"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="propertyStatus">Property Status</label>
            <select
              id="propertyStatus"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
            >
              <option>Select an Option</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="propertyType">Property Type</label>
            <select
              id="propertyType"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
            >
              <option>Select an Option</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Land</option>

            </select>
          </div>
          <div className="flex space-x-2 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2 text-xs" htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
                placeholder="Price"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2 text-xs" htmlFor="area">Area (sqft)</label>
              <input
                type="text"
                id="area"
                className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
                placeholder="Area (sqft)"
              />
            </div>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Address"
            />
          </div>
          <div className="flex space-x-2 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2 text-xs" htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
                placeholder="City"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2 text-xs" htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
                placeholder="State"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Zip Code"
            />
          </div>
        </form>
      )}

      {currentStep === 3 && (
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="contactName">Contact Name</label>
            <input
              type="text"
              id="contactName"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Contact Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="contactPhone">Contact Phone</label>
            <input
              type="text"
              id="contactPhone"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Contact Phone"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xs" htmlFor="contactEmail">Contact Email</label>
            <input
              type="email"
              id="contactEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded text-xs"
              placeholder="Contact Email"
            />
          </div>
        </form>
      )}

      <div className="flex justify-between mt-4 w-full">
        {currentStep > 0 && (
          <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded text-xs">
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={nextStep} className="px-4 py-2 bg-red-500 text-white rounded text-xs">
            Next
          </button>
        ) : (
          <button onClick={() => alert('Property submitted!')} className="px-4 py-2 bg-green-500 text-white rounded text-xs">
            Submit
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

// Main Component to switch between small and large screen
const UploadProperty = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <>
      {isSmallScreen ? <UploadPropertySmallScreen /> : <UploadPropertyLargeScreen />}
    </>
  );
};

export default UploadProperty;
