import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

// Importing images from assets
import image1 from "../assets/belgium.png";
import image2 from "../assets/colombia.png";
import image3 from "../assets/india.png";
import image4 from "../assets/usa.png";
import image5 from "../assets/nepal.png"; // Add additional images if you have them
import image6 from "../assets/australia.png";

const reviews = [
  {
    image: image1,
    name: "Anne",
    country: "Belgium",
    review:
      "What a gem! Not only was Dhulikhel a pleasant surprise, so was the hotel! Beautiful rooms and great massage therapists. Short walk from the bus park.",
    rating: 5,
  },
  {
    image: image2,
    name: "Nicolás",
    country: "Colombia",
    review:
      "All the installations are clean and well designed. From the entrance, you can see the attention to detail. Staff is extremely friendly and helpful.",
    rating: 5,
  },
  {
    image: image3,
    name: "Ishwar",
    country: "India",
    review:
      "Big rooms, amazing people, phenomenal food especially the Nepali thali. They even helped us with taxis!",
    rating: 4,
  },
  {
    image: image4,
    name: "Laura",
    country: "USA",
    review:
      "The view from the balcony was stunning. The peaceful atmosphere and the beautiful architecture made our stay unforgettable.",
    rating: 5,
  },
  {
    image: image5,
    name: "Karan",
    country: "Nepal",
    review:
      "The traditional design mixed with modern comfort was impressive. Great hospitality, and the food was authentic and delicious.",
    rating: 5,
  },
  {
    image: image6,
    name: "Maya",
    country: "Australia",
    review:
      "A hidden gem in Dhulikhel. The rooms were spotless, the garden was lovely, and the staff treated us like family.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center  mb-4">
          What Our Guests Say
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>

        {/* Swiper Slider */}
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center max-w-xs mx-auto">
                {/* Profile Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />

                {/* Guest Name and Country */}
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{review.country}</p>

                {/* Star Rating */}
                <div className="flex justify-center items-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-yellow-500 text-lg mr-0.5"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <AiFillStar
                      key={`empty-${i}`}
                      className="text-gray-300 text-lg mr-0.5"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm text-center">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
