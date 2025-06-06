import { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { fetchBooks } from "../utils/api.js";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
      setIsLoading(false);
    };
    getBooks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Popular Books</h2>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <div key={book._id} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksList;
