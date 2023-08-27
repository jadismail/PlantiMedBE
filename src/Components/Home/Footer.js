// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../../Images/PlantiMed.jpeg";
import Insta from "../../Images/insta.png";
import Facebook from "../../Images/Facebook.png";
import Twitter from "../../Images/Twitter.png";
import LinkedIn from "../../Images/LinkedIn.jpg";

function Footer() {
  return (
    <footer id="Footer" className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="PlantiMed Logo" className="footer-logo-img" />
          <p className="footer-tagline">Bringing Nature Indoors</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/sponsorship">Sponsorship</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-social">
          <a href="facebook-link">
            <img src={Facebook} alt="Facebook" className="footer-social-icon" />
          </a>
          <a href="twitter-link">
            <img src={Twitter} alt="Twitter" className="footer-social-icon" />
          </a>
          <a href="instagram-link">
            <img src={Insta} alt="Instagram" className="footer-social-icon" />
          </a>
          <a href="linkedin-link">
            <img src={LinkedIn} alt="LinkedIn" className="footer-social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PlantiMed. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
