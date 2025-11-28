import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequestServiceForm from "../components/RequestServiceForm"; // import the form

function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [showForm, setShowForm] = useState(false); // state to toggle form

  useEffect(() => {
    fetch(`http://localhost:3000/workers/${id}`)
      .then((res) => res.json())
      .then((data) => setClient(data))
      .catch((error) => console.log("Error fetching client:", error));
  }, [id]);

  if (!client) {
    return <div style={{ padding: 20 }}>Client not found.</div>;
  }

  // Handle form submission
  const handleRequestSubmit = (formData) => {
    const newRequest = {
      id: Date.now(), // unique id for request
      workerId: client.id,
      workerName: client.name,
      workerTitle: client.title,
      clientName: formData.clientName,
      clientPhone: formData.phone,
      location: formData.location,
      jobDescription: formData.jobDescription,
      status: "Pending",
    };

    // Save request to localStorage (or send to backend)
    const savedRequests = JSON.parse(localStorage.getItem("serviceRequests")) || [];
    savedRequests.push(newRequest);
    localStorage.setItem("serviceRequests", JSON.stringify(savedRequests));

    alert("Request submitted successfully!");
    setShowForm(false); // close the form
  };

  return (
    <div className="worker-details-container">
      {/* Top Header */}
      <div className="worker-header">
        <img
          className="worker-image"
          src={client.img.src}
          alt={client.img.alt}
        />
        <div className="worker-header-info">
          <h1 className="worker-name">{client.name}</h1>
          <p className="worker-title">{client.title}</p>
          <div className="worker-meta">
            <span className="worker-rating">⭐ {client.ratings}</span>
            <span className="worker-experience">{client.experience}</span>
            <span className="worker-country">🌍 {client.country}</span>
          </div>
        </div>
      </div>

      <div className="worker-info-card">
        <h2>About</h2>
        <p className="worker-description">{client.about}</p>

        <div className="two-column-info">
          <div className="left-col">
            <h3>Services</h3>
            <ul>
              {client.services?.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <h3>Languages</h3>
            <p>{client.languages?.join(", ")}</p>
          </div>

          <div className="right-col">
            <h3>Hourly Rate</h3>
            <p>{client.hourlyRate}</p>

            <h3>Availability</h3>
            <p>{client.availability}</p>

            <h3>Contact</h3>
            <p><strong>Phone:</strong> {client.phone}</p>

            <h3>Location</h3>
            <a href={client.googleMapsLink} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
        </div>

        <button
          className="client-button request-btn"
          onClick={() => setShowForm(true)}
        >
          Request Service
        </button>

        {/* Show the form modal */}
        {showForm && (
          <RequestServiceForm
            onSubmit={handleRequestSubmit}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default ClientDetails;
