import React from "react";
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

// Image Array
const images = [
  D1, D2, D3, D4, D5, D6, D7,
  D8, D9, D10, D11, D12, D13,
  D14, D15, D16, D17, D19,
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

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-secondary text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Some Glimpses
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
        <Link
          to="/gallery"
          className="inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          View More from Gallery
        </Link>
      </motion.div>
    </div>
  );
};

export default Gallery;
