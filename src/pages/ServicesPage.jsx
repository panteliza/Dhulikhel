import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import About from '../components/About'

import DirectContactUs from "../components/DirectContactUs";
import Footer from "../components/Footer";
import ServicesSection from "../components/Services";
import FoodSection from "../components/FoodSection";
import HotelFacilitiesComponent from "../components/HotelFacilitiesComponent";
import SpaGallery from "../components/SpaGallery";

const ServicesPage = () => {
   useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navbar/>
    <ServicesSection/>
    <FoodSection/>
    <HotelFacilitiesComponent/>
    <SpaGallery/>
    <DirectContactUs/>
      <Footer/>
      
    </div>
  )
}

export default ServicesPage