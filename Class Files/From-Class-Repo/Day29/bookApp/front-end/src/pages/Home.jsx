import BookFetcher from "../components/BookFetcher";
import BooksList from "../components/BookList";
import UsersList from "../components/UserList";
import { useState, useEffect } from "react";
import { fetchUsers } from "../utils/api.js";

function Home() {
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
    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-6">
      <BookFetcher users={users} setUsers={setUsers} />
      <UsersList users={users} isLoading={isLoading} />
      <BooksList />
    </div>
  );
}

export default Home;