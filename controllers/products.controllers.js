import productModel from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await productModel.find({});
  return res.status(200).json({
    products: products
  })
}

export const createProduct = async (req, res) => {
  const { name, description, price, stock, imageUrl, category } = req.body;

  const newProduct = new productModel({
    name,
    description,
    price,
    stock,
    imageUrl,
    category,
  });

  if (!newProduct) {
    return res.status(400).json({
        message:"Failed to create product"
    })
  }

  await newProduct.save();

  res.status(200).json({
    message: "New product created successfully",
    newProduct
  })
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;

  const products = await productModel.findById(id);
  return res.status(200).json({
    products: products
  })
};