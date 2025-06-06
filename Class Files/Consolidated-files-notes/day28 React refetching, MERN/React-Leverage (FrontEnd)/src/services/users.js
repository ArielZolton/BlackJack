// const API = import.meta.env.VITE_API;
const API = "http://localhost:3000/api";

/* ----- Helper Functions ----- */
const getJson = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
};

/* ----- CRUD API Calls ----- */
/* This is front end code, not backend code */

// GET all users
export const getUsers = () => {
  return fetch(`${API}/users`).then(getJson); // default method is GET
};

// GET a single user by ID
export const getUserById = (id) => {
  return fetch(`${API}/users/${id}`).then(getJson);
};

// POST a new user
export const createUser = (user) => {
  return fetch(`${API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(getJson);
};

// PUT (update) a user by ID
export const updateUser = (id, user) => {
  return fetch(`${API}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(getJson);
};

// DELETE a user by ID
export const deleteUser = (id) => {
  return fetch(`${API}/users/${id}`, { method: "DELETE" }).then(getJson);
};
