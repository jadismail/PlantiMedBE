import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PlantsList.css"; // Import your custom CSS for styling

function PlantsList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch plants from the backend API
    axios
      .get("https://plantimedbe.azurewebsites.net/api/Plants")
      .then((response) => {
        setPlants(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="plants-list">
      <h2>Discover Our Plants</h2>
      <div className="cards-container">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <div className="plant-image">
              <img src={plant.image} alt={plant.name} />
            </div>
            <div className="plant-details">
              <h3 className="plant-name">{plant.name}</h3>
              <p>Soil Type: {plant.soilType}</p>
              <p>Planting Location: {plant.plantingLocation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantsList;
