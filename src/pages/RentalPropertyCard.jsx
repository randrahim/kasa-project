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
      <section className="property-header">
        <img
          src={property.cover}
          alt={property.title}
          className="property-image"
        />
        <h1>{property.title}</h1>
        <p>{property.location}</p>
        <div className="tags">
          {property.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>
      <section className="property-details">
        <h2>Description</h2>
        <p>{property.description}</p>

        <h2>Host</h2>
        <div className="host-info">
          <img
            src={property.host.picture}
            alt={property.host.name}
            className="host-picture"
          />
          <p>{property.host.name}</p>
        </div>

        <h2>Amenities</h2>
        <ul>
          {property.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RentalPropertyCard;
