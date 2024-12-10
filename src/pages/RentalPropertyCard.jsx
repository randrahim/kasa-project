import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import "../css/RentalPropertyCard.css";

const RentalPropertyCard = () => {
  const { id } = useParams();
  const property = data.find((item) => item.id === id);

  if (!property) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Property not found.</p>
      </div>
    );
  }

  return (
    <div className="rental-property-card">
      {/* Image Section */}
      <section className="property-header">
        <img
          src={property.cover}
          alt={property.title}
          className="property-image"
        />
        <div className="property-header-content">
          {/* Left Section */}
          <div className="property-header-left">
            <h1>{property.title}</h1>
            <p>{property.location}</p>
            <div className="tags">
              {property.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="property-header-right">
            <div className="host-info">
              <img
                src={property.host.picture}
                alt={property.host.name}
                className="host-picture"
              />
              <p>{property.host.name}</p>
            </div>
            <div className="rating">
              {Array.from({ length: property.rating }).map((_, index) => (
                <span key={index}>★</span>
              ))}
              {Array.from({ length: 5 - property.rating }).map((_, index) => (
                <span key={index} style={{ color: "#ddd" }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description and Amenities Section */}
      <section className="property-details">
        <div className="detail-box">
          <h2>Description</h2>
          <p>{property.description}</p>
        </div>
        <div className="detail-box">
          <h2>Amenities</h2>
          <ul>
            {property.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RentalPropertyCard;
