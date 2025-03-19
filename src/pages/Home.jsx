
import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";
import FoodSection from "../components/FoodSection";
import DirectContactUs from "../components/DirectContactUs";
import ServicesSection from "../components/Services";
import SpaGallery from "../components/SpaGallery";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Reviews from "../components/Reviews";
import RoomTypesComponent from "../components/RoomTypesComponent";
import HotelFacilitiesComponent from "../components/HotelFacilitiesComponent";
import Contact from "../components/HotelMap";
import FAQComponent from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Slider/>
      <About/>
      <ServicesSection/>
      <FoodSection/>
      
      <SpaGallery/>
      <RoomTypesComponent/>
     <Reviews/>
      <Gallery/>
<HotelFacilitiesComponent/>
      <DirectContactUs/>
      <Contact/>
      <FAQComponent/>
      <Footer/>
   
   
    </div>
  )
}

export default Home