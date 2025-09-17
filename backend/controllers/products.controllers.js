import productModel from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await productModel.find({});
  return res.status(200).json({
    products: products
  })
}

export const createProduct = async (req, res) => {
console.log(req.body);

  const { name, description, price, stock, imageUrl, category } = req.body.data;
  if (!name || !description || !price || !stock || !imageUrl || !category) {
    return res.status(400).json({
        message:"All fields are required"
    })
  }

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

export const getProductById = async (req, res) => {
  const id = req.params.id;

  const products = await productModel.findById(id);
  return res.status(200).json({
    products: products
  })
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  
  const {name, description, price, stock, category, imageUrl} = req.body.updatedProduct;

  let updatedProduct = {};

  if (name){
    updatedProduct.name = name;
  }
  if (description){
    updatedProduct.description = description;
  }
  if (price){
    updatedProduct.price = price;
  }
  if (stock){
    updatedProduct.stock = stock;
  }
  if (category){
    updatedProduct.category = category;
  }
  if (imageUrl){
    updatedProduct.imageUrl = imageUrl;
  }

const productUpdated =  await productModel.findByIdAndUpdate(id, updatedProduct, {
    new: true
});

  return res.status(200).json({
    success: true,
    message: "Product updated successfully",
    productUpdated
  })
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({
        message:"Product id is required"
    })
  }

const productDeleted =  await productModel.findByIdAndDelete(id);

  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    productDeleted
  })
};