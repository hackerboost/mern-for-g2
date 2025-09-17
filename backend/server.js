import dotenv from "dotenv";
dotenv.config(); // For dotenv dependency configuration

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./database/database.js";
import productModel from "./models/product.model.js";
import productsRouter from "./routes/products.routes.js";
import userRouter from "./routes/user.routes.js";

// Get the express instance to start the app
const app = express();
app.use(express.json()); // To parse JSON data

app.use(cors("*")); // To avoid CORS error
app.use(cookieParser()); // To parse cookies

// Project routes
app.use("/api/auth", userRouter)
app.use("/api/products", productsRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API is working, and now you can build your app");
});

app.get("/fawaz", (req, res) => {
  res.send("API is working for fawaz");
});


app.post("/fawaz", (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  res.send(`API is working for fawaz, received name: ${name}, age: ${age}`);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Express app is running on port", PORT);
  connectDB();
});
