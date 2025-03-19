import React, { useEffect } from "react";
import { Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

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

const RoomTypesDisplay = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div style={{ padding: "3rem 1.5rem", maxWidth: "1280px", margin: "0 auto", background: "linear-gradient(to bottom, #f0fff4, #ebf8ff)" }}>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "3rem",
          color: "#1a202c",
          letterSpacing: "-0.5px"
        }}
        data-aos="fade-up"
      >
        ✨ Luxurious Room Types
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {roomTypes.map((room, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "1.5rem",
              padding: "1.5rem",
              background: "linear-gradient(to bottom right, #d1fae5, #ffffff, #bfdbfe)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#2d3748", marginBottom: "0.75rem" }}>{room.type}</h3>
            <p style={{ color: "#4a5568", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{room.beds}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#4a5568", fontSize: "0.9rem" }}>
              <Users style={{ width: "1rem", height: "1rem", color: "#3b82f6" }} />
              <span>{room.guests} guests</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypesDisplay;