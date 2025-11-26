import React, { useState } from "react";
import styles from "./workerform.module.css";

/*
  WorkerForm Component
  --------------------
  - For adding or editing workers
  - You can reuse it inside Admin page later
  - Uses local state for now (API integration later)
*/

export default function WorkerForm({ onSubmit }) {
  // Form state (you will replace with API later)
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    status: "Active",
  });

  // Handles text input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent component (Admin)
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add / Edit Worker</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter worker name"
        required
      />

      <label>Job Title</label>
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
        placeholder="e.g., Plumber, Electrician"
        required
      />

      <label>Status</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Active</option>
        <option>Busy</option>
        <option>Offline</option>
      </select>

      <button type="submit" className={styles.submitBtn}>
        Save Worker
      </button>
    </form>
  );
}
