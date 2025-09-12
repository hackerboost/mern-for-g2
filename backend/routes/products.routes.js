import express from 'express';
import { createProduct, getProductById, getProducts } from '../controllers/products.controllers.js';
import { authenticate, authorize } from '../middleware/authenticate.js';

const productsRouter = express.Router();

productsRouter.get("/", getProducts)
productsRouter.post("/", createProduct)
productsRouter.get("/:id", getProductById)

export default productsRouter;