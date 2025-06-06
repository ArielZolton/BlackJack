import { Card, CardContent, Typography } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="body1">{product.price}</Typography>
        <Typography variant="body1">{product.qty}</Typography>
        <Typography variant="body1">{product.category}</Typography>
        <Typography variant="body1">{product.imageURL}</Typography>
      </CardContent>
    </Card>
  );
}
