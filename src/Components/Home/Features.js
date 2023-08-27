import React from "react";
import "./Home.css";

function Features() {
  return (
    <section id="Features" className="features">
      <div className="feature">
        <img
          src="https://icon-library.com/images/plant-icon/plant-icon-6.jpg"
          alt="Feature 1"
          className="feature-icon"
        />
        <div className="feature-content">
          <h2>Comprehensive Plant Database</h2>
          <p>
            Welcome to PlantiMed, your ultimate resource for all things related
            to plant care. Our comprehensive plant database offers a wealth of
            information on various plant species, complete with detailed growth
            requirements, care tips, and visual references. Whether you're a
            seasoned gardener or a beginner, you'll find valuable insights to
            help you nurture your plants to thrive.
          </p>
          <p>
            Easily diagnose and address plant diseases with personalized
            solutions. Benefit from the wisdom of seasoned farmers and
            agricultural experts. Create tailored care plans for your plants'
            optimal health, and access a wealth of effective medication
            recommendations. Engage in collaborative problem-solving through
            interactive Q&A forums to enhance your plant care knowledge.
          </p>
          <p>
            Stay up-to-date with the latest agricultural research and enjoy a
            seamless user experience on both desktop and mobile devices.
            PlantiMed is here to empower your plant care journey and ensure your
            green companions thrive.
          </p>
        </div>
      </div>
      {/* Add more feature divs */}
    </section>
  );
}

export default Features;
