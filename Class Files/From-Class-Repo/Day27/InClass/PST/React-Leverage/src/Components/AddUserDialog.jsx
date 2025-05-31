import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";
export default function AddUserDialog({ dialogIsOpen, handleClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  const [password, setPassword] = useState("");

  const API = "http://localhost:3000/api";

  const handleAddUser = async () => {
    console.log(username, email, balance, password);

    const newUser = {
      username,
      email,
      balance,
      password,
    };

    const response = await fetch(`${API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const responseContent = await response.json();
    console.log(responseContent);

    handleClose();
  };

  return (
    <Dialog open={dialogIsOpen} onClose={handleClose}>
      <DialogTitle>Create User</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Balance"
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddUser}>Add User</Button>
      </DialogActions>
    </Dialog>
  );
}
