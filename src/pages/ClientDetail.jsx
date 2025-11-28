import React from "react";
import { useParams } from "react-router-dom";
import ClientData from "./ClientsData";

function ClientDetails() {
  const { id } = useParams();
  const clientId = Number(id);
  const client = ClientData.find((c) => c.id === clientId);

  if (!client) {
    return <div style={{ padding: 20 }}>Client not found.</div>;
  }

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

      {/* Main Information */}
      <div className="worker-info-card">
        <h2>About</h2>

        {/* About text */}
        <p className="worker-description">{client.about || client.text}</p>

        {/* Two-column section: left = services & languages, right = rate, contact, location */}
        <div className="two-column-info">
          {/* LEFT COLUMN */}
          <div className="left-col">
            {client.services && client.services.length > 0 && (
              <>
                <h3>Services</h3>
                <ul>
                  {client.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </>
            )}

            {client.languages && client.languages.length > 0 && (
              <>
                <h3>Languages</h3>
                <p>{client.languages.join(", ")}</p>
              </>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-col">
            {client.hourlyRate && (
              <>
                <h3>Hourly Rate</h3>
                <p>{client.hourlyRate}</p>
              </>
            )}

            {client.availability && (
              <>
                <h3>Availability</h3>
                <p>{client.availability}</p>
              </>
            )}

            {client.phone && (
              <>
                <h3>Contact</h3>
                <p>
                  <strong>Phone:</strong> {client.phone}
                </p>
              </>
            )}

            {client.googleMapsLink && (
              <>
                <h3>Location</h3>
                <a
                  href={client.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Google Maps
                </a>
              </>
            )}
          </div>
        </div>

        {/* Request Service Button */}
        <button className="client-button request-btn">Request Service</button>
      </div>
    </div>
  );
}

export default ClientDetails;
