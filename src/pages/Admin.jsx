// Admin.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import WorkerForm from "../components/WorkerForm";
import Clientpage from "../pages/Clientpage";
import { addWorker, getWorkers, deleteWorker } from "../api/api";
import styles from "./admin.module.css";

export default function Admin() {
  const [workers, setWorkers] = useState([]);
  const [editingWorker, setEditingWorker] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if not authenticated
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      } else {
        fetchWorkers();
      }
    });
  }, [navigate]);

  const fetchWorkers = async () => {
    const data = await getWorkers();
    setWorkers(data);
  };

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
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this worker?")) {
      try {
        await deleteWorker(id);
        setWorkers(workers.filter((w) => w.id !== id));
      } catch (error) {
        console.error("Error deleting worker:", error);
        alert("Failed to delete. Check server.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <WorkerForm
        key={editingWorker ? editingWorker.id : "new"}
        onSubmit={handleAddWorker}
        initialData={editingWorker}
      />
      <h2>Saved Workers</h2>
      <div className={styles.workersGrid}>
        {workers.map((w) => (
          <div key={w.id}>
            <Clientpage {...w} />
            <button onClick={() => handleEdit(w)}>Edit</button>
            <button onClick={() => handleDelete(w.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
