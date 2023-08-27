// src/components/Plants/PlantForm.js
import React, { useState } from "react";
import axios from "axios";

function PlantForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlant = { name, description };

    axios
      .post("/api/plants", newPlant)
      .then((response) => {
        console.log("Plant created:", response.data);
        // Reset form fields
        setName("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add a New Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default PlantForm;
