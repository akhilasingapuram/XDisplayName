import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isFormValid);
    if (isFormValid) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Display full Name</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
      {fullName && <h2>FullName: {fullName}</h2>}
    </div>
  );
};
export default DisplayName;
