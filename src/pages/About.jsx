import React, { useState } from "react";
import "../css/About.scss";

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
        "The announcements posted on Kasa guarantee total reliability. The photos match the accommodations, and all information is regularly verified by our teams.",
    },
    {
      title: "Respect",
      content:
        "Kindness is one of the founding values of Kasa. Any discriminatory behavior or disturbance to the neighborhood will result in exclusion from our platform.",
    },
    {
      title: "Service",
      content:
        "Kindness is one of the founding values of Kasa. Any discriminatory behavior or disturbance to the neighborhood will result in exclusion from our platform.",
    },
    {
      title: "Security",
      content:
        "Security is Kasa's priority. Both for our hosts and travelers, each accommodation meets the security criteria established by our services. By leaving a rating for the host or tenant, this allows our teams to verify that standards are being respected. We also organize workshops on home security for our hosts.",
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
