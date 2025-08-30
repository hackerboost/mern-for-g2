import express from 'express';
import { createProduct, getProducts, updateProduct } from '../controllers/products.controllers.js';

const productsRouter = express.Router();

productsRouter.get("/", getProducts)
productsRouter.post("/", createProduct)
productsRouter.get("/:id", updateProduct) 

export default productsRouter;