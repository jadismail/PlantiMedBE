import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function WateringSchedulesList() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios
      .get("/api/wateringschedules")
      .then((response) => setSchedules(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>List of Watering Schedules</h2>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            <Link to={`/wateringschedules/${schedule.id}`}>
              {schedule.plantName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WateringSchedulesList;
