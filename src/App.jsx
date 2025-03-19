import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
import './App.css'; // Add this for styling
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import DeluxeTwinRoomPage from './pages/DeluxeTwinRoomPage';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/deluxe-twin-room" element={<DeluxeTwinRoomPage />} />
          </Routes>
 {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9779851096133"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>

);
};
export default App;
