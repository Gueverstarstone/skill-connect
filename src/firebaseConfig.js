import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- ADD THIS LINE
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCK_0l4XGVDt91Wzgfe_oO_AzCWLLaanwI",
  authDomain: "skillconnect-d8a5b.firebaseapp.com",
  projectId: "skillconnect-d8a5b",
  storageBucket: "skillconnect-d8a5b.firebasestorage.app",
  messagingSenderId: "429629398074",
  appId: "1:429629398074:web:5f7536c4c921c49aa6e903",
  measurementId: "G-GJKVMEZ2X3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);
export { auth };
