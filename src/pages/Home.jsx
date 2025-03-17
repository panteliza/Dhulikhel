
import React, { useEffect } from "react";
import Navbar from '../components/Navbar'

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
   
   
    </div>
  )
}

export default Home