import { useState, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { fetchUsers } from "../utils/api.js";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const userList = await fetchUsers();
      setUsers(userList);
      setIsLoading(false);
    };
    getUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Users</h2>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user._id} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold">{user.username}</h3>
              <p className="text-sm text-gray-600">Books Saved:</p>
              <ul className="mt-2 space-y-1">
                {user.books.map((book, index) => (
                  <li key={index} className="text-sm text-gray-800">
                    {book.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersList;
