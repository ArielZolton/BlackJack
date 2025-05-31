import { Typography, Alert, AlertTitle } from "@mui/material";

export default function EmptyBanner({ title, text, severity = "info" }) {
  return (
    <Alert variant="filled" severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      <Typography variant="body1">{text}</Typography>
    </Alert>
  );
}
