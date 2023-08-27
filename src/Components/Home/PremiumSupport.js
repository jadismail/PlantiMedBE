import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function PremiumSupport() {
  return (
    <section className="premium-support">
      <div className="premium-support-content">
        <h2>Unlock Expert Plant Care with Premium Support</h2>
        <p>
          Experience unparalleled care and guidance from our horticultural
          specialists.
        </p>
        <ul className="premium-features">
          <li>Direct access to plant experts for personalized advice.</li>
          <li>Comprehensive diagnosis and tailored solutions.</li>
          <li>Customized care plans to ensure your plants thrive.</li>
        </ul>
        <Link to="/premium-support" className="cta-button">
          Elevate Your Plant Care
        </Link>
      </div>
    </section>
  );
}

export default PremiumSupport;
