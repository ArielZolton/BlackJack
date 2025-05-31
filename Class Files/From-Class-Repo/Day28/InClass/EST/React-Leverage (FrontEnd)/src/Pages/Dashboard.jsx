import UserLoader from "../Components/UserLoader";
import UserCards from "../Components/UserCards";
import EmptyBanner from "../Components/EmptyBanner";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddUserDialog from "../Components/AddUserDialog";
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
  // };
  const onCreateUser = async (user) => {
    setUsers((u) => [...u, user]);
  };

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
      <AddUserDialog
        dialogIsOpen={dialogIsOpen}
        handleClose={handleClose}
        onCreateUser={onCreateUser}
      />
    </div>
  );
}
