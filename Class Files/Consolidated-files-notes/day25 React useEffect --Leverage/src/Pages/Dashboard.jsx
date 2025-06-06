import UserCard from "../Components/UserCard";
import { Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true) // loading state

    /*
    // --- below is code to show map function, not used ---
    function transformUserToUserCard(user) {
        return <UserCard username={user.username} email={user.email} balance={user.balance}/>
    }
    const userCards = users.map((user) => transformUserToUserCard(user));
    console.log("userCards", userCards)
    // --- above is code to show map function, not used ---
    */

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/data/users.json');
                const data = await res.json();

                // await new Promise((resolve) => setTimeout(resolve, 1000));
                console.log("data: ", data);
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <Typography variant="h1">Dashboard</Typography>
            <Stack spacing={2}>
            {/* <UserCard username={users[0].username} email={users[0].email} balance={users[0].balance}/>
            <UserCard username={users[1].username} email={users[1].email} balance={users[1].balance}/> */}
            {/* js goes inside the curly braces */}
            {/* {userCards} */}
            {users.map((user, index) => {
                return <UserCard {...user} key={index} />; // spread operator
                // <UserCard username={user.username} email={user.email} balance={user.balance}/>
            })}
            </Stack>
        </div>
    );
}