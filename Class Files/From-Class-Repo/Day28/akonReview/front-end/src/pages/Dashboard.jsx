import { useEffect, useState } from "react";
import {
  fetchUserData,
  updateUser,
  deleteUser,
  removeBookFromUser,
  addReview,
} from "../utils/api.js";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ username: "", email: "" });
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const [reviewingBook, setReviewingBook] = useState(null);
  const [reviewContent, setReviewContent] = useState({
    reviewer: "",
    rating: "",
    comment: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !storedUser.loggedIn) {
      window.location.pathname = "/login";
      return;
    }

    fetchUserData(storedUser.id).then(setUser);
  }, []);

  const handleEdit = () => {
    setEditedUser({ username: user.username, email: user.email });
    setEditing(true);
  };

  const handleSave = async () => {
    const updatedUser = await updateUser(user._id, editedUser);
    if (updatedUser.message) {
      setUser((prev) => ({ ...prev, ...editedUser }));
      setEditing(false);
    }
  };

  const handleDelete = async () => {
    if (deleteConfirm !== user.username)
      return alert("Username confirmation does not match!");
    deleteUser(user._id);
  };

  const handleRemoveBook = async (bookId) => {
    if (await removeBookFromUser(user._id, bookId)) {
      setUser((prev) => ({
        ...prev,
        books: prev.books.filter((book) => book._id !== bookId),
      }));
    }
  };

  const handleAddReview = async (bookId) => {
    const reviewData = {
      reviewer: user.username,
      rating: reviewContent.rating,
      comment: reviewContent.comment,
    };

    const updatedBook = await addReview(bookId, reviewData);
    if (updatedBook) {
      setUser((prev) => ({
        ...prev,
        books: prev.books.map((book) =>
          book._id === bookId ? updatedBook.data : book
        ),
      }));
      setReviewingBook(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      {user && (
        <div className="mt-4">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
          >
            Edit
          </button>

          {editing && (
            <>
              <input
                type="text"
                value={editedUser.username}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, username: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="email"
                value={editedUser.email}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, email: e.target.value })
                }
                className="p-2 border rounded mt-2"
              />
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-3 py-1 rounded mt-2"
              >
                Save
              </button>
            </>
          )}

          <div className="mt-4">
            <input
              type="text"
              placeholder="Type username to confirm delete"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              className="p-2 border rounded"
            />
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded mt-2"
            >
              Delete
            </button>
          </div>

          <h2 className="text-xl font-bold mt-6">Saved Books</h2>
          <ul className="mt-4">
            {user?.books?.length > 0 ? (
              user.books.map((book) => (
                <li
                  key={book._id}
                  className="p-4 border rounded flex flex-col gap-2"
                >
                  <strong>{book.title}</strong> by {book.author}
                  <p>
                    <em>Genre:</em> {book.genre}
                  </p>
                  <p>
                    <em>Year:</em> {book.year}
                  </p>
                  <h3 className="font-bold mt-2">Reviews:</h3>
                  <ul className="mt-2 space-y-1">
                    {book.reviews?.length > 0 ? (
                      book.reviews.map((review) => (
                        <li key={review._id} className="text-sm text-gray-800">
                          <strong>{review.reviewer}</strong>: {review.rating}/5
                          - "{review.comment}"
                        </li>
                      ))
                    ) : (
                      <p className="text-gray-600">No reviews yet.</p>
                    )}
                  </ul>
                  <button
                    onClick={() => setReviewingBook(book._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
                  >
                    Add Review
                  </button>
                  {reviewingBook === book._id && (
                    <div className="mt-2 p-2 border rounded bg-white">
                      <p className="text-sm text-gray-600">
                        Reviewing as: <strong>{user.username}</strong>
                      </p>
                      <input
                        type="number"
                        placeholder="Rating (1-5)"
                        value={reviewContent.rating}
                        onChange={(e) => {
                          const newRating = Math.min(
                            Math.max(e.target.value, 1),
                            5
                          );
                          setReviewContent({
                            ...reviewContent,
                            rating: newRating,
                          });
                        }}
                        min="1"
                        max="5"
                        className="p-2 border rounded mt-2"
                      />
                      <input
                        type="text"
                        placeholder="Comment"
                        value={reviewContent.comment}
                        onChange={(e) =>
                          setReviewContent({
                            ...reviewContent,
                            comment: e.target.value,
                          })
                        }
                        className="p-2 border rounded mt-2"
                      />
                      <button
                        onClick={() => handleAddReview(book._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded mt-2"
                      >
                        Submit Review
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => handleRemoveBook(book._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                  >
                    Remove Book
                  </button>
                </li>
              ))
            ) : (
              <p>No books saved yet.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
