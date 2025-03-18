import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSpa, FaHiking, FaHotel } from "react-icons/fa";
import { GiMountainCave, GiGreekTemple } from "react-icons/gi";

import spaImg from "../assets/56.jpeg";
import hikingImg from "../assets/62.jpeg";
import trekkingImg from "../assets/61.jpeg";
import oldTownImg from "../assets/63.jpeg";
import deluxeRoomImg from "../assets/64.jpeg";

const experiences = [
  {
    title: "Luxury Spa & Wellness",
    icon: <FaSpa className="text-4xl text-red-500 mb-3" />,
    image: spaImg,
    description: "Indulge in holistic relaxation with rejuvenating spa therapies and sauna treatments."
  },
  {
    title: "Scenic Hiking Trails",
    icon: <FaHiking className="text-4xl text-green-600 mb-3" />,
    image: hikingImg,
    description: "Walk through stunning landscapes and enjoy panoramic Himalayan views."
  },
  {
    title: "Trekking Adventures",
    icon: <GiMountainCave className="text-4xl text-gray-700 mb-3" />,
    image: trekkingImg,
    description: "Experience exhilarating trekking routes perfect for nature lovers and explorers."
  },
  {
    title: "Cultural Heritage Tour",
    icon: <GiGreekTemple className="text-4xl text-yellow-500 mb-3" />,
    image: oldTownImg,
    description: "Step back in time with a visit to ancient temples and historic sites in Dhulikhel."
  },
  {
    title: "Elegant Boutique Stays",
    icon: <FaHotel className="text-4xl text-blue-500 mb-3" />,
    image: deluxeRoomImg,
    description: "Unwind in thoughtfully designed rooms that blend comfort with Nepali charm."
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" }
  })
};

const ServicesSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imgLoadPromises = experiences.map(({ image }) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
      });
    });

    Promise.all(imgLoadPromises).then(() => setLoaded(true));
  }, []);

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-gray-800"
        >
          Experiences at Dhulikhel Boutique Hotel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 text-lg mt-3"
        >
          Immerse yourself in breathtaking views, rich culture, and refined hospitality.
        </motion.p>
      </div>

      {!loaded ? (
        <div className="text-center text-lg text-gray-500 animate-pulse py-20">
          Preparing your experience...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <div className="relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white overflow-hidden">
                <div className="relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center items-center mb-4">{exp.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
