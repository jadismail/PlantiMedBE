import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function WateringScheduleDetails() {
  const { id } = useParams();
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    axios
      .get(`/api/wateringschedules/${id}`)
      .then((response) => setSchedule(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>Watering Schedule Details</h2>
      <h3>Plant Name: {schedule.plantName}</h3>
      <p>Frequency: {schedule.frequency}</p>
      <p>Last Watering Date: {schedule.lastWateringDate}</p>
    </div>
  );
}

export default WateringScheduleDetails;
