import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Static Image Imports
import D1 from "../assets/d1.jpg";
import D2 from "../assets/d2.jpg";
import D3 from "../assets/d3.jpg";
import D4 from "../assets/d4.jpg";
import D5 from "../assets/d5.jpg";
import D6 from "../assets/d6.jpg";
import D7 from "../assets/d7.jpg";
import D8 from "../assets/d8.jpg";
import D9 from "../assets/d9.jpg";
import D10 from "../assets/d10.jpg";
import D11 from "../assets/d11.jpg";
import D12 from "../assets/d12.jpg";
import D13 from "../assets/d13.jpg";
import D14 from "../assets/d14.jpg";
import D15 from "../assets/d15.jpg";
import D16 from "../assets/d16.jpg";
import D17 from "../assets/d17.jpg";
import D19 from "../assets/d19.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Img1 from "../assets/1.jpeg";
import Img2 from "../assets/2.jpeg";
import Img3 from "../assets/3.jpeg";
import Img6 from "../assets/4.jpeg";
import Img5 from "../assets/5.jpeg";

import Img7 from "../assets/7.jpeg";
import Img8 from "../assets/8.jpeg";
import Img9 from "../assets/9.jpeg";
import Img10 from "../assets/10.jpeg";
import Img11 from "../assets/11.jpeg";
import Img12 from "../assets/12.jpeg";
import Img13 from "../assets/13.jpeg";
import Img14 from "../assets/14.jpeg";
import Img15 from "../assets/15.jpeg";
import Img16 from "../assets/16.jpeg";

import Img18 from "../assets/18.jpeg";
import Img19 from "../assets/19.jpeg";
import Img20 from "../assets/20.jpeg";
import Img21 from "../assets/21.jpeg";
import Img22 from "../assets/22.jpeg";
import Img23 from "../assets/23.jpeg";
import Img24 from "../assets/24.jpeg";
import Img25 from "../assets/25.jpeg";
import Img26 from "../assets/26.jpeg";
import Img27 from "../assets/27.jpeg";
import Img28 from "../assets/28.jpeg";
import Img29 from "../assets/29.jpeg";
import Img30 from "../assets/30.jpeg";
import Img31 from "../assets/31.jpeg";
import Img32 from "../assets/32.jpeg";
import Img33 from "../assets/33.jpeg";
import Img34 from "../assets/34.jpeg";
import Img35 from "../assets/35.jpeg";
import Img36 from "../assets/36.jpeg";
import Img37 from "../assets/37.jpeg";
import Img60 from "../assets/60.jpeg";
import Img61 from "../assets/61.jpeg";
import Img62 from "../assets/62.jpeg";
import Img63 from "../assets/63.jpeg";
import Img64 from "../assets/64.jpeg";
import Img65 from "../assets/65.jpeg";
import Img66 from "../assets/66.jpeg";

// Image Array
const images = [
  D1, D2,  Img1, Img2, Img3,  Img7,  Img9, Img10,
  Img11, Img13,Img60,D16, D17, D19, Img61, Img62, Img63, Img64, Img65, Img66, Img14, Img15, Img16,  Img18, Img19, Img20,
 Img22,
  Img24, Img25,  Img28,  Img30,
   Img33, Img34, Img35, Img36,D3, D4, D5, D6, D7,
  D8, D9, D10, D11, D12, D13,
  D15, 
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const GalleryPage = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);
return (
    <>
   <Navbar/>
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-secondary text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
       Our Gallery
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg bg-white group"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
       
      </motion.div>
    </div>
   <Footer/>
    </>
  );
};

export default GalleryPage;
