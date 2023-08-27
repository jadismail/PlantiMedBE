import { Link } from "react-router-dom";
import "./Home.css";

function Plants() {
  return (
    <section className="plants">
      <div className="plants-header">
        <h2>Discover Featured Plants</h2>
        <p>Explore a variety of stunning plants for your living spaces.</p>
      </div>

      <div className="plant-grid">
        {/* first plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/R.a42fbb9351f9bab95959c3306bf81f7c?rik=PDX4BWfYDCsjPQ&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2018%2f04%2fApple-tree-Photos.jpg&ehk=3o%2fzktqdgIDu%2fOEMep3YyWXH7kZB6sCe4nBVup2kJEE%3d&risl=1&pid=ImgRaw&r=0"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Apple Tree</h3>
            <p>Soil type: Loam</p> <p>Planting Location: Orchard</p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* Second plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/R.9fc38a73c1995888242b23b9349007c1?rik=6lYDezaJbS%2bJIQ&pid=ImgRaw&r=0"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Peach Tree</h3>
            <p>Soil type: Well-draining</p> <p>Planting Location: Backyard</p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* third plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/R.906ed0ad78023a997170920c17be67f3?rik=kJtZBctLHZimkA&pid=ImgRaw&r=0"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Orange Tree</h3>
            <p>Soil type: Sandy</p> <p>Planting Location: Garden</p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="view-all">
        <Link to="/plants" className="view-all-link">
          View All Plants
        </Link>
      </div>
    </section>
  );
}

export default Plants;
