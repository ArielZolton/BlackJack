import { Skeleton, Stack } from "@mui/material";

export default function UserLoader({ count = 3 }) {
  return (
    <Stack spacing={2}>
      {Array.from({ length: count }).map((_, index) => {
        return (
          <Skeleton
            key={index}
            variant="rounded"
            height={220}
            sx={{ bgcolor: "grey.200" }}
          />
        );
      })}
    </Stack>
  );
}
