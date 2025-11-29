const BASE_URL = "http://localhost:3000"; // Change this when deploying

// ------------------------ WORKERS ------------------------

// Get all workers with optional pagination
export const getWorkers = async (page = 1, limit = 10) => {
  try {
    const res = await fetch(`${BASE_URL}/workers?_page=${page}&_limit=${limit}`);
    if (!res.ok) {
      const details = await res.text();
      throw new Error(`Failed to fetch workers: ${details}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching workers:", error.message);
    throw error;
  }
};

// Add a new worker
export const addWorker = async (worker) => {
  try {
    const res = await fetch(`${BASE_URL}/workers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(worker),
    });
    if (!res.ok) throw new Error("Failed to add worker");
    return res.json();
  } catch (error) {
    console.error("Error adding worker:", error.message);
    throw error;
  }
};

// Delete a worker
export const deleteWorker = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/workers/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete worker");
    return true;
  } catch (error) {
    console.error("Error deleting worker:", error.message);
    throw error;
  }
};

// ------------------------ REQUESTS / JOBS ------------------------

// Get all requests
export const getRequests = async () => {
  try {
    const res = await fetch(`${BASE_URL}/requests`);
    if (!res.ok) throw new Error("Failed to fetch requests");
    return res.json();
  } catch (error) {
    console.error("Error fetching requests:", error.message);
    throw error;
  }
};

// Create a new client request
export const createRequest = async (request) => {
  try {
    const newRequest = {
      ...request,
      status: "pending",
      date: new Date().toISOString(),
    };

    const res = await fetch(`${BASE_URL}/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRequest),
    });

    if (!res.ok) throw new Error("Failed to create request");

    return res.json();
  } catch (error) {
    console.error("Error creating request:", error.message);
    throw error;
  }
};

// Update request STATUS only
export const updateRequestStatus = async (id, status) => {
  try {
    const res = await fetch(`${BASE_URL}/requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) throw new Error("Failed to update status");

    return res.json();
  } catch (error) {
    console.error("Error updating status:", error.message);
    throw error;
  }
};

// Delete a request (for completed or rejected requests)
export const deleteRequest = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/requests/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Failed to delete request");
    return true;
  } catch (error) {
    console.error("Error deleting request:", error.message);
    throw error;
  }
};

// OPTIONAL — Update ANY fields in request (not only status)
export const updateRequest = async (id, fields) => {
  try {
    const res = await fetch(`${BASE_URL}/requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });

    if (!res.ok) throw new Error("Failed to update request");

    return res.json();
  } catch (error) {
    console.error("Error updating request:", error.message);
    throw error;
  }
};

// OPTIONAL — Assign a worker to a request
export const assignRequestToWorker = async (requestId, workerId) => {
  try {
    const res = await fetch(`${BASE_URL}/requests/${requestId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workerId }),
    });

    if (!res.ok) throw new Error("Failed to assign request");

    return res.json();
  } catch (error) {
    console.error("Error assigning request:", error.message);
    throw error;
  }
};
