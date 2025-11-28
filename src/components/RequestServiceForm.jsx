import React, { useState } from "react";
import { createRequest } from "../api/api"; // import your API function
import styles from "./requestServiceForm.module.css";

export default function RequestServiceForm({ onClose }) {
  const [formData, setFormData] = useState({
    clientName: "",
    phone: "",
    location: "",
    jobDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { clientName, phone, location, jobDescription } = formData;

    if (!clientName || !phone || !location || !jobDescription) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const savedRequest = await createRequest(formData);
      alert("Request submitted successfully!");
      console.log("Saved request:", savedRequest);

      // Reset form
      setFormData({ clientName: "", phone: "", location: "", jobDescription: "" });

      // Close modal if needed
      onClose();
    } catch (err) {
      console.error(err);
      setError("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Request Service</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Client Name</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />

          <label>Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            placeholder="Describe the service you need"
            required
          />

          <div className={styles.buttons}>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"}
            </button>
            <button type="button" onClick={onClose} className={styles.closeBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
