import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Make sure to create this CSS file
import Logo from "../../Images/PlantiMed.jpeg";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="PlantiMed Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/plants" className="nav-link">
          Plants
        </Link>
        <Link to="/diseases" className="nav-link">
          Diseases
        </Link>
        <Link to="/premium-support" className="nav-link">
          Premium Support
        </Link>
        <a href="#Features" className="nav-link">
          About Us
        </a>
        <a href="#Footer" className="nav-link">
          Contact Us
        </a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for plants, diseases, etc." />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
}

export default Header;
