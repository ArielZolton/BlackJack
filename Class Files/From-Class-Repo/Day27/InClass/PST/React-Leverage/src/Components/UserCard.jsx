import { Card, CardContent, Typography, Button } from "@mui/material";
import UserAvatar from "./UserAvatar";
import { useState } from "react";

export default function UserCard({ username, email, balance }) {
  const [balanceState, setBalanceState] = useState(balance);
  // const [balanceState, setBalanceState] = useState(1000)

  function increaseHelper(prevBalance) {
    return prevBalance + 100;
  }

  function increaseBalance() {
    // console.log("balanceState", balanceState);
    // --- Wrong way of updating the state ---
    // setBalanceState(balanceState + 100);
    // setBalanceState(1100);

    // --- Correct way of updating the state ---
    // setBalanceState((prevBalance) => prevBalance + 100);
    // setBalanceState(increaseHelper); // not as JS. Only use it if the function is big
    setBalanceState((a) => a + 100);
  }
  return (
    <Card>
      <CardContent>
        <UserAvatar username={username} />
        <Typography variant="h5">{username}</Typography>
        <Typography variant="body1">{email}</Typography>
        <Typography variant="body1">${balanceState}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            increaseBalance();
          }}
        >
          + $100
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            increaseBalance();
            increaseBalance();
            increaseBalance();
          }}
        >
          + $300
        </Button>
      </CardContent>
    </Card>
  );
}
