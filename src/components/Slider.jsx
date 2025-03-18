import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

// Consultancy Images
import consultancy6 from "../assets/1.jpeg";
import consultancy5 from "../assets/d9.jpg";
import consultancy1 from "../assets/a.jpeg";
import consultancy2 from "../assets/b.jpeg";
import consultancy3 from "../assets/28.jpeg";
import consultancy4 from "../assets/29.jpeg";

// Hotel Images
import hotel1 from "../assets/53.jpeg";


const images = [
  { src: consultancy5, alt: "hotel4" },
  { src: consultancy6, alt: "hotel4" },
  { src: consultancy1, alt: "hotel1" },
  { src: consultancy2, alt: "hotel2" },
  { src: consultancy3, alt: "hotel3" },
  { src: consultancy4, alt: "hotel4" },

  
  { src: hotel1, alt: "Luxury Hotel Lobby" },
 
];

export default function Slider() {
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="w-full relative z-[0] bg-gray-100">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        modules={[Autoplay, EffectFade]}
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative transition-transform duration-1000 ease-in-out transform hover:scale-105">
              {!loaded[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse z-10">
                  <span className="text-gray-400 text-lg">Loading...</span>
                </div>
              )}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-[400px] sm:h-[620px] md:h-[640px] 2xl:h-[900px] object-cover object-center transition-opacity duration-700 ease-in-out ${
                  loaded[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-pulse {
            background: linear-gradient(90deg, rgba(200, 200, 200, 0.2) 25%, rgba(240, 240, 240, 0.4) 50%, rgba(200, 200, 200, 0.2) 75%);
            background-size: 400% 100%;
            animation: fadeIn 1.5s infinite linear;
          }
        `}
      </style>
    </div>
  );
}
