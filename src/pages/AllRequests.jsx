import React, { useEffect, useState } from "react";
import {
  getRequests,
  updateRequestStatus,
  deleteRequest,
  archiveRequest
} from "../api/api";
import styles from "./allRequests.module.css";

export default function AllRequests() {
  const [requests, setRequests] = useState([]);

  // Load all requests on mount
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

  // Handle status change
  async function changeStatus(req, newStatus) {
    try {
      // -----------------------------------
      // COMPLETED → ARCHIVE then REMOVE
      // -----------------------------------
      if (newStatus === "completed") {

        // Force status: "completed" before archiving
        const completedRecord = { ...req, status: "completed" };

        await archiveRequest(completedRecord);

        setRequests((prev) => prev.filter((r) => r.id !== req.id));
        return;
      }

      // -----------------------------------
      // REJECTED → DELETE
      // -----------------------------------
      if (newStatus === "rejected") {
        await deleteRequest(req.id);
        setRequests((prev) => prev.filter((r) => r.id !== req.id));
        return;
      }

      // -----------------------------------
      // NORMAL STATUS UPDATE (pending → accepted → in-progress)
      // -----------------------------------
      await updateRequestStatus(req.id, newStatus);
      setRequests((prev) =>
        prev.map((r) =>
          r.id === req.id ? { ...r, status: newStatus } : r
        )
      );
    } catch (error) {
      console.error("Failed to update or archive request:", error);
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

                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(req.date).toLocaleString()}
                    </p>

                    <p className={`${styles.status} ${styles[req.status]}`}>
                      Status: {req.status.toUpperCase()}
                    </p>

                    <div className={styles.buttons}>
                      {req.status === "pending" && (
                        <>
                          <button onClick={() => changeStatus(req, "accepted")}>
                            Accept
                          </button>
                          <button
                            className={styles.reject}
                            onClick={() => changeStatus(req, "rejected")}
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {req.status === "accepted" && (
                        <button onClick={() => changeStatus(req, "in-progress")}>
                          Start
                        </button>
                      )}

                      {req.status === "in-progress" && (
                        <button onClick={() => changeStatus(req, "completed")}>
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
