import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../HomePage/Footer';
import PropertySlider from './Propertyslider';

const properties = [
  {
    id: 1,
    price: '₹32,000 per month',
    title: 'Paranjape Blue Ridge',
    location: 'Wakad, Pune, Maharashtra',
    agent: { 
      name: 'Anil Pore',
      phone: '9075326868',
      email: 'anilpore@gmail.com',
    },
    images: [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
      '/images/4.png',
      '/images/1.png',
      '/images/2.png',
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 2,
      lifts: 2,
      petFriendly: true,
      sqft: 1300,
      balconies: 2,
    },
    description:
      '3 BHK flat is available for rent with a modular kitchen on an immediate basis. For more discussion and visit kindly call us.',
  },
  {
    id: 2,
    price: '₹36,000 per month',
    title: 'The Willows of Palolem',
    location: 'Paliwada, Pune, Maharashtra',
    agent: {
      name: 'Ajit Kumar',
      phone: '9087654321',
      email: 'ajitkumar@gmail.com',
    },
    images: [
      '/images/5.png',
      '/images/6.png',
      '/images/7.png',
      '/images/5.png',
      '/images/6.png',
      '/images/7.png',
    ],
    features: {
      bedrooms: 3,
      bathrooms: 3,
      parking: 1,
      lifts: 1,
      petFriendly: true,
      sqft: 1500,
      balconies: 3,
    },
    description:
      'Luxury 3 BHK flat for rent. Immediate availability. Contact for further information.',
  },
  {
    id: 3,
    price: '₹26,000 per month',
    title: '1BHK SKYi Songbirds',
    location: 'Opposite Symbiosis College, Pune',
    agent: {
      name: 'Vishal Pandit',
      phone: '9054321789',
      email: 'vishalpandit@gmail.com',
    },
    images: [
      '/images/8.png',
      '/images/9.png',
      '/images/5.png',
      '/images/6.png',
      '/images/9.png',
      '/images/7.png',
    ],
    features: {
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      lifts: 1,
      petFriendly: false,
      sqft: 700,
      balconies: 1,
    },
    description:
      '1BHK flat available in prime location with all basic amenities and security.',
  },
  {
    id: 4,
    price: '₹40,000 per month',
    title: 'Kolte Patil Life Republic',
    location: 'Hinjewadi, Pune',
    agent: {
      name: 'Vidhya Joshi',
      phone: '9021234567',
      email: 'vidhyajoshi@gmail.com',
    },
    images: [
      '/images/10.png',
      '/images/11.png',
      '/images/9.png',
      '/images/10.png',
      '/images/11.png',
      '/images/9.png',
    ],
    features: {
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      lifts: 2,
      petFriendly: true,
      sqft: 1600,
      balconies: 2,
    },
    description:
      'Spacious 3 BHK available with a beautiful view and large balconies.',
  },
  {
    id: 5,
    price: '₹31,000 per month',
    title: 'Amarora Trendy Homes',
    location: 'Near Amarora Mall, Pune',
    agent: {
      name: 'Hemant Shrivastav',
      phone: '9087656789',
      email: 'hemant@gmail.com',
    },
    images: [
      '/images/12.png',
      '/images/13.png',
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      lifts: 1,
      petFriendly: false,
      sqft: 1200,
      balconies: 2,
    },
    description:
      'Beautiful and trendy 2 BHK apartment in the heart of Pune, great for small families.',
  },
  {
    id: 6,
    price: '₹27,000 per month',
    title: 'Kolte Patil 24K Ghanore',
    location: 'No. 45B, Viman Nagar, Pune',
    agent: {
      name: 'Vishwas Dubey',
      phone: '9075432189',
      email: 'vishwas@gmail.com',
    },
    images: [
      '/images/14.png',
      '/images/15.png',
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      lifts: 2,
      petFriendly: true,
      sqft: 1250,
      balconies: 2,
    },
    description:
      'Spacious 2 BHK with all modern amenities and pet-friendly environment.',
  },
  {
    id: 7,
    price: '₹28,000 per month',
    title: 'SP Infocity, Pune',
    location: 'Phursungi, Pune',
    agent: {
      name: 'Dipak Khanna',
      phone: '9021987654',
      email: 'dipak@gmail.com',
    },
    images: [
      '/images/16.png',
      '/images/17.png',
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      lifts: 1,
      petFriendly: false,
      sqft: 1100,
      balconies: 1,
    },
    description:
      'Affordable and secure 2 BHK available for rent near Infocity.',
  },
  {
    id: 8,
    price: '₹26,000 per month',
    title: 'Todkar Township, Sasane Nagar',
    location: 'Hadapsar, Pune',
    agent: {
      name: 'Swati Sharma',
      phone: '9123456789',
      email: 'swatisharma@gmail.com',
    },
    images: [
      '/images/18.png',
      '/images/19.png',
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      lifts: 1,
      petFriendly: true,
      sqft: 1150,
      balconies: 2,
    },
    description:
      'A cozy and comfortable 2 BHK located in a serene environment with good connectivity.',
  },
  {
    id: 9,
    price: '₹27,000 per month',
    title: 'Malpani Greens, Wakad',
    location: 'Wakad, Pune',
    agent: {
      name: 'Devika Shah',
      phone: '9012345678',
      email: 'devikashah@gmail.com',
    },
    images: [
      '/images/20.png',
      '/images/21.png',
    ],
    features: {
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      lifts: 2,
      petFriendly: true,
      sqft: 1300,
      balconies: 2,
    },
    description:
      'A lovely 2 BHK in the heart of Wakad, with greenery all around and modern amenities.',
  },
  // ... Your property data as defined
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return <div>Property not found!</div>;
  }

  // Function to change the main image based on the thumbnail clicked
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to go to the next image in the slider
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image in the slider
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const [priceRange, setPriceRange] = useState(0);
  const [securityDeposit, setSecurityDeposit] = useState(0);




  const reviews = [
    {
      name: 'Abhijeet Das',
      date: 'June 12, 2024',
      rating: 5,
      comment: 'It’s really easy to use and it is exactly what I am looking for. A lot of good-looking templates & it’s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/50'
    },
    {
      name: 'Shivani Desai',
      date: 'June 11, 2024',
      rating: 4,
      comment: 'It’s really easy to use and it is exactly what I am looking for. A lot of good-looking templates & it’s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/50'
    },
    {
      name: 'Chetan Oswal',
      date: 'June 11, 2024',
      rating: 4,
      comment: 'It’s really easy to use and it is exactly what I am looking for. A lot of good-looking templates & it’s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/50'
    },
    {
      name: 'Bhavika Agarwal',
      date: 'June 10, 2024',
      rating: 5,
      comment: 'It’s really easy to use and it is exactly what I am looking for. A lot of good-looking templates & it’s highly customizable. Live support is helpful, solved my issue in no time.',
      avatar: 'https://via.placeholder.com/50'
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    saveDetails: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to an API
    console.log(formData);
    alert('Review Submitted');
    setFormData({ name: '', email: '', review: '', saveDetails: false });
  };

  return (
    <div>
      <div className="container mx-auto p-6">
      {/* Property Video/Image Section */}
      <div className="relative w-full h-[200px] md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
  <img
    src={property.images[currentImageIndex]}
    alt={property.title}
    className="w-full h-full object-cover"
  />



        {/* Left and Right Arrows */}
        <button
  onClick={prevImage}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-white p-1 md:p-2 rounded-full w-8 h-8 md:w-10 md:h-10"
>
  <img src='/images/left.png' alt='left-arrow' className='h-4 md:h-6' />
</button>

<button
  onClick={nextImage}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-white p-1 md:p-2 rounded-full w-8 h-8 md:w-10 md:h-10"
>
  <img src='/images/next.png' alt='right-arrow' className='h-4 md:h-6 px-1' />
</button>

      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4 overflow-x-auto space-x-4">
  {property.images.map((img, idx) => (
    <img
      key={idx}
      src={img}
      alt={`img-${idx}`}
      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer ${
        idx === currentImageIndex ? 'border-4 border-red-600' : ''
      }`}
      onClick={() => handleThumbnailClick(idx)}
    />
  ))}
</div>


      {/* Property Information and Agent Contact Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8 shadow-lg p-6 rounded-lg bg-white">
        {/* Property Info Section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-semibold mb-2">{property.title}</h1>
          <p className="text-red-600 text-2xl font-bold">{property.price}</p>
          <p className="text-gray-500 mb-4">{property.location}</p>  

          {/* Property Details Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <span className="font-bold">Bedrooms:</span> {property.features.bedrooms}
            </div>
            <div>
              <span className="font-bold">Bathrooms:</span> {property.features.bathrooms}
            </div>
            <div>
              <span className="font-bold">Parking:</span> {property.features.parking}
            </div>
            <div>
              <span className="font-bold">Lifts:</span> {property.features.lifts}
            </div>
            <div>
              <span className="font-bold">Area:</span> {property.features.sqft} sqft
            </div>
            <div>
              <span className="font-bold">Balconies:</span> {property.features.balconies}
            </div>
            <div>
              <span className="font-bold">Pet Friendly:</span>{' '}
              {property.features.petFriendly ? 'Yes' : 'No'}
            </div>
          </div>

          {/* Property Description */}
          <p className="text-gray-700">{property.description}</p>
        </div>

        {/* Agent Contact Section */}
        <div className="w-full lg:w-1/3 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Contact Agent</h2>

          {/* Agent Info */}
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt={property.agent.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{property.agent.name}</h3>
              <p className="text-gray-600">{property.agent.phone}</p>
              <p className="text-gray-600">{property.agent.email}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 p-2 border rounded"
            />
            <button className="w-full p-2 bg-red-600 text-white rounded">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
      <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="col-span-2 space-y-8">
          {/* Video/Image Section */}
          <div className="w-full h-[300px] shadow-lg rounded-lg relative">
            <img
              src="/images/video.png" // Replace with the actual image URL
              alt="Property"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full">Video</div>
          </div>

          {/* Property Details Section */}
          <div className="shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Property Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-bold">Property ID:</span> AVT1020
              </div>
              <div>
                <span className="font-bold">Property Status:</span> For Rent
              </div>
              <div>
                <span className="font-bold">Price:</span> ₹32,000
              </div>
              <div>
                <span className="font-bold">Bedrooms:</span> 2
              </div>
              <div>
                <span className="font-bold">Security Deposit:</span> ₹40,000
              </div>
              <div>
                <span className="font-bold">Bathrooms:</span> 2
              </div>
              <div>
                <span className="font-bold">Year Built:</span> 2022-12-11
              </div>
              <div>
                <span className="font-bold">Balconies:</span> 2
              </div>
              <div>
                <span className="font-bold">Property Type:</span> House, Apartment
              </div>
              <div>
                <span className="font-bold">Parking:</span> 2
              </div>
              <div>
                <span className="font-bold">Furnishing:</span> Semifurnished
              </div>
            

            </div>
          </div>

          {/* Amenities Section */}
          <div className="shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Amenities and Features</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>🌧️ Rain Water Harvesting</div>
              <div>🎮 Indoor Games Room</div>
              <div>🍖 Barbecue Pit</div>
              <div>🌳 Park</div>
              <div>🎾 Outdoor Tennis Court</div>
              <div>🅿️ Visitors Parking</div>
              <div>🌐 Internet/Wifi Connectivity</div>
              <div>🎥 Mini Cinema Theatre</div>
              <div>🏊 Infinity Pool</div>
            </div>
          </div>
                    {/* Map Section */}
                    <div className="shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Map</h2>
            <div className="w-full h-[300px]">
              <iframe
                title="Property Location"
                src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4707668134793!2d73.94443664624313!3d18.552803123344667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c34a95da0099%3A0x66edab93b328b0be!2sWorld%20Trade%20Center%2C%20Tower%201!5e0!3m2!1sen!2sin!4v1724936036111!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* What's Nearby Section */}
          <div className="shadow-lg p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4">What's Nearby</h2>
            <p className="mb-4">
              Explore nearby amenities to precisely locate your property and identify surrounding conveniences, providing a comprehensive overview of the living environment and the property's convenience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-bold">School:</span> 0.7km
              </div>
              <div>
                <span className="font-bold">Hospital:</span> 0.4km
              </div>
              <div>
                <span className="font-bold">University:</span> 1.3km
              </div>
              <div>
                <span className="font-bold">Metro Station:</span> 1.8km
              </div>
              <div>
                <span className="font-bold">Grocery Center:</span> 0.6km
              </div>
              <div>
                <span className="font-bold">Gym, Wellness:</span> 1.3km
              </div>
              <div>
                <span className="font-bold">Market:</span> 1.1km
              </div>
            </div>
          </div>


          <div className="shadow-lg p-6 rounded-lg mt-8">
      {/* Guest Reviews */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Guest Reviews</h2>
        <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md">View All Reviews</button>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="flex items-start mb-6">
          <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-600">{review.date}</p>
            <div className="text-yellow-500 mb-2">
              {'⭐'.repeat(review.rating)}
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        </div>
      ))}

      {/* Leave A Comment Form */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Leave A Comment</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="saveDetails"
                checked={formData.saveDetails}
                onChange={handleChange}
                className="mr-2"
              />
              Save your name, email for the next time review
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Your review"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-lg"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>

        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Search Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex space-x-2 mb-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded">For Rent</button>
              <button className="bg-gray-300 text-black px-4 py-2 rounded">For Sale</button>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Keyword</label>
              <input
                type="text"
                placeholder="Search Keywords"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Location</label>
              <input
                type="text"
                placeholder="Search Location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Type</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>All</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Rooms</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Bathrooms</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Bedrooms</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

             {/* Price Range Slider */}
             <div className="mb-4">
              <label className="block font-semibold mb-2">Price Range</label>
              <input
                type="range"
                className="w-full"
                min="0"
                max="22000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>₹0</span>
                <span>₹{priceRange}</span>
              </div>
            </div>

            {/* Security Deposit Slider */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Security Deposit</label>
              <input
                type="range"
                className="w-full"
                min="0"
                max="40000"
                step="1000"
                value={securityDeposit}
                onChange={(e) => setSecurityDeposit(e.target.value)}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>₹0</span>
                <span>₹{securityDeposit}</span>
              </div>
            </div>

            <button className="bg-red-500 text-white w-full py-2 rounded">Find Properties</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <PropertySlider/>
    <Footer/>
    </div>
  );
};

export default PropertyDetail;
     