import Product from "../model/productModel.js";

export const createProduct = async (req, res) => {
  const { name, price, description, qty, category, imageURL } = req.body;
  const product = new Product({
    name,
    price,
    description,
    qty,
    category,
    imageURL,
  });
  await product.save(); // saving to the database
  res.json({
    message: "Product created successfully",
    product,
  });
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json({
    message: "Products fetched successfully",
    products,
  });
};
