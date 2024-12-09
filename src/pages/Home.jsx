// import React from "react";

// function Home() {
//   return (
//     <div>
//       <h1>This is Home page</h1>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import "../css/Home.css";
// import "../css/About.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>At home, everywhere, and anywhere</h1>
      </section>

      {/* Rental Properties Grid */}
      <section className="properties-grid">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div key={index} className="property-card">
              <p>Title of the rental property</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
