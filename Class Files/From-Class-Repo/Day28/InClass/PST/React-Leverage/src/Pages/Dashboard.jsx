import UserCard from "../Components/UserCard";
import {
  Typography,
  Stack,
  CircularProgress,
  Grid,
  Skeleton,
  Dialog,
  DialogTitle,
  Button,
} from "@mui/material";
import UserLoader from "../Components/UserLoader";
import { useEffect, useState } from "react";
import UserCards from "../Components/UserCards";
import EmptyBanner from "../Components/EmptyBanner";
import AddUserDialog from "../Components/AddUserDialog";
// const API = import.meta.env.VITE_API;
const API = "http://localhost:3000/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API}/users`); // http://localhost:3000/api/users
        const responseData = await res.json();

        // Simulate a slow response, for testing purposes
        await new Promise((resolve) => setTimeout(resolve, 3000));
        // do not do this in production ^ or real life
        console.log("data", responseData);
        setUsers(responseData.data);
        setStatus("ready");
      } catch (error) {
        console.error("error:", error);
        setStatus("error");
      }
    };
    fetchUsers();
  }, []);

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
  // };

  // return (
  //   <div>
  //     <Typography variant="h1">Dashboard</Typography>
  //     {renderContent()}
  //   </div>
  // );

  // Conditional rendering # 4

  const renderingMap = {
    loading: <UserLoader />,
    ready: <UserCards users={users} />,
    error: (
      <EmptyBanner title="Error" text="Error loading data" severity="error" />
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
      {renderingMap[status]}
      <Button variant="contained" onClick={handleDialogOpen}>
        Open form Dialog
      </Button>
      <AddUserDialog
        dialogIsOpen={dialogIsOpen}
        handleClose={handleDialogClose}
      />
    </div>
  );
}
