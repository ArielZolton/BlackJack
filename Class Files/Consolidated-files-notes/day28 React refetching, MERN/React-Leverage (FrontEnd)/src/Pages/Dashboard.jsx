import UserCard from "../Components/UserCard";
import { Typography, Stack, CircularProgress, Grid, Skeleton, Dialog, DialogTitle } from "@mui/material";
import UserLoader from "../Components/UserLoader";
import UserCards from "../Components/UserCards";
import EmptyBanner from "../Components/EmptyBanner";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddUserDialog from "../Components/AddUserDialog";
// const API = import.meta.env.VITE_API;
// const API = "http://localhost:3000/api";
import { getUsers } from "../services/users";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading"); // loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const data = (await response).data;
        const response = await getUsers();
        setUsers(response.data);
        // const res = await fetch(`${API}/users`); // http://localhost:3000/api/users
        // const responseData = await res.json();

        // // Simulate a slow response, for testing purposes
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        // // do not do this in production ^ or real life
        // console.log("data", responseData);


        setStatus("ready");
      } catch (error) {
        console.error("Error fetching users:", error);
        setStatus("error");
      }
    };
    fetchUsers();
  }, []);

  // const onCreateUser = async () => {
  //   setStatus("loading");
  //   const response = await getUsers();
  //   setUsers(response.data);
  //   setStatus("ready");

  /*FROM PST FILES
  // console.log(`${status === "loading" && "it is loading"}`);

  // Conditional rendering # 1
  // return (
  //   <div>
  //     <Typography variant="h1">Dashboard</Typography>
  //     {status === "ready" && <UserCards users={users} />}
  //     {status === "loading" && <UserLoader />}
  //     {status === "error" && (
  //       <EmptyBanner title="Error" text="Error loading data" severity="error" />
  //     )}
  //   </div>
  // );

  // Conditional rendering # 2
  // let content = null;
  // if (status === "loading") {
  //   content = <UserLoader />;
  // } else if (status === "error") {
  //   content = (
  //     <EmptyBanner title="Error" text="Error loading data" severity="error" />
  //   );
  // } else if (status === "ready") {
  //   content = <UserCards users={users} />;
  // }

  // return (
  //   <div>
  //     <Typography variant="h1">Dashboard</Typography>
  //     {content}
  //   </div>
  // );

  // Conditional rendering # 3

  // const renderContent = () => {
  //   if (status === "loading") {
  //     return <UserLoader />;
  //   } else if (status === "error") {
  //     return (
  //       <EmptyBanner title="Error" text="Error loading data" severity="error" />
  //     );
  //   } else if (status === "ready") {
  //     return <UserCards users={users} />;
  //   } 
   *  
   */

  // };

  const onCreateUser = async (user) => {
    setUsers((u) => [...u, user]);
  };

  /* FROM PST FILES
  // return (
  //   <div>
  //     <Typography variant="h1">Dashboard</Typography>
  //     {renderContent()}
  //   </div>
  // );

  // Conditional rendering # 4
  */

  const renderingMap = {
    loading: <UserLoader />,
    ready: <UserCards users={users} />,
    error: (
      <EmptyBanner
        title="Error"
        text="something went wrong with API"
        severity="error"
      /> // text="Error loading data"
    ),
  };

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogIsOpen(true);
  };

  const handleDialogClose = () => {
    setDialogIsOpen(false);
  };

  return (
    <div>
      <Typography variant="h1">Dashboard</Typography>
      {/* <h1>Dashboard</h1> */}
      {renderingMap[status]}

      {/* <Button variant="contained" onClick={handleDialogOpen}> */}
      <Button variant="outlined" onClick={handleDialogOpen}>
        Open form dialog
      </Button>
      <AddUserDialog
        dialogIsOpen={dialogIsOpen}
        handleClose={handleDialogClose}
        onCreateUser={onCreateUser}
      />
    </div>
  );
}
