import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/products.controllers.js';

const productsRouter = express.Router();

productsRouter.get("/", getProducts)
productsRouter.post("/", createProduct)
productsRouter.get("/:id", getProductById)
productsRouter.put("/:id", updateProduct)
productsRouter.delete("/:id", deleteProduct)

export default productsRouter;