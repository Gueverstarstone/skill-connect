import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import styles from "./allRequests.module.css";

export default function AllRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    async function loadRequests() {
      const querySnapshot = await getDocs(collection(db, "requests"));
      setRequests(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
    loadRequests();
  }, []);

  const changeStatus = async (req, newStatus) => {
    try {
      const reqRef = doc(db, "requests", req.id);

      if (newStatus === "completed") {
        await addDoc(collection(db, "archivedRequests"), {
          ...req,
          status: "completed",
        });
        await deleteDoc(reqRef);
        setRequests((prev) => prev.filter((r) => r.id !== req.id));
        return;
      }

      if (newStatus === "rejected") {
        await deleteDoc(reqRef);
        setRequests((prev) => prev.filter((r) => r.id !== req.id));
        return;
      }

      await updateDoc(reqRef, { status: newStatus });
      setRequests((prev) =>
        prev.map((r) => (r.id === req.id ? { ...r, status: newStatus } : r))
      );
    } catch (err) {
      console.error("Failed to update request:", err);
    }
  };

  const groupedRequests = {
    pending: requests.filter((r) => r.status === "pending"),
    accepted: requests.filter((r) => r.status === "accepted"),
    "in-progress": requests.filter((r) => r.status === "in-progress"),
  };

  const statusOrder = ["pending", "accepted", "in-progress"];

  return (
    <div className={styles.container}>
      <h1>All Service Requests</h1>

      {statusOrder.map(
        (status) =>
          groupedRequests[status].length > 0 && (
            <div key={status}>
              <h2>
                {status.toUpperCase()} ({groupedRequests[status].length})
              </h2>

              <div className={styles.grid}>
                {groupedRequests[status].map((req) => (
                  <div key={req.id} className={styles.card}>
                    <h3>{req.clientName}</h3>
                    <p>
                      <strong>Phone:</strong> {req.phone}
                    </p>
                    <p>
                      <strong>Location:</strong> {req.clientLocation}
                    </p>
                    <p>
                      <strong>Description:</strong> {req.jobDescription}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(req.date).toLocaleString()}
                    </p>

                    {/* Orange status button at top-right */}
                    <div className={styles.status}>{req.status}</div>

                    <div className={styles.buttons}>
                      {req.status === "pending" && (
                        <>
                          <button onClick={() => changeStatus(req, "accepted")}>
                            Accept
                          </button>
                          <button
                            className="reject"
                            onClick={() => changeStatus(req, "rejected")}
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {req.status === "accepted" && (
                        <button
                          onClick={() => changeStatus(req, "in-progress")}
                        >
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
            </div>
          )
      )}
    </div>
  );
}
