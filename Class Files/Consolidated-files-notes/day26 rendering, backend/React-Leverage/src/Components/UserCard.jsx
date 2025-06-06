import { Card, CardContent, Typography, Button } from "@mui/material";
import UserAvatar from "./UserAvatar";
import { useState } from "react";

export default function UserCard({username, email, balance}) {
    console.log(username, email, balance);
    const [balanceState, setBalanceState] = useState(balance);
    // const [balanceState, setBalanceState] = useState(3000)

    function increaseHelper(prevBalance) {
        console.log("prevBalance", prevBalance)
        return prevBalance + 100;
    }

    function increaseBalance() {
        // console.log("balanceState", balanceState);
        //  --- Bad way to update state ---
        // setBalanceState(balanceState + 100); // this updates the state immediately without waiting for other changes.
        // setBalanceState(1100);

        // --- Proper way to update state ---
        // setBalanceState((prevBalance) => prevBalance + 100);
        // setBalanceState(increaseHelper); // totally valid, same as below. Use with big functions only. ------not as JS. Only use it if the function is big
        setBalanceState((a) => a + 100); // uses the **pending state**. it will be added to a queue
    }

    return (
        <Card>
            <CardContent>
                <UserAvatar username={username} />
                <Typography variant="h5">{username}</Typography>
                <Typography variant="h6">{email}</Typography>
                <Typography variant="h6">${balanceState}</Typography>
                {/* should the variant be body1 instead of h6??? */}
                <Button variant="contained" color="primary"
                    onClick={() => {
                        console.log("clicked");
                        increaseBalance();
                        console.log(balanceState);
                    }}
                >
                    + $100
                </Button>
                <Button variant="contained" color="secondary"
                    onClick={() => {
                        increaseBalance();
                        increaseBalance();
                        increaseBalance();
                    }}
                > + $300
                </Button>
            </CardContent>
        </Card>
    );
}