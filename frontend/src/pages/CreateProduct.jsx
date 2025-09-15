import { useProductStore } from "@/store/useProductStore";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  const { createProduct, isCreatingProduct } = useProductStore();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    imageUrl: "",
    category: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await createProduct(formData)
    if (success) {
      setFormData({
        name: "",
        price: 0,
        stock: 0,
        imageUrl: "",
        category: "",
        description: "",
      });
      navigate("/")
    }
    }

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-center text-blue-950 text-4xl">Create a Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-300 p-4 rounded-lg shadow">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-2xl">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter the product name"
              className="border border-gray-700 py-3 px-2 rounded text-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="text-2xl">
              Product Price
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter the product price"
              className="border border-gray-700 py-3 px-2 rounded text-lg"
              required
              min={0}
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="stock" className="text-2xl">
              Product Stock
            </label>
            <input
              id="stock"
              type="number"
              placeholder="Enter the product url"
              className="border border-gray-700 py-3 px-2 rounded text-lg"
              required
              min={0}
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="imageUrl" className="text-2xl">
              Product Image URL
            </label>
            <input
              id="imageUrl"
              type="url"
              placeholder="Enter the product image url"
              className="border border-gray-700 py-3 px-2 rounded text-lg"
              required
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="text-2xl">
              Product Category
            </label>
            <input
              id="category"
              type="text"
              placeholder="Enter the product category"
              className="border border-gray-700 py-3 px-2 rounded text-lg"
              required
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-2xl">
              Product Description
            </label>
            <textarea
              id="description"
              type="text"
              placeholder="Enter the product description"
              className="border border-gray-700 py-3 px-2 rounded text-lg"
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className={`px-6 py-3 text-2xl cursor-pointer rounded flex items-center gap-2 justify-center disabled:opacity-50 ${isCreatingProduct ? "cursor-not-allowed bg-gray-600 text-white" : "bg-blue-950 text-white"}`}
            disabled={isCreatingProduct}
          >
            <Loader2 className={`h-6 w-6 ${isCreatingProduct ? "animate-spin" : "hidden"}`} />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
