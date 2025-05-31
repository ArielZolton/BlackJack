import { useState, useEffect } from "react";

export default function BookFetcher() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("JavaScript"); // Default search

  useEffect( () => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
        const data = await res.json();
        console.log(data)
        setBooks(data.docs.slice(0, 5)); // Limit results for simplicity
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, [query]); // Effect runs when `query` changes

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">useEffect API Fetch Example</h2>
      <input
        type="text"
        className="border p-2 rounded-md w-full"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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
              <p className="text-sm text-gray-600">by {book.author_name?.[0] || "Unknown Author"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}