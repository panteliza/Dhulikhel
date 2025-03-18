
import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";
import FoodSection from "../components/FoodSection";
import DirectContactUs from "../components/DirectContactUs";
import ServicesSection from "../components/Services";
import SpaGallery from "../components/SpaGallery";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Slider/>
      <FoodSection/>
      <ServicesSection/>
      <DirectContactUs/>
      <SpaGallery/>
   
   
    </div>
  )
}

export default Home