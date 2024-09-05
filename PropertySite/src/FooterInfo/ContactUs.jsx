
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      
      {/* Mailing Address Section */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg text-center">
        <h3 className="text-lg font-semibold mb-4">Our Mailing Address:</h3>
        <p>RealEstate.com</p>
        <p>207, World Trade Center,</p>
        <p>Kharadi, Pune – 122001</p>
        <p>Maharashtra, India</p>
      </div>

      {/* Queries Section */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg mt-6 text-center">
        <h3 className="text-lg font-semibold mb-4">In case of any queries:</h3>
        
        <div className="flex items-center justify-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="text-red-600 mr-2" size="lg" />
          <p className="text-lg">1800-313-4777</p>
        </div>
        
        <div className="flex items-center justify-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-red-600 mr-2" size="lg" />
          <p className="text-lg">support@realestate.com</p>
        </div>
        
        <div className="mt-4">
          <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            <FontAwesomeIcon icon={faComments} className="mr-2" />
            Chat With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
