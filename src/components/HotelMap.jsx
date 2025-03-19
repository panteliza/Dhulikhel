import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

import dhulikhelLocation from '../assets/map.png';


const mapImageUrl =
  'https://www.google.com/maps/place/Dhulikhel+Boutique+Hotel/@27.6152524,85.5528116,17z/data=!4m9!3m8!1s0x39eb0903ddc7e36f:0x17296f2295e620c1!5m2!4m1!1i2!8m2!3d27.6152524!4d85.5553865!16s%2Fg%2F11h9zhkzvl?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoASAFQAw%3D%3D';

const Contact = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow ">
        <div className="text-center">
          <h1
            ref={headingRef}
            className=" text-[#2D4591] text-2xl sm:text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards', animationPlayState: 'paused' }}
          >
          A Hidden Gem Awaits, Find Us Here
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-[15px] sm:text-lg text-gray-700"
            style={{ animation: 'fadeInUp 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Experience the perfect blend of luxury and tradition at Dhulikhel Boutique Hotel. Nestled in the heart of nature, we offer world-class hospitality with breathtaking views of the Himalayas. Your journey to relaxation and cultural immersion begins here.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-8">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={dhulikhelLocation}
              alt="Map"
              className="mx-auto max-w-full h-auto"
            />
          </a>
        </div>
      </div>

      

      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
            animation-duration: 0.8s;
          }
          p {
            font-size: 1rem;
            animation-duration: 0.8s;
          }
          img {
            animation-duration: 0.8s;
          }
        }
      `}</style>
      
     
    </div>
  );
};

export default Contact;
