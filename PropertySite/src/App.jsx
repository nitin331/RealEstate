import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './HomePage/Navbar';
import './index.css';
import Banner from './HomePage/Banner';
import StatsAndCategories from './HomePage/Categories';
import PropertyList from './HomePage/PropertyList';
import Services from './HomePage/Services';
import CitySlider from './HomePage/Slider';
import TestimonialSlider from './HomePage/Review';
import BlogPostSection from './HomePage/BlogPostSection';
import Footer from './HomePage/Footer';
import AddProperty from './AddProperty/AddProperty';
import PropertyCard from './PropertyListing/PropertyCard'
import PropertyDetail from './PropertyDetails/PropertyDetail';
import AboutUs from './FooterInfo/AboutUs';
import ContactUs from './FooterInfo/ContactUs';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col">
          <Navbar/>
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <StatsAndCategories />
                <PropertyList />
                <Services />
                <CitySlider />
                <TestimonialSlider/>
                <BlogPostSection />
                <Footer/>
              </>
            } />
            <Route path='/propertycard' element={<PropertyCard/>}/>
            <Route path='/dashboard' element={<AddProperty/>}/>
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/contactus' element={<ContactUs/>} />
          </Routes>
          
        </div>
    </Router>
  );
};

export default App;
