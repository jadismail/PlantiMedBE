import React, { useState } from "react";
import axios from "axios";
import "./PremiumSupport.css";

function PremiumSupportRequest() {
  const [requestText, setRequestText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSupportRequest = { request: requestText };

    axios
      .post("/api/premiumsupport", newSupportRequest)
      .then((response) => {
        console.log("Premium support request created:", response.data);
        // Reset form fields
        setRequestText("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="premium-support-container">
      <div className="navbar">
        <img
          src="https://www.aspnix.com/wp-content/uploads/2020/07/premiumsupport-subbanner-1024x152.jpg"
          alt="Premium Support"
          className="premium-support-logo"
        />
      </div>
      <div className="premium-support-content">
        <div className="content-section">
          <h1>Luxurious Premium Support</h1>
          <p>
            Experience the ultimate in plant care with our premium support
            service. Our dedicated experts are here to provide you with
            personalized assistance and guidance.
          </p>
          <p>
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, our team is ready to address your concerns and help
            your plants thrive.
          </p>
        </div>
        <div className="content-section">
          <h2>Benefits of Premium Support</h2>
          <ul>
            <li>24/7 access to plant experts</li>
            <li>Customized care plans</li>
            <li>Disease diagnosis and solutions</li>
            <li>Personalized growth strategies</li>
            <li>Exclusive plant care resources</li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Submit Your Inquiry</h2>
          <p>
            To begin your premium support journey, provide us with some details
            about your plants and the assistance you need. Our experts will
            review your inquiry and provide you with tailored recommendations.
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Describe Your Plant Inquiry:
              <textarea
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                placeholder="Tell us about your plant concerns..."
              />
            </label>
            <button type="submit">Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PremiumSupportRequest;
