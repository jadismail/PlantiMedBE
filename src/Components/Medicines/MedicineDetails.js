import React, { useState, useEffect } from "react";
import axios from "axios";

function MedicineDetails(props) {
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    const { id } = props.match.params;
    axios
      .get(`/api/medicines/${id}`)
      .then((response) => {
        setMedicine(response.data);
      })
      .catch((error) => console.error(error));
  }, [props.match.params]);

  return (
    <div>
      <h2>Medicine Details</h2>
      {medicine && (
        <div>
          <p>Name: {medicine.name}</p>
          <p>Description: {medicine.description}</p>
          {/* Additional medicine details */}
        </div>
      )}
    </div>
  );
}

export default MedicineDetails;
