import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
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
      <a href="/">Return to home page</a>
    </div>
  );
}

function App() {
  return (
    <Router basename="/kasa-project">
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
