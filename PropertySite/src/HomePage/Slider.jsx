
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cities = [
  { name: "Ahmedabad", image: "/images/Ahmedabad.webp" },
  { name: "Pune", image: "/images/Pune.webp" },
  { name: "Mumbai", image: "/images/mumbai.jpg" },
  { name: "Thane", image: "/images/Thane.jpg" },
  { name: "Nashik", image: "/images/Nashik.jpg" },
];

const CitySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-10 overflow-hidden">
      <div className="text-center text-red-500 mb-4">EXPLORE CITIES</div>
      <h2 className="text-center text-2xl font-bold mb-8">Our Location For You</h2>
      <Slider {...settings}>
        {cities.map((city, index) => (
          <div key={index} className="slide px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl w-60 mx-auto">
              <img src={city.image} alt={city.name} className="w-full h-60 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-bold">{city.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CitySlider;
