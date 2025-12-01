import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // List of admin emails can be managed here for now
  const adminEmails = ["admin@gmail.com", "superadmin@gmail.com"]; // change as needed

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if this email is in adminEmails list
      if (adminEmails.includes(user.email)) {
        navigate("/admin"); // go to admin dashboard
      } else {
        setError("Access denied. You are not an admin.");
        setTimeout(() => navigate("/home"), 2000);
      }
    } catch (err) {
      console.error("Login error:", err.code, err.message);
      setError("Invalid email or password.");
      setTimeout(() => navigate("/home"), 2000);
    }
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        backgroundColor: "#fff", padding: "2rem", borderRadius: "8px", width: "300px"
      }}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
            />
          </div>
          <button type="submit" style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}>Login</button>
          <button type="button" onClick={onClose} style={{ padding: "0.5rem 1rem" }}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
