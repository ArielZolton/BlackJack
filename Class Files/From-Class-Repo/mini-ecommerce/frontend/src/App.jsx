import "./App.css";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ProductCard from "./components/productCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid>
            <ProductCard key={product._id} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
