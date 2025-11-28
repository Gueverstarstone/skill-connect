const BASE_URL = "http://localhost:3000"; // Change this when deploying

// Get workers with optional pagination
export const getWorkers = async (page = 1, limit = 10) => {
  try {
    const res = await fetch(`${BASE_URL}/workers?_page=${page}&_limit=${limit}`);
    if (!res.ok) {
      const errorDetails = await res.text(); // Get error response body
      throw new Error(`Failed to fetch workers. Error: ${errorDetails}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching workers:", error.message);
    throw error; // Re-throw the error after logging
  }
};

// Add a new worker to the database
export const addWorker = async (worker) => {
  try {
    const res = await fetch(`${BASE_URL}/workers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${localStorage.getItem("token")}` // if using tokens
      },
      body: JSON.stringify(worker),
    });
    if (!res.ok) throw new Error("Failed to add worker");
    return res.json();
  } catch (error) {
    console.error("Error adding worker:", error.message);
    throw error;
  }
};

// Get jobs
export const getJobs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/jobs`);
    if (!res.ok) throw new Error("Failed to fetch jobs");
    return res.json();
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    throw error;
  }
};

// Update job status
export const updateJobStatus = async (id, status) => {
  try {
    const res = await fetch(`${BASE_URL}/jobs/${id}`, {
      method: "PATCH", // Partial update for the job
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error("Failed to update job status");
    return res.json();
  } catch (error) {
    console.error("Error updating job status:", error.message);
    throw error;
  }
};
export async function deleteWorker(id) {
  const res = await fetch(`http://localhost:3000/workers/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete worker");
  }

  return true;
}
