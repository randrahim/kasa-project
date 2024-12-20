import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import RentalPropertyCard from "./pages/RentalPropertyCard";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/kasa-project">Return to home page</a>
    </div>
  );
}

// Future flag solution
const futureFlags = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
  },
};

function App() {
  return (
    <Router basename="/kasa-project" {...futureFlags}>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<RentalPropertyCard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
