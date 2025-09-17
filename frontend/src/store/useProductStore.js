import api from "@/lib/axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  isLoadingProducts: false,
  isCreatingProduct: false,
  isUpdatingProduct: false,
  isDeletingProduct: false,

  createProduct: async (data) => {
    set({ isCreatingProduct: true });

    // Validations the data before sending to the backend
    if (
      !data.name ||
      !data.description ||
      !data.price ||
      !data.stock ||
      !data.category ||
      !data.imageUrl
    ) {
      console.log("All fields are required");
      set({ isCreatingProduct: false });
      return;
    }

    try {
      const response = await api.post("/products", { data });

      set({ products: response.data.newProducts });

      set({ isCreatingProduct: false });
      
      return true;
    } catch (error) {
      console.log(error);
      set({ isLoadingProducts: false });
    } finally {
      set({ isLoadingProducts: false });
    }
  },

  fetchProducts: async () => {
    set({ isLoadingProducts: true });

    try {
      const response = await api.get("/products")
      if (!response.data) {
        console.log("Failed to fectch products")
        return;
      }

      const data = response.data
      set({products: data.products})
    } catch (error) {
      set({ isLoadingProducts: false });
      console.log(error);
    } finally {
          set({isLoadingProducts: false});
    }
  },

  updateProduct: async (updatedProduct) => {
    set({ isUpdatingProduct: true });

    // Validations the data before sending to the backend
    if (
      !updatedProduct.name ||
      !updatedProduct.description ||
      !updatedProduct.price ||
      !updatedProduct.stock ||
      !updatedProduct.category ||
      !updatedProduct.imageUrl 
    ) {
      console.log("All fields are required");
      set({ isUpdatingProduct: false });
      return;
    }

    try {
      const response = await api.put(`/products/${updatedProduct.id}`, { updatedProduct });

        console.log("Update Response:", response);

      set({ isUpdatingProduct: false });

      return response.data;
    } catch (error) {
      console.log(error);
      set({ isUpdatingProduct: false });
    } finally {
      set({ isUpdatingProduct: false });
    }
  },

  deleteProduct: async (id) => {
    set({ isDeletingProduct: true });

    try {
      const response = await api.delete(`/products/${id}`);
      console.log("Delete Response:", response);

      set({ isDeletingProduct: false });

      return response.data;
    } catch (error) {
      console.log(error);
      set({ isDeletingProduct: false });
    } finally {
      set({ isDeletingProduct: false });
    }
  }

}));
