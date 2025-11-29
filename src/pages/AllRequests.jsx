import React, { useEffect, useState } from "react";
import { getRequests, updateRequestStatus, deleteRequest } from "../api/api";
import styles from "./allRequests.module.css";

export default function AllRequests() {
  const [requests, setRequests] = useState([]);

  // Load all requests
  useEffect(() => {
    async function loadRequests() {
      try {
        const data = await getRequests();
        setRequests(data);
      } catch (error) {
        console.error("Failed to load requests:", error);
      }
    }
    loadRequests();
  }, []);

  // Update request status or delete if completed/rejected
  async function changeStatus(id, newStatus) {
    try {
      if (newStatus === "completed" || newStatus === "rejected") {
        // Delete request from backend
        await deleteRequest(id);
        // Remove from frontend
        setRequests((prev) => prev.filter((r) => r.id !== id));
      } else {
        await updateRequestStatus(id, newStatus);
        setRequests((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
        );
      }
    } catch (error) {
      console.error("Failed to update/delete request:", error);
    }
  }

  // Group requests by status
  const groupedRequests = {
    pending: requests.filter((r) => r.status === "pending"),
    accepted: requests.filter((r) => r.status === "accepted"),
    "in-progress": requests.filter((r) => r.status === "in-progress"),
  };

  const statusOrder = ["pending", "accepted", "in-progress"];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>All Service Requests</h1>

      {statusOrder.map((status) => (
        <div key={status} className={styles.statusSection}>
          {groupedRequests[status].length > 0 && (
            <>
              <h2 className={styles.statusHeading}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </h2>
              <div className={styles.grid}>
                {groupedRequests[status].map((req) => (
                  <div key={req.id} className={styles.card}>
                    <h3>{req.clientName}</h3>
                    <p><strong>Phone:</strong> {req.phone}</p>
                    <p><strong>Location:</strong> {req.location}</p>
                    <p><strong>Description:</strong> {req.jobDescription}</p>
                    <p><strong>Date:</strong> {new Date(req.date).toLocaleString()}</p>

                    <p className={`${styles.status} ${styles[req.status]}`}>
                      Status: {req.status.toUpperCase()}
                    </p>

                    <div className={styles.buttons}>
                      {req.status === "pending" && (
                        <>
                          <button onClick={() => changeStatus(req.id, "accepted")}>
                            Accept
                          </button>
                          <button
                            className={styles.reject}
                            onClick={() => changeStatus(req.id, "rejected")}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {req.status === "accepted" && (
                        <button onClick={() => changeStatus(req.id, "in-progress")}>
                          Start
                        </button>
                      )}
                      {req.status === "in-progress" && (
                        <button onClick={() => changeStatus(req.id, "completed")}>
                          Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}

      {requests.length === 0 && <p>No requests found.</p>}
    </div>
  );
}
