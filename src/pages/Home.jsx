
import React, { useEffect } from "react";
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Slider/>
   
   
    </div>
  )
}

export default Home