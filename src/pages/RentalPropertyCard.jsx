import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import "../css/RentalPropertyCard.css";

const RentalPropertyCard = () => {
  const { id } = useParams();
  const property = data.find((item) => item.id === id);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isAmenitiesOpen, setIsAmenitiesOpen] = useState(false);

  if (!property) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Property not found.</p>
      </div>
    );
  }

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleAmenities = () => {
    setIsAmenitiesOpen(!isAmenitiesOpen);
  };

  return (
    <div className="rental-property-card">
      {/* Image Section */}
      <section className="property-header">
        <img
          src={property.cover}
          alt={property.title}
          className="property-image-carousel"
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
              <p>{property.host.name}</p>
              <img
                src={property.host.picture}
                alt={property.host.name}
                className="host-picture"
              />
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
        {/* Description Dropdown */}
        <div className="dropdown">
          <div className="dropdown-header" onClick={toggleDescription}>
            <span>Description</span>
            <span
              className={`dropdown-arrow ${isDescriptionOpen ? "open" : ""}`}
            >
              ⬆
            </span>
          </div>
          <div
            className={`dropdown-content ${isDescriptionOpen ? "open" : ""}`}
          >
            <p>{property.description}</p>
          </div>
        </div>

        {/* Amenities Dropdown */}
        <div className="dropdown">
          <div className="dropdown-header" onClick={toggleAmenities}>
            <span>Amenities</span>
            <span className={`dropdown-arrow ${isAmenitiesOpen ? "open" : ""}`}>
              ⬆
            </span>
          </div>
          <div className={`dropdown-content ${isAmenitiesOpen ? "open" : ""}`}>
            <ul>
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalPropertyCard;
