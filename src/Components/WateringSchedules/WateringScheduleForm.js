import React, { useState } from "react";
import axios from "axios";

function WateringScheduleForm() {
  const [plantName, setPlantName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [lastWateringDate, setLastWateringDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSchedule = { plantName, frequency, lastWateringDate };

    axios
      .post("/api/wateringschedules", newSchedule)
      .then((response) => {
        console.log("Watering schedule created:", response.data);
        // Reset form fields
        setPlantName("");
        setFrequency("");
        setLastWateringDate("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Add a New Watering Schedule</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Plant Name:
          <input
            type="text"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Frequency:
          <input
            type="text"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Watering Date:
          <input
            type="text"
            value={lastWateringDate}
            onChange={(e) => setLastWateringDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Watering Schedule</button>
      </form>
    </div>
  );
}

export default WateringScheduleForm;
