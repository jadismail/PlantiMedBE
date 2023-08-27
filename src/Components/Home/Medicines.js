import { Link } from "react-router-dom";
import "./Home.css";

function Medicines() {
  return (
    <section className="plants">
      <div className="plants-header">
        <h2>Discover Featured Medicines</h2>
        <p>Explore a variety of stunning Medicines for your plants</p>
      </div>

      <div className="plant-grid">
        {/* first plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/R.2bb68948f6a61b32859a48705710d190?rik=FR7NoxCr5DJvIg&pid=ImgRaw&r=0"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Fungicide A</h3>
            <p>Apply as directed on the label</p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* Second plant */}
        <div className="plant">
          <img
            src="https://th.bing.com/th/id/OIP.tG2mMk-tIl9KXeI0OBT5rAHaHa?pid=ImgDet&rs=1"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Copper Spray</h3>
            <p>Spray on affected areas weekly</p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>

        {/* third plant */}
        <div className="plant">
          <img
            src="https://agrostar.com.my/wp-content/uploads/2020/04/77388c081e39288af9009ae13309eec1.jpg"
            alt="Succulent"
          />
          <div className="plant-content">
            <h3>Bactericide B</h3>
            <p>Follow label instructions for application</p>
            <Link to="/plant-details/succulent" className="plant-link">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="view-all">
        <Link to="/medicines" className="view-all-link">
          View All Medicines
        </Link>
      </div>
    </section>
  );
}

export default Medicines;
