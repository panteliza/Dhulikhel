import React from "react";
import { motion } from "framer-motion";

// Import images at the top
import img50 from "../assets/50.jpeg";
import img51 from "../assets/51.jpeg";
import img52 from "../assets/52.jpeg";
import img55 from "../assets/55.jpeg";
import img56 from "../assets/56.jpeg";
import img58 from "../assets/58.jpeg";

// Define spa packages with imported images
const spaPackages = [
  {
    src: img50,
    title: "Ayurvedic Massage",
    description:
      "Ayurvedic massage is a profound art for balancing the body and mind through the medium of oil massage. It helps eliminate body impurities, calm nerves, promote better sleep, soften and smoothen skin, improve blood circulation, and stimulate internal organs. "
  },
  {
    src: img51,
    title: "Cleansing Package",
    description:
      "Indulge in our cleansing package for relaxation and natural detoxification. Includes Shirodhara therapy to purify the mind, alleviate anxiety, reduce headaches, and expand awareness. "
  },
  {
    src: img52,
    title: "Hot Stone Therapy Package",
    description:
      "Enjoy a warm and relaxing massage with our thermo-therapeutic hot stone therapy. It melts away tension, eases muscle stiffness, and increases circulation and metabolism. "
  },
  {
    src: img55,
    title: "Boutique Special Package",
    description:
      "Relax and escape from chaos with a traditional Nepali massage at Dhulikhel Boutique Hotel. "
  },
  {
    src: img56,
    title: "Head, Neck and Shoulder Massage",
    description:
      "Target tension in your head, neck and shoulders with this focused massage. Restores comfort and deeply relaxes. "
  },
  {
    src: img58,
    title: "Spa Bliss Experience",
    description:
      "Experience the finest blend of luxury and traditional wellness therapies, designed to refresh your body and mind."
  }
];

const SpaGallery = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 ">Our Spa Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaPackages.map((spa, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={spa.src}
                  alt={spa.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{spa.title}</h2>
                  <p className="text-sm text-gray-700">{spa.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SpaGallery;
