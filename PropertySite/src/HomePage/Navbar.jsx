
import React, { useState, useEffect, useRef } from 'react';
import Modal from '../LoginModal/Modal'; // Adjust the path as necessary
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = {
    buy: useRef(null),
    sell: useRef(null),
    rent: useRef(null),
    dashboard: useRef(null),
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefs.buy.current && !dropdownRefs.buy.current.contains(event.target) &&
      dropdownRefs.sell.current && !dropdownRefs.sell.current.contains(event.target) &&
      dropdownRefs.rent.current && !dropdownRefs.rent.current.contains(event.target) &&
      dropdownRefs.dashboard.current && !dropdownRefs.dashboard.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = () => {
    setView('login'); // Reset view to 'login' when opening the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        <a href="/"><div className="text-red-600 text-xl font-bold">RealEstate</div></a>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex lg:space-x-4 relative">
          <button 
            onClick={() => setOpenDropdown(openDropdown === 'buy' ? null : 'buy')} 
            className="flex items-center text-black"
          >
            Buy <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'buy' && (
            <div ref={dropdownRefs.buy} className="absolute top-full left-0 mt-2 w-full bg-white shadow-md p-4 z-10">
              <h4 className="font-bold">BUY A HOME</h4>
              <a href="#" className="block py-1 text-black">Land/Plot</a>
              <a href="#" className="block py-1 text-black">Commercial</a>
              <a href="#" className="block py-1 text-black">Popular Areas</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">PROPERTIES IN PUNE</h4>
              <a href="#" className="block py-1 text-black">Flats</a>
              <a href="#" className="block py-1 text-black">Builder Floors</a>
              <a href="#" className="block py-1 text-black">Independent House</a>
              <a href="#" className="block py-1 text-black">Plots in Pune</a>
              <a href="#" className="block py-1 text-black">Serviced Apartments</a>
              <a href="#" className="block py-1 text-black">Studio Apartments/1 RK Flats</a>
              <h4 className="font-bold mt-4">POPULAR SEARCHES</h4>
              <a href="#" className="block py-1 text-black">Verified Property in Pune</a>
              <a href="#" className="block py-1 text-black">New Projects in Pune</a>
            </div>
          )}

          <button 
            onClick={() => setOpenDropdown(openDropdown === 'sell' ? null : 'sell')} 
            className="flex items-center text-black"
          >
            Sell <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'sell' && (
            <div ref={dropdownRefs.sell} className="absolute top-full left-0 mt-2 w-full bg-white shadow-md p-4 z-10">
              <h4 className="font-bold">FOR OWNER</h4>
              <a href="#" className="block py-1 text-black">Sell Property</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">FOR AGENT</h4>
              <a href="#" className="block py-1 text-black">List Property</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">FOR BUILDER</h4>
              <a href="#" className="block py-1 text-black">Post Project</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
            </div>
          )}

          <button 
            onClick={() => setOpenDropdown(openDropdown === 'rent' ? null : 'rent')} 
            className="flex items-center text-black"
          >
            Rent <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'rent' && (
            <div ref={dropdownRefs.rent} className="absolute top-full left-0 mt-2 w-full bg-white shadow-md p-4 z-10">
              <h4 className="font-bold">RENT A HOME</h4>
              <a href="#" className="block py-1 text-black">PG/Co-Living</a>
              <a href="#" className="block py-1 text-black">Commercial</a>
              <a href="#" className="block py-1 text-black">Popular Areas</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">PROPERTIES IN PUNE</h4>
              <a href="#" className="block py-1 text-black">Flats</a>
              <a href="#" className="block py-1 text-black">Builder Floors</a>
              <a href="#" className="block py-1 text-black">Independent House</a>
              <a href="#" className="block py-1 text-black">Plots in Pune</a>
              <a href="#" className="block py-1 text-black">Serviced Apartments</a>
              <a href="#" className="block py-1 text-black">Studio Apartments/1 RK Flats</a>
              <h4 className="font-bold mt-4">POPULAR SEARCHES</h4>
              <a href="#" className="block py-1 text-black">Property in Pune</a>
              <a href="#" className="block py-1 text-black">Verified Property in Pune</a>
            </div>
          )}

          <button 
            onClick={() => setOpenDropdown(openDropdown === 'dashboard' ? null : 'dashboard')} 
            className="flex items-center text-black"
          >
            Dashboard <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'dashboard' && (
            <div ref={dropdownRefs.dashboard} className="absolute top-full left-0 mt-2 w-full bg-white shadow-md p-4 z-10">
             
              <a href="/dashboard" className="block py-1 text-black">Dashboard</a>
                <a href="/propertycard" className="block py-1 text-black">My Properties</a>
                <a href="#" className="block py-1 text-black">My Invoices</a>
                <a href="#" className="block py-1 text-black">My Favorites</a>
                <a href="#" className="block py-1 text-black">Reviews</a>
                <a href="#" className="block py-1 text-black">My Profile</a>
                <a href="#" className="block py-1 text-black">Add Property</a>
                <a href="#" className="block py-1 text-black">Logout</a>

            </div>
          )}
        </div>

        <div className="hidden lg:flex lg:space-x-4">
          <button 
            className="border border-red-600 text-red-600 px-4 py-2 rounded-xl" 
            onClick={openModal}
          >
            Login/Register
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
            Submit Property
          </button>
        </div>
      </div>

      {/* Dropdowns for Mobile */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-md`}>
        <div className="flex flex-col space-y-4 p-4">
          <button 
            onClick={() => setOpenDropdown(openDropdown === 'buy' ? null : 'buy')} 
            className="flex justify-between items-center text-black p-2"
          >
            Buy <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'buy' && (
            <div className="bg-white shadow-md p-4">
              <h4 className="font-bold">BUY A HOME</h4>
              <a href="#" className="block py-1 text-black">Land/Plot</a>
              <a href="#" className="block py-1 text-black">Commercial</a>
              <a href="#" className="block py-1 text-black">Popular Areas</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">PROPERTIES IN PUNE</h4>
              <a href="#" className="block py-1 text-black">Flats</a>
              <a href="#" className="block py-1 text-black">Builder Floors</a>
              <a href="#" className="block py-1 text-black">Independent House</a>
              <a href="#" className="block py-1 text-black">Plots in Pune</a>
              <a href="#" className="block py-1 text-black">Serviced Apartments</a>
              <a href="#" className="block py-1 text-black">Studio Apartments/1 RK Flats</a>
              <h4 className="font-bold mt-4">POPULAR SEARCHES</h4>
              <a href="#" className="block py-1 text-black">Verified Property in Pune</a>
              <a href="#" className="block py-1 text-black">New Projects in Pune</a>
            </div>
          )}

          <button 
            onClick={() => setOpenDropdown(openDropdown === 'sell' ? null : 'sell')} 
            className="flex justify-between items-center text-black p-2"
          >
            Sell <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'sell' && (
            <div className="bg-white shadow-md p-4">
              <h4 className="font-bold">FOR OWNER</h4>
              <a href="#" className="block py-1 text-black">Sell Property</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">FOR AGENT</h4>
              <a href="#" className="block py-1 text-black">List Property</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">FOR BUILDER</h4>
              <a href="#" className="block py-1 text-black">Post Project</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
            </div>
          )}

          <button 
            onClick={() => setOpenDropdown(openDropdown === 'rent' ? null : 'rent')} 
            className="flex justify-between items-center text-black p-2"
          >
            Rent <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'rent' && (
            <div className="bg-white shadow-md p-4">
              <h4 className="font-bold">RENT A HOME</h4>
              <a href="#" className="block py-1 text-black">PG/Co-Living</a>
              <a href="#" className="block py-1 text-black">Commercial</a>
              <a href="#" className="block py-1 text-black">Popular Areas</a>
              <a href="#" className="block py-1 text-black">Articles & News</a>
              <h4 className="font-bold mt-4">PROPERTIES IN PUNE</h4>
              <a href="#" className="block py-1 text-black">Flats</a>
              <a href="#" className="block py-1 text-black">Builder Floors</a>
              <a href="#" className="block py-1 text-black">Independent House</a>
              <a href="#" className="block py-1 text-black">Plots in Pune</a>
              <a href="#" className="block py-1 text-black">Serviced Apartments</a>
              <a href="#" className="block py-1 text-black">Studio Apartments/1 RK Flats</a>
              <h4 className="font-bold mt-4">POPULAR SEARCHES</h4>
              <a href="#" className="block py-1 text-black">Property in Pune</a>
              <a href="#" className="block py-1 text-black">Verified Property in Pune</a>
            </div>
          )}

          <button 
            onClick={() => setOpenDropdown(openDropdown === 'dashboard' ? null : 'dashboard')} 
            className="flex justify-between items-center text-black p-2"
          >
            Dashboard <img src='/images/down.png' className="ml-1 h-5 w-5" />
          </button>
          {openDropdown === 'dashboard' && (
            <div className="bg-white shadow-md p-4">
             
              <a href="/dashboard" className="block py-1 text-black">Dashboard</a>
                <a href="/propertycard" className="block py-1 text-black">My Properties</a>
                <a href="#" className="block py-1 text-black">My Invoices</a>
                <a href="#" className="block py-1 text-black">My Favorites</a>
                <a href="#" className="block py-1 text-black">Reviews</a>
                <a href="#" className="block py-1 text-black">My Profile</a>
                <a href="#" className="block py-1 text-black">Add Property</a>
                <a href="#" className="block py-1 text-black">Logout</a>
            </div>
          )}

          <div className="flex flex-col space-y-2 p-4">
            <button 
              className="border border-red-600 text-red-600 px-4 py-2 rounded-xl" 
              onClick={openModal}
            >
              Login/Register
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-xl">
              Submit Property
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} view={view} setView={ setView} />
    </nav>
  );
};

export default Navbar;
