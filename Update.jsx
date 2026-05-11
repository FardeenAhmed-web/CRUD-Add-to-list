import React, { useState, useEffect } from "react";

function UpdateForm() {
  // Mock data (this would normally come from API or props)
  const existingData = {
    name: "Fardeen",
    email: "fardeen@example.com",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Load existing data when component mounts
  useEffect(() => {
    setFormData(existingData);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle update submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    // Here you can send updated data to backend via fetch/axios
  };

  return (
    <div className="form-container">
      <h2>Update Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateForm;
