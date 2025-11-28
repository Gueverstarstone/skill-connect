import React, { useState } from "react";
import styles from "./workerform.module.css";

export default function WorkerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    bio: "",
    skills: "",
    completedJobs: "",
    speciality: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Auto-generate avatar based on name
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
      formData.name
    )}`;

    const formattedData = {
      ...formData,
      profilePicture: avatarUrl,
      skills: formData.skills.split(",").map((s) => s.trim()),
    };

    onSubmit(formattedData);

    // Reset form
    setFormData({
      name: "",
      experience: "",
      bio: "",
      skills: "",
      completedJobs: "",
      speciality: "",
      location: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add New Worker</h2>

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Worker full name"
        required
      />

      <label>Experience (Years)</label>
      <input
        type=""
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="e.g., 3 years"
        required
      />

      <label>Bio</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Short description about the worker"
        required
      />

      <label>Skills (comma separated)</label>
      <input
        type="text"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        placeholder="plumbing, wiring, carpentry"
        required
      />

      <label>Completed Jobs</label>
      <input
        type="number"
        name="completedJobs"
        value={formData.completedJobs}
        onChange={handleChange}
        placeholder="e.g., 15"
        required
      />

      <label>Speciality</label>
      <input
        type="text"
        name="speciality"
        value={formData.speciality}
        onChange={handleChange}
        placeholder="e.g., PVC pipe repair"
        required
      />

      <label>Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="e.g., Nairobi, Nakuru"
        required
      />

      <button type="submit" className={styles.submitBtn}>
        Save Worker
      </button>
    </form>
  );
}
