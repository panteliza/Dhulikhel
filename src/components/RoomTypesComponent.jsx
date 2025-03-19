import React from "react";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const roomTypes = [
  {
    type: "Deluxe Twin Room",
    beds: "2 single beds",
    guests: 2,
  },
  {
    type: "Family Room",
    beds: "1 large double bed",
    guests: 4,
  },
  {
    type: "Deluxe Double Room",
    beds: "1 single bed and 1 double bed",
    guests: 3,
  },
  {
    type: "Family Room",
    beds: "3 single beds",
    guests: 3,
  },
  {
    type: "Budget Triple Room",
    beds: "2 double beds",
    guests: 4,
  },
  {
    type: "Deluxe Triple Room",
    beds: "1 single bed and 1 large double bed",
    guests: 3,
  },
  {
    type: "Budget Double Room",
    beds: "1 double bed",
    guests: 2,
  },
  {
    type: "Deluxe Double Room",
    beds: "1 single bed and 1 double bed",
    guests: 3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: index => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.15,
      type: "spring",
      stiffness: 120,
    },
  })
};

const RoomTypesDisplay = () => {
  return (
    <motion.div
      className="px-6 py-12 max-w-screen-xl mx-auto bg-gradient-to-b from-green-50 to-blue-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 tracking-tight text-[#1a202c]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        ✨ Luxurious Room Types
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {roomTypes.map((room, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border border-gray-100 bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 backdrop-blur-sm group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-200 via-green-200 to-transparent opacity-0 group-hover:opacity-60 transition duration-700 rounded-3xl z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-[#2d3748] mb-3 group-hover:text-blue-700 transition duration-300">
                {room.type}
              </h3>
              <p className="text-[#4a5568] mb-2 text-sm">{room.beds}</p>
              <div className="flex items-center gap-2 text-[#718096] text-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{room.guests} guests</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RoomTypesDisplay;
