import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DiseaseDetails() {
  const { id } = useParams();
  const [disease, setDisease] = useState({});

  useEffect(() => {
    axios
      .get(`/api/diseases/${id}`)
      .then((response) => setDisease(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>Disease Details</h2>
      <h3>Name: {disease.name}</h3>
      <p>Description: {disease.description}</p>
    </div>
  );
}

export default DiseaseDetails;
