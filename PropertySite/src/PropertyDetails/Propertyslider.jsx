
import React from "react";
import Slider from "react-slick";
import { FaBed, FaBath, FaCar, FaDog } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const properties = [
  {
    id: 1,
    title: "Paranjape Blue Ridge",
    location: "Wakad, Pune, Maharashtra",
    price: "₹ 30,000 per month",
    image: "/images/pc1.png", // replace with your image path
    bedrooms: 2,
    bathrooms: 2,
    garage: 1,
    petsAllowed: true,
    agent: "Anil Pore",
    timeAgo: "1 Day ago",
  },
  {
    id: 2,
    title: "Kolte-Patil 24k Glamore",
    location: "No 545, NIBM Road, Pune",
    price: "₹ 32,000 per month",
    image: "/images/pc2.png", // replace with your image path
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    petsAllowed: true,
    agent: "Vishwas Dubey",
    timeAgo: "2 Days ago",
  },
  {
    id: 3,
    title: "The Willows of Plainview",
    location: "Pushpanagari Apartment, Kothrud",
    price: "₹ 30,000 per month",
    image: "/images/pc3.png", // replace with your image path
    bedrooms: 1,
    bathrooms: 2,
    garage: 1,
    petsAllowed: true,
    agent: "Swati Sharma",
    timeAgo: "2 Days ago",
  },
];

// Custom Arrow Components
const PreviousArrow = ({ onClick }) => {
  return (
    <button
      className="bg-white hover:bg-gray-400 text-gray-700 rounded-full p-1 absolute top-1/2 left-2 sm:left-4 md:left-6 lg:left-8 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <AiOutlineLeft size={20} className="sm:text-lg md:text-xl lg:text-2xl" />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="bg-white hover:bg-gray-400 text-gray-700 rounded-full p-1 absolute top-1/2 right-2 sm:right-4 md:right-6 lg:right-8 transform -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <AiOutlineRight size={20} className="sm:text-lg md:text-xl lg:text-2xl" />
    </button>
  );
};

const PropertySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mb-12 relative">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Previously Used Properties</h2>
      <Slider {...settings}>
        {properties.map((property) => (
          <div key={property.id} className="p-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:h-60 md:h-72 lg:h-80">
              <img
                src={property.image}
                alt={property.title}
                className="w-full object-cover h-40 sm:h-32 md:h-40 lg:h-48"
              />
              <div className="p-4">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                  {property.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500">
                  {property.location}
                </p>
                <p className="text-red-500 font-bold text-sm sm:text-base md:text-lg">
                  {property.price}
                </p>
                <div className="flex items-center gap-2 text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                  <span className="flex items-center">
                    <FaBed className="mr-1" /> {property.bedrooms}
                  </span>
                  <span className="flex items-center">
                    <FaBath className="mr-1" /> {property.bathrooms}
                  </span>
                  <span className="flex items-center">
                    <FaCar className="mr-1" /> {property.garage}
                  </span>
                  {property.petsAllowed && (
                    <span className="flex items-center">
                      <FaDog className="mr-1" />
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src="path/to/agent-image.jpg" // replace with your agent image path
                      alt={property.agent}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-700 text-sm">{property.agent}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{property.timeAgo}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
