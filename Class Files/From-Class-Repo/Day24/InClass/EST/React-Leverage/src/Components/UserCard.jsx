import { Card, CardContent, Typography } from "@mui/material";
import { Avatar } from "@mui/material";

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }

function stringAvatar(username) {
    console.log(username)
    return {
      sx: {
        bgcolor: stringToColor(username),
      },
      children: `${username.split(' ')[0][0]}${username.split(' ')[1][0]}`,
    };
  }

export default function UserCard({username, email, balance}) {
    return (
        <Card>
            <CardContent>
                <Avatar {...stringAvatar(username)} />
                <Typography variant="h5">{username}</Typography>
                <Typography variant="h6">{email}</Typography>
                <Typography variant="h6">{balance}</Typography>
            </CardContent>
        </Card>
    )
}