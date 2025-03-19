import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What kind of breakfast is served at Dhulikhel Boutique Hotel?",
    answer:
      "Guests enjoy a variety of breakfast options including continental, buffet, and American prepared fresh each morning.",
  },
  {
    question: "What type of room can I book at Dhulikhel Boutique Hotel?",
    answer:
      "The hotel offers Deluxe Twin Rooms, Family Rooms, Budget Rooms, and Deluxe Triple Rooms with various bed configurations.",
  },
  {
    question: "What are the check-in and check-out times at Dhulikhel Boutique Hotel?",
    answer:
      "Check-in starts from 12:00 PM and check-out is until 11:00 AM, with early check-in options based on availability.",
  },
  {
    question: "How much does it cost to stay at Dhulikhel Boutique Hotel?",
    answer:
      "Prices vary depending on room type and dates. It’s best to check the latest rates on the hotel’s booking page or contact the hotel directly.",
  },
  {
    question: "Does Dhulikhel Boutique Hotel have a restaurant on site?",
    answer:
      "Yes, the hotel has an in-house restaurant that serves a variety of local and international dishes.",
  },
  {
    question: "What is there to do at Dhulikhel Boutique Hotel?",
    answer:
      "Guests can enjoy spa and wellness treatments, explore nearby hiking trails, visit cultural heritage sites, or simply relax with garden views.",
  },
  {
    question: "How far is Dhulikhel Boutique Hotel from the centre of Dhulikhel?",
    answer: "Dhulikhel Boutique Hotel is 600 m from the centre of Dhulikhel.",
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#f0fff4] to-[#d9fbe9] py-6  px-4 sm:px-8 md:px-16 lg:px-24 w-full">
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl font-bold text-green-900"
          data-aos="fade-down"
        >
          FAQs about Dhulikhel Boutique Hotel
        </h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-green-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
              activeIndex === index ? "bg-green-100" : "bg-green-50"
            }`}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === index
                  ? "bg-green-200 text-green-900"
                  : "hover:bg-green-100 text-green-800"
              } transition-colors duration-300`}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span
                className={`transform transition-transform duration-300 text-2xl font-bold ${
                  activeIndex === index ? "rotate-45 text-green-900" : ""
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div
                className="p-4 text-sm text-green-900 bg-green-100 transition-all duration-300"
                data-aos="fade-in"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
