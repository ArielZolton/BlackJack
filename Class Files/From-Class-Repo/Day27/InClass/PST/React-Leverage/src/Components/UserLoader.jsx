import { Skeleton, Stack } from "@mui/material";

export default function UserLoader({ count = 3 }) {
  return (
    <Stack spacing={2}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          height={210}
          sx={{ bgcolor: "grey.200" }}
        />
      ))}
    </Stack>
  );
}
