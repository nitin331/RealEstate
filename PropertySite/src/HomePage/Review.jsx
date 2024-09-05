
import React, { useState, useEffect } from 'react';

const testimonials = [
  { 
    name: 'Kirti Agarwal',
    position: 'Project Manager',
    feedback: 'I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.',
    rating: 5,
    image: '/images/1.png',
  },
  {
    name: 'Kirti Agarwal',
    position: 'Project Manager',
    feedback: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    rating: 4.5,
    image: '/images/2.png',
  },
  {
    name: 'Agarwal',
    position: 'Project Manager',
    feedback: 'I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.',
    rating: 5,
    image: 'path_to_image1.jpg',
  },
  {
    name: 'Kirti ',
    position: 'Project Manager',
    feedback: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    rating: 4.5,
    image: '/images/1.png',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - (isMobile ? 1 : 2) + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [testimonials[currentIndex], testimonials[nextIndex]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center text-red-500 mb-4">OUR BLOG AND ARTICLES</div>
      <h2 className="text-center text-3xl font-semibold mb-6">What Our Client Says</h2>
      
      {/* Slider Container */}
      <div className="relative flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-4">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-lg ${isMobile ? 'w-64 h-auto' : 'w-80'} sm:h-auto`}
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">{testimonial.feedback}</p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.14 3.5a1 1 0 00.95.691h3.688c.969 0 1.372 1.24.588 1.81l-2.98 2.165a1 1 0 00-.364 1.118l1.14 3.5c.3.921-.755 1.688-1.54 1.118l-2.98-2.165a1 1 0 00-1.176 0l-2.98 2.165c-.785.57-1.84-.197-1.54-1.118l1.14-3.5a1 1 0 00-.364-1.118L2.92 8.928c-.784-.57-.38-1.81.588-1.81h3.688a1 1 0 00.95-.691l1.14-3.5z" />
                </svg>
              ))}
              {testimonial.rating % 1 !== 0 && (
                <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.14 3.5a1 1 0 00.95.691h3.688c.969 0 1.372 1.24.588 1.81l-2.98 2.165a1 1 0 00-.364 1.118l1.14 3.5c.3.921-.755 1.688-1.54 1.118l-2.98-2.165a1 1 0 00-1.176 0l-2.98 2.165c-.785.57-1.84-.197-1.54-1.118l1.14-3.5a1 1 0 00-.364-1.118L2.92 8.928c-.784-.57-.38-1.81.588-1.81h3.688a1 1 0 00.95-.691l1.14-3.5z" />
                </svg>
              )}
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between px-4 sm:px-0">
          <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow-md -ml-14">
            <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow-md -mr-12">
            <svg className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.707 15.707a1 1 0 01-1.414-1.414L10.586 10 6.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
