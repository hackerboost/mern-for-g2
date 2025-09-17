import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProductStore } from "@/store/useProductStore";
import { Button } from "@/components/ui/button"

function DeleteProduct({
  deleteModalOpen,
  setDeleteModalOpen,
  selectedProduct,
}) {
  const { deleteProduct, isDeletingProduct, fetchProducts } = useProductStore();

//   console.log("Updated Product:", updatedProduct);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await deleteProduct(selectedProduct._id);

    if (response.success) {
      setDeleteModalOpen(false); // Close the modal after submission
      fetchProducts(); // Refetch products to get the updated list
    }
  };

  return (
    <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
      <DialogTrigger>Delete Product</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product?
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
         <Button
           variant="destructive"
           onClick={handleDelete}
           disabled={isDeletingProduct}
         >
           {isDeletingProduct ? "Deleting..." : "Delete Product"}
         </Button>  
         <Button
           variant="outline"
           onClick={() => setDeleteModalOpen(false)}
           disabled={isDeletingProduct}
         >
           Cancel
         </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteProduct;
