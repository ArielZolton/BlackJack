import { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import {
  fetchUserData,
  fetchBooksFromAPI,
  saveBookToUser,
} from "../utils/api.js";

export default function BookFetcher({ setUsers }) {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("JavaScript");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [savedBooks, setSavedBooks] = useState(new Set());
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    if (storedUser?.loggedIn) {
      fetchUserData(storedUser.id).then((data) => {
        if (data) {
          setSavedBooks(
            new Set(
              data.books.map(
                (book) =>
                  `${book.title.toLowerCase()}_${book.author.toLowerCase()}`
              )
            )
          );
        }
      });
    }

    const getBooks = async () => {
      setIsLoading(true);
      const bookResults = await fetchBooksFromAPI(query);
      setBooks(bookResults);
      setIsLoading(false);
    };

    getBooks();
  }, [query]);

  const handleSaveBook = async (book) => {
    if (!user || !user.loggedIn) {
      setStatusMessage("Please log in to save books.");
      clearStatusMessage();
      return;
    }

    const bookIdentifier = `${book.title.toLowerCase()}_${
      book.author_name?.[0]?.toLowerCase() || "unknown"
    }`;

    if (savedBooks.has(bookIdentifier)) {
      setStatusMessage("Book already saved!");
      clearStatusMessage();
      return;
    }

    const bookData = {
      title: book.title,
      author: book.author_name?.[0] || "Unknown",
      genre: "Unknown",
      year: book.first_publish_year || "Unknown",
    };

    const message = await saveBookToUser(user.id, bookData);
    setStatusMessage(message);
    setSavedBooks((prev) => new Set([...prev, bookIdentifier]));

    setUsers(prevUsers =>
      prevUsers.map(u =>
        u._id === user.id ? { ...u, books: [...u.books, bookData] } : u
      )
    );

    clearStatusMessage();
  };

  const clearStatusMessage = () => {
    setTimeout(() => setStatusMessage(""), 2000);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Search For a Book</h2>
      <input
        type="text"
        className="border p-2 rounded-md w-full"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {statusMessage && (
        <p className="text-sm text-gray-600 mt-2">{statusMessage}</p>
      )}

      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ul className="mt-4">
          {books.map((book, index) => (
            <li key={index} className="border-b py-4 flex gap-4 items-center">
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                  alt={book.title}
                  className="w-12 h-16 rounded-md shadow-md"
                />
              )}
              <div>
                <p className="font-semibold">{book.title}</p>
                <p className="text-sm text-gray-600">
                  by {book.author_name?.[0] || "Unknown Author"}
                </p>
              </div>
              {user?.loggedIn && (
                <button
                  onClick={() => handleSaveBook(book)}
                  className="bg-green-500 px-2 py-1 rounded"
                >
                  Save Book
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
