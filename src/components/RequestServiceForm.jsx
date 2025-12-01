import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styles from "./requestServiceForm.module.css";

export default function RequestServiceForm({ worker, onClose }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [clientLocation, setClientLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "requests"), {
        clientName: name,
        phone: contact,
        jobDescription: details,
        clientLocation: clientLocation,
        workerName: worker.name,
        workerId: worker.id,
        date: Date.now(),
        status: "pending",
      });

      alert("Request submitted successfully!");
      onClose();
    } catch (err) {
      console.error("Error saving request:", err);
      alert("Failed to submit request.");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Request Service for {worker.name}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={clientLocation}
            onChange={(e) => setClientLocation(e.target.value)}
            required
          />

          <textarea
            placeholder="Job Description"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />

          <button type="submit">Submit Request</button>
        </form>

        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
