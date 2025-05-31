import UserCard from "../Components/UserCard";
import { useState, useEffect } from "react";
import { CircularProgress, Grid, Stack, Skeleton } from "@mui/material";

// const API = import.meta.env.VITE_API;
const API = "http://localhost:3000/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading"); // loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API}/users`);
        const responseContent = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 2000)); // sleep for 2 second
        console.log("responseContent", responseContent);
        setUsers(responseContent.data);
        setStatus("ready");
      } catch (error) {
        console.error("Error fetching users:", error);
        setStatus("error");
      }
    };
    fetchUsers();
  }, []);

  //   console.log(`${status === "loading" && "it is loading"}`);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <UserCard username={users[0].username} email={users[0].email} balance={users[0].balance}/>
            <UserCard username={users[1].username} email={users[1].email} balance={users[1].balance}/> */}
      {/* js goes inside the curly braces */}
      {/* {userCards} */}
      {status === "ready" && users.length === 0 && <div>No users found</div>}

      <Stack spacing={2}>
        {status === "loading" &&
          Array.from({ length: 3 }).map((_, index) => {
            return (
              <Skeleton
                key={index}
                variant="rectangular"
                height={220}
                sx={{ bgcolor: "grey.200" }}
              />
            );
          })}
        {status === "ready" &&
          users.length > 0 &&
          users.map((user) => {
            return <UserCard {...user} />;
          })}
      </Stack>
      {status === "error" && <div>Error fetching users</div>}
    </div>
  );
}
