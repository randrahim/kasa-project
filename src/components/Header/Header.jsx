import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./LOGO.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* <h1>Kasa</h1> */}
        <img src={logo} alt="logo" />
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
