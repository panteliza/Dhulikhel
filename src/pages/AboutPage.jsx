import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import About from '../components/About'
import RoomTypesDisplay from "../components/RoomTypesComponent";
import SpaGallery from "../components/SpaGallery";
import DirectContactUs from "../components/DirectContactUs";
import Footer from "../components/Footer";

const AboutPage = () => {
   useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navbar/>
      <About/>
      <RoomTypesDisplay/>
      <SpaGallery/>
      <DirectContactUs/>
      <Footer/>
      
    </div>
  )
}

export default AboutPage