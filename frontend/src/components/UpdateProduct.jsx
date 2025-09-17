import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProductStore } from "@/store/useProductStore";

function UpdateProduct({
  updateModalOpen,
  setUpdateModalOpen,
  selectedProduct,
}) {
  const { updateProduct, isUpdatingProduct, fetchProducts } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState({
    id: selectedProduct?._id || null,
    name: selectedProduct?.name || "",
    price: selectedProduct?.price || 0,
    stock: selectedProduct?.stock || 0,
    description: selectedProduct?.description || "",
    imageUrl: selectedProduct?.imageUrl || "",
    category: selectedProduct?.category || "",
  });

//   console.log("Updated Product:", updatedProduct);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateProduct(updatedProduct);
    // console.log("Update Product Response:", response);

    if (response.success) {
      setUpdateModalOpen(false); // Close the modal after submission
      fetchProducts(); // Refetch products to get the updated list
    }
  };

  return (
    <Dialog open={updateModalOpen} onOpenChange={setUpdateModalOpen}>
      <DialogTrigger>Update Product</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            Make changes to your product below.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-gray-300 p-4 rounded-lg shadow"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-2 rounded border border-gray-500"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="p-2 rounded border border-gray-500"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="stock" className="font-semibold">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                className="p-2 rounded border border-gray-500"
                value={updatedProduct.stock}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    stock: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                value={updatedProduct.description}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    description: e.target.value,
                  })
                }
                className="p-2 rounded border border-gray-500"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="imageUrl" className="font-semibold">
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                value={updatedProduct.imageUrl}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    imageUrl: e.target.value,
                  })
                }
                className="p-2 rounded border border-gray-500"
              />
            </div>
            <button
              type="submit"
              disabled={isUpdatingProduct}
              className={`bg-blue-600 p-2 rounded hover:bg-blue-800 text-white ${
                isUpdatingProduct ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isUpdatingProduct ? "Updating..." : "Update Product"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateProduct;
