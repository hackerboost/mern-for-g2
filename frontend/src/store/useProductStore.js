import api from "@/lib/axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  isLoadingProducts: false,

  createProduct: async (data) => {
    set({ isLoadingProducts: true });

    // Validations the data before sending to the backend
    if (!data.name || !data.description || !data.price || !data.stock || !data.category || !data.imageUrl) {
      console.log("All fields are required");
      set({ isLoadingProducts: false });
      return;
    }

    try {
        const response = await api.post("/products", { data });

        set({ products: response.data.newProducts });

        set({ isLoadingProducts: false });
    } catch (error) {
      console.log(error);
      set({ isLoadingProducts: false });
    } finally {
      set({ isLoadingProducts: false });
    }
  },
}));
