import React, { useState } from "react";
import axios from "axios";

function EditProfileForm() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProfile = { displayName, email };

    axios
      .put("/api/userprofile", updatedProfile)
      .then((response) => {
        console.log("Profile updated:", response.data);
        // Reset form fields
        setDisplayName("");
        setEmail("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfileForm;
