// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">RealEstate</h2>
          <p className="mb-4">
            Specializes in providing high-class tours for those in need. Contact Us
          </p>
          <p className="mb-2 flex items-center"><FaMapMarkerAlt className="mr-2" /> Lane No. 3, Balajinagar, Mahadev Nagar, Kharadi</p>
          <p className="mb-2 flex items-center"><FaPhoneAlt className="mr-2" /> +91 9075326886</p>
          <p className="flex items-center"><FaEnvelope className="mr-2" /> realestate@gmail.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">Pricing Plans</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Our Services</a></li>
            <li className="mb-2"><a href="/aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="/contactus" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">Property For Sale</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Property For Rent</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Property For Buy</a></li>
            <li><a href="#" className="hover:text-white">Our Agents</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="mb-4">Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
          <form>
            <div className="flex mb-4">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
                placeholder="Your email address"
              />
              <button className="bg-red-500 text-white px-4  rounded-r-lg hover:bg-red-700 focus:outline-none">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <div className="flex justify-center mb-4">
          <a href="https://www.facebook.com" className="mx-2 text-gray-400 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com" className="mx-2 text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://www.x.com" className="mx-2 text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" className="mx-2 text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
        </div>
        <p>©2024 RealEstate. All Rights Reserved.</p>
        <p>
          <a href="#" className="mx-2 hover:text-white">Terms Of Services</a>
          <a href="#" className="mx-2 hover:text-white">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-white">Cookie Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
