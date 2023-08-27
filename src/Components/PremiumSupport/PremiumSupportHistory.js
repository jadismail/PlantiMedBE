import React, { useState, useEffect } from "react";
import axios from "axios";

function PremiumSupportHistory() {
  const [supportHistory, setSupportHistory] = useState([]);

  useEffect(() => {
    axios
      .get("/api/premiumsupport/history")
      .then((response) => {
        setSupportHistory(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Premium Support History</h2>
      <ul>
        {supportHistory.map((support) => (
          <li key={support.id}>
            <p>Request: {support.request}</p>
            <p>Status: {support.status}</p>
            {/* Additional support history details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PremiumSupportHistory;
