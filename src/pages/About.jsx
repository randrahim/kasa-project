import React, { useState } from "react";
import "../css/About.css";

function About() {
  const [openAccordions, setOpenAccordions] = useState([]); // Array to track open accordions

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      // If already open, remove it from the array (close it)
      setOpenAccordions(openAccordions.filter((i) => i !== index));
    } else {
      // Otherwise, add it to the array (open it)
      setOpenAccordions([...openAccordions, index]);
    }
  };

  const accordionItems = [
    {
      title: "Reliability",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Respect",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Service",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Security",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div className="about-container">
      <div className="banner">
        <img
          src="https://s3-alpha-sig.figma.com/img/56fa/e17e/b9995860bb6384a77ca7dc9bf52da3be?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHRE6y-SztnqCkmrfgqnD4lIxxJChpg1MfgXLBBOnMIYmK4USEH1QnyiYOgLOVLg5Xk-mvOrGNiC6vo6IoCTxZnRO4y6grAT6TGBpXfeqBXPO5B0AmegUilme35S6nLtyzBlNSDNfeNFxGpXyKTzh8IZM4VnOS3v2FCfoSAePEOIfTnVRv7ZMIzzCggjdQgUGfjCXp1fGJYVb82VRm64XyuHlcbA5mPqoN7VLaDllhc0ezCAM-kDtG6wd0jDQ-imPpjPtjaLW~rHIyQRiqATzdRjHreXY5DdmFfzzVQSRao3NfLU4Sa-2T1kovfDS-CNF7KYzChY6dZ-cgAE8Rbi9Q__"
          alt="Scenic Banner"
          className="banner-image"
        />
      </div>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className={`accordion-item ${
              openAccordions.includes(index) ? "active" : ""
            }`}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span>{openAccordions.includes(index) ? "▲" : "▼"}</span>
            </div>
            {openAccordions.includes(index) && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
