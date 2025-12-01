import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styles from "./requestServiceForm.module.css";

export default function RequestServiceForm({ worker, onClose }) {
  const [formData, setFormData] = useState({
    clientName: "",
    phone: "",
    location: "",
    jobDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const kenyaPhoneRegex = /^(?:\+254|254|0)(7|1)\d{8}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { clientName, phone, location, jobDescription } = formData;
    if (!clientName || !phone || !location || !jobDescription) return alert("Fill all fields");
    if (!kenyaPhoneRegex.test(phone)) return alert("Invalid Kenyan phone number");

    const requestBody = {
      workerId: worker.id,
      workerName: worker.name,
      speciality: worker.speciality || worker.title,
      clientName,
      phone,
      location,
      jobDescription,
      status: "pending",
      date: new Date().toISOString()
    };

    try {
      setLoading(true);
      await addDoc(collection(db, "requests"), requestBody);
      alert("Request submitted successfully!");
      setFormData({ clientName: "", phone: "", location: "", jobDescription: "" });
      onClose();
    } catch (err) {
      console.error(err);
      setError("Failed to submit request");
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
          <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={(e) => {
            const value = e.target.value.replace(/[^0-9+]/g, "");
            setFormData({ ...formData, phone: value });
          }} placeholder="e.g. 0712345678" required />

          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />

          <label>Job Description</label>
          <textarea name="jobDescription" value={formData.jobDescription} onChange={handleChange} required />

          <div className={styles.buttons}>
            <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Request"}</button>
            <button type="button" onClick={onClose} className={styles.closeBtn}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
