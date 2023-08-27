import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Diseases() {
  return (
    <section className="plants">
      <div className="plants-header">
        <h2>Discover Featured Diseases</h2>
        <p>Explore common plant diseases and learn how to manage them.</p>
      </div>
      <div className="plant-grid">
        {/* first plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/OIP.9Z2fv2c9wmE_CLx-wvqp-QHaFj?pid=ImgDet&rs=1"
            alt="Apple Scab"
          />
          <div className="plant-content">
            <h3>Apple Scab</h3>
            <p>
              Fungal disease causing scab-like lesions on apple fruit and
              leaves.
            </p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* Second plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/R.db175791dd4c14447b1409385b8124e3?rik=G4gCoYtX8z4wjw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-VIIQwjfwsxU%2fT4RyedQcJcI%2fAAAAAAAAB0c%2foRtVvoeWUks%2fs1600%2fpeach%2bleaf%2bcurl%2b1.jpg&ehk=anUf0YSWyWs3N7IWVg1%2bmoWcvg7%2fzu3es2Mo97a0N34%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Peach Leaf Curl</h3>
            <p>
              Fungal disease causing curling and discoloration of peach leaves.
            </p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* third plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/OIP.ruq8xYpeu0iNzMiFutCXVwHaFk?pid=ImgDet&rs=1"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Citrus Canker</h3>
            <p>
              Bacterial disease causing raised lesions on citrus fruit and
              leaves.
            </p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="view-all">
        <Link to="/diseases" className="view-all-link">
          View All Diseases
        </Link>
      </div>
    </section>
  );
}

export default Diseases;
