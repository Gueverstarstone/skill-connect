import React, { useState, useEffect, useRef } from "react";
import WorkerForm from "../components/WorkerForm";
import Clientpage from "../pages/Clientpage";
import { addWorker, getWorkers } from "../api/api";
import styles from "./admin.module.css";

export default function Admin() {
  const [workers, setWorkers] = useState([]);
  const [editingWorker, setEditingWorker] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    async function fetchWorkers() {
      const data = await getWorkers();
      setWorkers(data);
    }
    fetchWorkers();
  }, []);

  const handleAddWorker = async (worker) => {
    try {
      if (editingWorker) {
        const updatedWorkers = workers.map((w) =>
          w.id === editingWorker.id ? { ...editingWorker, ...worker } : w
        );
        setWorkers(updatedWorkers);
        setEditingWorker(null);
      } else {
        const newWorker = await addWorker(worker);
        setWorkers([...workers, newWorker]);
      }
    } catch (error) {
      console.error("Error saving worker:", error);
    }
  };

  const handleEdit = (worker) => {
    setEditingWorker(worker);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDelete = (id) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this worker?")) {
      setWorkers(workers.filter((w) => w.id !== id));
      // TODO: call backend delete API if using a real backend
    }
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>

      <div ref={formRef}>
        <WorkerForm
          key={editingWorker ? editingWorker.id : "new"}
          onSubmit={handleAddWorker}
          initialData={editingWorker}
        />
      </div>

      <h2>Saved Workers</h2>
      <div className={styles.workersGrid}>
        {workers.map((w) => (
          <div key={w.id} style={{ position: "relative" }}>
            <Clientpage {...w} />

            <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <button onClick={() => handleEdit(w)} className={styles.editBtn}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(w.id)}
                className={styles.deleteBtn}
                style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
