import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import data from "../data/data.js";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>At home, everywhere, and anywhere</h1>
      </section>

      {/* Rental Properties Grid */}
      <section className="properties-grid">
        {data.map((item) => (
          <div
            key={item.id}
            className="property-card"
            onClick={() => handleCardClick(item.id)}
          >
            <img src={item.cover} alt={item.title} className="property-image" />
            <p className="property-title">{item.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
