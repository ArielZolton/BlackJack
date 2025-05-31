import UserCard from "./UserCard";
import { Stack } from "@mui/material";
import EmptyBanner from "./EmptyBanner";

export default function UserCards({ users }) {
  if (users.length === 0) {
    return <EmptyBanner title="Error" text="no users" severity="error" />;
  } else {
    return (
      <Stack spacing={2}>
        {users.map((user) => {
          return <UserCard {...user} />;
        })}
      </Stack>
    );
  }
}
