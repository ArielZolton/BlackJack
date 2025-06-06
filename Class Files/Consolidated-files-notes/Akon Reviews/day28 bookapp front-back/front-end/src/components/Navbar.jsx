import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.pathname = "/";
  };

  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <a href="/" className="text-lg font-bold">
        Book App
      </a>
      <div className="flex gap-4">
        <a href="/dashboard">Dashboard</a>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <a href="/login">Login / Signup</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
