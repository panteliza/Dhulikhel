import React, { useEffect } from "react";
import Navbar from '../components/Navbar'


import DirectContactUs from "../components/DirectContactUs";
import Footer from "../components/Footer";

import Reviews from "../components/Reviews";
import Contact from "../components/HotelMap";

const ContactPage = () => {
   useEffect(() => {
      // Scroll to the top when the page loads
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navbar/>
      <Contact className="mt-4"/>
  <Reviews/>
    <DirectContactUs/>
      <Footer/>
      
    </div>
  )
}

export default ContactPage