import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <h1>Hello World</h1>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
