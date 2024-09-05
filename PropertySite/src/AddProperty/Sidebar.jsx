import React, { useState } from 'react';
import PropertyInformation from './PropertyInformation';
import PropertyBasicInformation from './PropertyBasicInformation';
import PropertyLocation from './PropertyLocation';
import PropertyContactDetail from './PropertyContactDetail';
import Footer from '../HomePage/Footer';


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Add property');

  const handleItemClick = (item) => {
    setActiveItem(item);
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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div className="fixed left-0 top-0 h-full w-60 bg-gray-100 p-4 shadow-lg mt-16 absolute">
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
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-3/4 ml-80 mr-auto mt-6">
      <div className="w-full p-4 mb-4 bg-red-200 rounded-t-lg">
        <h2 className="text-xl font-semibold">Property Gallery</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed border-gray-300 rounded-lg">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="mb-4 max-h-60" />
        ) : (
          <div className="mb-4">
           <img src='/images/image1.png' className='h-10'></img>
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
    <PropertyBasicInformation/>
    <PropertyLocation/>
    <PropertyInformation/>
    <PropertyContactDetail/>
    <button className="flex flex-col items-center justify-center p-2 bg-red-500 text-white rounded-lg shadow-md w-3/4 ml-80 mr-auto mb-10 mt-6">Submit Property</button>
    <Footer/>
    </div>
  );
};

export default Sidebar;
