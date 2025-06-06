const API_BASE = "/api";

//Third Party Query
export const fetchBooksFromAPI = async (query) => {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    if (!res.ok) throw new Error("Failed to fetch books");
    const data = await res.json();
    return data.docs.slice(0, 5);
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

//Post Methods
export const saveBookToUser = async (userId, bookData) => {
  try {
    const res = await fetch(`${API_BASE}/users/${userId}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to save book");

    return data.message;
  } catch (error) {
    console.error("Error saving book:", error);
    return "Failed to save book.";
  }
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_BASE}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const signupUser = async (username, email, password) => {
  const res = await fetch(`${API_BASE}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
};

export const addReview = async (bookId, reviewData) => {
  const res = await fetch(`${API_BASE}/books/${bookId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData),
  });
  return res.ok ? res.json() : null;
};

//Get Methods
export const fetchUserData = async (userId) => {
  try {
    const res = await fetch(`${API_BASE}/users/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch user data");
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const fetchBooks = async () => {
  try {
    const res = await fetch(`${API_BASE}/books`);
    if (!res.ok) throw new Error("Failed to fetch books");

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
export const fetchUsers = async () => {
  try {
    const res = await fetch(`${API_BASE}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

//Put Methods
export const updateUser = async (userId, updatedData) => {
  const res = await fetch(`${API_BASE}/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
};

//Delete Methods
export const deleteUser = async (userId) => {
  await fetch(`${API_BASE}/users/${userId}`, { method: "DELETE" });
  localStorage.removeItem("user");
  window.location.pathname = "/login";
};

export const removeBookFromUser = async (userId, bookId) => {
  const res = await fetch(`${API_BASE}/users/${userId}/books/${bookId}`, {
    method: "DELETE",
  });
  return res.ok;
};
