import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Kasa</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
