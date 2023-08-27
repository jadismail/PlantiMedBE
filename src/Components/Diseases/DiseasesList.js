import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Plants/PlantsList.css";

function PlantsList() {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    // Fetch plants from the backend API
    axios
      .get("https://plantimedbe.azurewebsites.net/api/Diseases")
      .then((response) => {
        console.log(response.data); // Check the data in the console
        setDiseases(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="plants-list">
      <h2>Discover plant diseases</h2>
      <div className="cards-container">
        {diseases.map((disease) => (
          <div key={disease.id} className="plant-card">
            <div className="plant-image">
              <img src={disease.image} alt={disease.name} />
            </div>
            <div className="plant-details">
              <h3 className="plant-name">{disease.name}</h3>
              <p>{disease.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantsList;
