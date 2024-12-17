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
      <div className="banner-image"></div>
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
              <span
                className={`accordion-arrow ${
                  openAccordions.includes(index) ? "open" : ""
                }`}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </span>
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
