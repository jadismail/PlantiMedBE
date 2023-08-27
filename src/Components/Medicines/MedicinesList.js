import React, { useState, useEffect } from "react";
import axios from "axios";

const MedicinesList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios
      .get("https://plantimedbe.azurewebsites.net/api/Medicines")
      .then((response) => {
        setMedicines(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="plants-list">
      <h2>Discover Our Medicines</h2>
      <div className="cards-container">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="plant-card">
            <div className="plant-image">
              <img src={medicine.image} alt={medicine.name} />
            </div>
            <div className="plant-details">
              <h3 className="plant-name">{medicine.name}</h3>
              <p>Usage instructions: {medicine.usageInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinesList;
