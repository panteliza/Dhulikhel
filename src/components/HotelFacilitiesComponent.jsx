import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Wifi, Bus, Ban, BedDouble, GlassWater, Soup, Utensils,
  ParkingCircle, Sparkles
} from "lucide-react";

const HotelFacilitiesComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const mostPopularFacilities = [
    { icon: <Wifi className="w-5 h-5 text-blue-600" />, name: "Free WiFi" },
    { icon: <Bus className="w-5 h-5 text-blue-600" />, name: "Airport shuttle" },
    { icon: <Ban className="w-5 h-5 text-blue-600" />, name: "Non-smoking rooms" },
    { icon: <Sparkles className="w-5 h-5 text-blue-600" />, name: "Spa and wellness centre" },
    { icon: <Soup className="w-5 h-5 text-blue-600" />, name: "Room service" },
    { icon: <ParkingCircle className="w-5 h-5 text-blue-600" />, name: "Free parking" },
    { icon: <Utensils className="w-5 h-5 text-blue-600" />, name: "Restaurant" },
    { icon: <BedDouble className="w-5 h-5 text-blue-600" />, name: "Family rooms" },
    { icon: <GlassWater className="w-5 h-5 text-blue-600" />, name: "Very good breakfast" },
  ];

  const facilitySections = [
    {
      title: "Bathroom",
      items: ["Private bathroom"]
    },
    {
      title: "Outdoors",
      items: ["Outdoor fireplace", "Outdoor furniture", "BBQ facilities (Additional charge)", "Terrace", "Garden"]
    },
    {
      title: "Activities",
      items: ["Bicycle rental (Additional charge)", "Temporary art galleries (Additional charge)", "Evening entertainment (Additional charge)", "Hiking (Additional charge)"]
    },
    {
      title: "Food & Drink",
      items: ["Fruits (Additional charge)", "Wine/champagne (Additional charge)", "Breakfast in the room", "Bar", "Restaurant"]
    },
    {
      title: "Internet",
      items: ["WiFi is available in public areas and is free of charge"]
    },
    {
      title: "Parking",
      items: ["Free private parking is possible on site (reservation is not needed)", "Parking garage"]
    },
    {
      title: "Reception services",
      items: ["Luggage storage"]
    },
    {
      title: "Entertainment and family services",
      items: ["Babysitting/child services (Additional charge)"]
    },
    {
      title: "Cleaning services",
      items: ["Daily housekeeping", "Laundry (Additional charge)"]
    },
    {
      title: "Business facilities",
      items: ["Fax/photocopying (Additional charge)"]
    },
    {
      title: "Safety & security",
      items: ["Fire extinguishers", "CCTV in common areas"]
    },
    {
      title: "General",
      items: [
        "Shuttle service (Additional charge)",
        "Grocery deliveries (Additional charge)",
        "Designated smoking area",
        "Air conditioning",
        "Non-smoking throughout",
        "Packed lunches",
        "Family rooms",
        "Airport shuttle (Additional charge)",
        "Non-smoking rooms",
        "Room service"
      ]
    },
    {
      title: "Wellness",
      items: [
        "Massage chair",
        "Spa/wellness packages",
        "Spa facilities",
        "Massage (Additional charge)",
        "Spa and wellness centre (Additional charge)",
        "Sauna (Additional charge)"
      ]
    },
    {
      title: "Languages spoken",
      items: ["English"]
    }
  ];

  return (
    <div className="px-6 pt-12 pb-6 max-w-screen-xl mx-auto bg-gradient-to-b from-[#fffaf3] to-[#f3f0e9]">
      <h2
        className="text-4xl font-bold text-center mb-10 text-[#1e293b] tracking-tight"
        data-aos="fade-up"
      >
        Facilities of Dhulikhel Boutique Hotel
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {mostPopularFacilities.map((facility, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 border border-gray-200 bg-gradient-to-br from-[#fff8ef] to-[#e8dbc8] rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            {facility.icon}
            <span className="text-base font-medium text-[#3f3f3f]">{facility.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilitySections.map((section, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#fffaf1] to-[#e6d7c4] border border-gray-300 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] duration-300 hover:border-[#a9784a]"
            data-aos="fade-up"
            data-aos-delay={`${idx * 100}`}
          >
            <h3 className="text-xl font-semibold mb-2 text-[#3e2e1f]">{section.title}</h3>
            <ul className="list-disc list-inside text-sm text-[#4f463d] space-y-1">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelFacilitiesComponent;