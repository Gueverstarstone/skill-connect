import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Your Firebase setup
import RequestServiceForm from "../components/RequestServiceForm";
import styles from "./workerdetails.module.css"; // Ensure this CSS matches the one in the worker's profile

export default function ClientDetail() {
  const { id } = useParams(); // Get worker ID from URL params
  const [client, setClient] = useState(null); // State to store client details
  const [showForm, setShowForm] = useState(false); // State to show/hide the request form

  useEffect(() => {
    async function fetchClient() {
      try {
        const docRef = doc(db, "workers", id); // Get client by ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setClient({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Client not found");
        }
      } catch (err) {
        console.error("Error fetching client:", err);
      }
    }

    fetchClient(); // Fetch client data when the component mounts
  }, [id]);

  // Display a loading message while the client data is being fetched
  if (!client) return <p>Loading client...</p>;

  return (
    <div className={styles.container}>
      {/* Worker name */}
      <h1 className={styles.title}>{client.name}</h1>

      {/* Worker image */}
      <img
        src={client.img?.src || "default-avatar.jpg"} // Use a default image if none exists
        alt={client.name}
        className={styles.avatar}
      />

      {/* Display client details */}
      <div className={styles.detailsCard}>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Title:</span> {client.title}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>About:</span> {client.about}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Availability:</span> {client.availability}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Experience:</span> {client.experience}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Country:</span> {client.country}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Hourly Rate:</span> {client.hourlyRate} KES
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Phone:</span> {client.phone}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Ratings:</span> {client.ratings} ⭐
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Languages:</span> {client.languages?.join(", ")}
        </p>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Services:</span> {client.services?.join(", ")}
        </p>
      </div>

      {/* Google Maps link */}
      <div className={styles.detailsCard}>
        <p className={styles.subtitle}>
          <span className={styles.highlight}>Location:</span>
          <a href={client.googleMapsLink} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </p>
      </div>

      {/* Button to show request service form */}
      <div className={styles.profileButtons}>
        <button onClick={() => setShowForm(true)}>Request Service</button>
      </div>

      {/* Show the request service form when needed */}
      {showForm && <RequestServiceForm worker={client} onClose={() => setShowForm(false)} />}
    </div>
  );
}
