import React, { useState } from "react";
import axios from "axios";

function DiseaseForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDisease = { name, description };

    axios
      .post("/api/diseases", newDisease)
      .then((response) => {
        console.log("Disease created:", response.data);
        // Reset form fields
        setName("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add a New Disease</h2>
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
        <button type="submit">Add Disease</button>
      </form>
    </div>
  );
}

export default DiseaseForm;
