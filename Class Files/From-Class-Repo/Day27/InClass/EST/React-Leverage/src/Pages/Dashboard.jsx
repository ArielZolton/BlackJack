import UserLoader from "../Components/UserLoader";
import UserCards from "../Components/UserCards";
import EmptyBanner from "../Components/EmptyBanner";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddUserDialog from "../Components/AddUserDialog";

// const API = import.meta.env.VITE_API;
const API = "http://localhost:3000/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("loading"); // loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API}/users`); // http://localhost:3000/api/users
        const responseContent = await res.json();

        // this is just to SHOW a loading time...
        await new Promise((resolve) => setTimeout(resolve, 3000)); // sleep for 3 second
        // Do not have this ^ on real projects

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

  // Conditional Rendering # 1
  // return (
  //   <div>
  //     <h1>Dashboard</h1>
  //     {status === "loading" && <UserLoader />}
  //     {status === "ready" && <UserCards users={users} />}
  //     {status === "error" && <div>Error fetching users</div>}
  //   </div>
  // );

  // Conditional Rendering # 2
  // let content = null;
  // if (status === "loading") {
  //   content = <UserLoader />;
  // } else if (status === "ready") {
  //   content = <UserCards users={users} />;
  // } else if (status === "error") {
  //   content = <div>Error fetching users</div>;
  // }

  // return (
  //   <div>
  //     <h1>Dashboard</h1>
  //     {content}
  //   </div>
  // );

  // Conditional Rendering # 3
  // const renderContent = () => {
  //   if (status === "loading") {
  //     return <UserLoader />;
  //   } else if (status === "ready") {
  //     return <UserCards users={users} />;
  //   } else if (status === "error") {
  //     return <div>Error fetching users</div>;
  //   }
  // };

  // return (
  //   <div>
  //     <h1>Dashboard</h1>
  //     {renderContent()}
  //   </div>
  // );

  // Conditional Rendering # 4
  const renderingMap = {
    loading: <UserLoader />,
    ready: <UserCards users={users} />,
    error: (
      <EmptyBanner
        title="Error"
        text="something went wrong with API"
        severity="error"
      />
    ),
  };

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {renderingMap[status]}

      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <AddUserDialog dialogIsOpen={dialogIsOpen} handleClose={handleClose} />
    </div>
  );
}
