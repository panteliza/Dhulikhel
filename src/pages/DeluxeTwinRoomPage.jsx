import React from "react";
import { motion } from "framer-motion";
import { Users, Tv, Fan, ShowerHead, BedDouble, Coffee, Eye, Thermometer, Check } from "lucide-react";
import abc from "../assets/11.jpg";
import Navbar from "../components/Navbar";

const DeluxeTwinRoomPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
     <Navbar/>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-8 p-6 md:p-12 items-start">
        <motion.img 
          src={abc} // Replace with actual path or dynamic import
          alt="Deluxe Twin Room"
          className="rounded-xl shadow-md w-full h-auto object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Deluxe Twin Room</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> Garden view</span>
            <span className="flex items-center gap-1"><Fan className="w-4 h-4" /> Air conditioning</span>
            <span className="flex items-center gap-1"><ShowerHead className="w-4 h-4" /> Private bathroom</span>
            <span className="flex items-center gap-1"><Tv className="w-4 h-4" /> Flat-screen TV</span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            Offering free toiletries, this twin room includes a private bathroom with a shower and slippers. The air-conditioned twin room offers a flat-screen TV with cable channels, a tea and coffee maker, a seating area, a wardrobe as well as garden views. The unit offers 2 beds. <br /> Comfy beds, 8.9 – Based on 24 reviews.
          </p>

          <div>
            <h3 className="text-lg font-semibold mt-4">Room Size:</h3>
            <p className="text-gray-600 text-sm">13 m² - 2 single beds <BedDouble className="inline w-4 h-4" /></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">In your private bathroom:</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Free toiletries</li>
              <li>Shower</li>
              <li>Toilet</li>
              <li>Towels</li>
              <li>Slippers</li>
              <li>Toilet paper</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Facilities:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-1 text-sm text-gray-600 list-disc list-inside">
              <li>Air conditioning</li>
              <li>Flat-screen TV</li>
              <li>Hardwood or parquet floors</li>
              <li>Electric kettle</li>
              <li>Linen</li>
              <li>Outdoor furniture</li>
              <li>Seating Area</li>
              <li>Cable channels</li>
              <li>Video</li>
              <li>Wake-up service</li>
              <li>Telephone</li>
              <li>Wardrobe or closet</li>
              <li>Satellite channels</li>
              <li>Entire unit located on ground floor</li>
              <li>Tea/Coffee maker</li>
              <li>Clothes rack</li>
              <li>Heating</li>
              <li>Hand sanitiser</li>
            </ul>
          </div>

          <p className="text-sm text-gray-700 mt-4"><strong>Smoking:</strong> No smoking</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-gray-600 text-sm border-t mt-auto">
        © {new Date().getFullYear()} Dhulikhel Boutique Hotel. All rights reserved.
      </footer>
    </div>
  );
};

export default DeluxeTwinRoomPage;
