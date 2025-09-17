import { EditIcon, Trash2Icon } from "lucide-react";
import React from "react";

function ProductCard({ product, setUpdateModalOpen, key, setSelectedProduct, setDeleteModalOpen }) {
  return (
    <div key={key} className="shadow rounded-lg border border-gray-500/25">
      <div>
        <img src={product.imageUrl} alt={product.name} className="rounded-t-lg"/>
        <div className="p-6 bg-gray-300">
          <h3 className="text-3xl font-semibold">{product.name}</h3>
          <p className="font-semibold">GHS{product.price}</p>
          <p className="font-semibold italic">Available: {product.stock}</p>
          <p className="line-clamp-4">{product.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <button 
            onClick={() => {
              setSelectedProduct(product)
              setUpdateModalOpen(true)
            }}
            className="bg-blue-600 p-2 rounded hover:bg-blue-800 cursor-pointer">
              <EditIcon className="text-white"/>
            </button>

            <button 
             onClick={() => {
              setSelectedProduct(product)
              setDeleteModalOpen(true)
            }}
            className="bg-red-600 p-2 rounded hover:bg-red-800 cursor-pointer">
              <Trash2Icon className="text-white"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
