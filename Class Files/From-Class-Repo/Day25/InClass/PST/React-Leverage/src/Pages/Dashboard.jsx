import UserCard from "../Components/UserCard";
import { Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/data/users.json");
      const data = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers(data);
      console.log(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <Typography variant="h1">Dashboard</Typography>
      <Stack spacing={2}>
        {/* js is inside the curly braces */}
        {users.map((user, index) => {
          return <UserCard {...user} key={index} />;
        })}
      </Stack>
    </div>
  );
}
