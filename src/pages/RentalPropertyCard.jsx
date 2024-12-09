import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data"; // Import your data
import "./Home.css";
import "../css/RentalPropertyCard.css";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>At home, everywhere, and anywhere</h1>
      </section>
      <section className="properties-grid">
        {data.map((item) => (
          <div
            key={item.id}
            className="property-card"
            onClick={() => handleCardClick(item.id)}
          >
            <img src={item.cover} alt={item.title} className="property-image" />
            <div className="property-title-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
