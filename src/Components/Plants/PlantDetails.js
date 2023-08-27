import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/plants/${id}`)
      .then((response) => setPlant(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Plant Details</h2>
      <p>Name: {plant.name}</p>
      <p>Description: {plant.description}</p>
      {/* Add more details */}
    </div>
  );
}

export default PlantDetails;
