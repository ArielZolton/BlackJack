import UserCard from "../Components/UserCard";
import {
  Typography,
  Stack,
  CircularProgress,
  Grid,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";

// const API = import.meta.env.VITE_API;
const API = "http://localhost:3000/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API}/users`);
        const responseData = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("data", responseData);
        setUsers(responseData.data);
        setStatus("ready");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };
    fetchUsers();
  }, []);

  // console.log(`${status === "loading" && "it is loading"}`);

  return (
    <div>
      <Typography variant="h1">Dashboard</Typography>
      {status === "ready" && users.length === 0 && (
        <Typography variant="h4">No users found</Typography>
      )}
      <Stack spacing={2}>
        {status === "loading" &&
          Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              height={220}
              sx={{ bgcolor: "grey.200" }}
            />
          ))}
        {status === "ready" &&
          users.length > 0 &&
          users.map((user, index) => {
            return <UserCard {...user} />;
          })}
      </Stack>
      {status === "error" && (
        <Typography variant="h4" color="error">
          Error loading data
        </Typography>
      )}
    </div>
  );
}
