import React, { useState, useEffect } from "react";
import styles from "./workerform.module.css";

export default function WorkerForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    country: "",
    imgSrc: "",
    phone: "",
    ratings: "",
    experience: "",
    about: "",
    services: "",
    languages: "",
    availability: "",
    hourlyRate: "",
    googleMapsLink: "",
  });

  // Pre-fill form if editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        title: initialData.title || "",
        country: initialData.country || "",
        imgSrc: initialData.img?.src || "",
        phone: initialData.phone || "",
        ratings: initialData.ratings || "",
        experience: initialData.experience || "",
        about: initialData.about || "",
        services: initialData.services?.join(", ") || "",
        languages: initialData.languages?.join(", ") || "",
        availability: initialData.availability || "",
        hourlyRate: initialData.hourlyRate || "",
        googleMapsLink: initialData.googleMapsLink || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build correct object (NO DUPLICATE IMAGES)
    const formattedWorker = {
      name: formData.name,
      title: formData.title,
      country: formData.country,
      phone: formData.phone,
      ratings: formData.ratings,
      experience: formData.experience,
      about: formData.about,
      services: formData.services.split(",").map((s) => s.trim()),
      languages: formData.languages.split(",").map((l) => l.trim()),
      availability: formData.availability,
      hourlyRate: formData.hourlyRate,
      googleMapsLink: formData.googleMapsLink,
      img: { src: formData.imgSrc },
    };

    onSubmit(formattedWorker);

    // Reset if adding new worker
    if (!initialData) {
      setFormData({
        name: "",
        title: "",
        country: "",
        imgSrc: "",
        phone: "",
        ratings: "",
        experience: "",
        about: "",
        services: "",
        languages: "",
        availability: "",
        hourlyRate: "",
        googleMapsLink: "",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Worker" : "Add New Worker"}</h2>

      <div className={styles.row}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Worker full name"
            required
          />
        </div>
        <div>
          <label>Title / Profession</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Software Developer"
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label>Country / Location</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g., Kenya"
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254-234-567-890"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles["full-width"]}>
          <label>Image URL</label>
          <input
            type="text"
            name="imgSrc"
            value={formData.imgSrc}
            onChange={handleChange}
            placeholder="e.g., assets/software_developer.jpg"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label>Ratings</label>
          <input
            type="text"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            placeholder="e.g., 4.5"
          />
        </div>
        <div>
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="e.g., 3 years"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles["full-width"]}>
          <label>About / Bio</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Short description about the worker"
          ></textarea>
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label>Services (comma separated)</label>
          <input
            type="text"
            name="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="Web dev, API integration"
          />
        </div>
        <div>
          <label>Languages (comma separated)</label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="English, Swahili"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label>Availability</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Mon–Fri, 8am–6pm"
          />
        </div>
        <div>
          <label>Hourly Rate</label>
          <input
            type="text"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
            placeholder="KSh 1,200/hr"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles["full-width"]}>
          <label>Google Maps Link</label>
          <input
            type="text"
            name="googleMapsLink"
            value={formData.googleMapsLink}
            onChange={handleChange}
            placeholder="https://www.google.com/maps/..."
          />
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        {initialData ? "Update Worker" : "Save Worker"}
      </button>
    </form>
  );
}
