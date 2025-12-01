// src/api/api.js
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// ---------------------- WORKERS ----------------------

// Get all workers
export const getWorkers = async () => {
  const snapshot = await getDocs(collection(db, "workers"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Add worker
export const addWorker = async (worker) => {
  const docRef = await addDoc(collection(db, "workers"), worker);
  return { id: docRef.id, ...worker };
};

// Delete worker
export const deleteWorker = async (id) => {
  await deleteDoc(doc(db, "workers", id));
  return true;
};

// ---------------------- REQUESTS ----------------------

// Get all requests
export const getRequests = async () => {
  const snapshot = await getDocs(collection(db, "requests"));
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Create request
export const createRequest = async (request) => {
  const newRequest = {
    ...request,
    status: "pending",
    date: new Date().toISOString(),
  };
  const docRef = await addDoc(collection(db, "requests"), newRequest);
  return { id: docRef.id, ...newRequest };
};

// Update request status
export const updateRequestStatus = async (id, status) => {
  const ref = doc(db, "requests", id);
  await updateDoc(ref, { status });
  return { id, status };
};

// Delete request
export const deleteRequest = async (id) => {
  await deleteDoc(doc(db, "requests", id));
  return true;
};

// Archive request (move to archivedRequests collection)
export const archiveRequest = async (request) => {
  await addDoc(collection(db, "archivedRequests"), request);
  await deleteDoc(doc(db, "requests", request.id));
  return true;
};
