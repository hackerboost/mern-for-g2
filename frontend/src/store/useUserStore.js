import api from "@/lib/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      isSigningUp: false,
      isLoggingIn: false,
      isAuthenticated: false,
      authUser: null,
      isUpdating: false,

      signup: async (data) => {
        set({ isSigningUp: true });

        // Validations the data before sending to the backend
        if (!data.name || !data.email || !data.password) {
          console.log("All fields are required");
          set({ isSigningUp: false });
          return;
        }

        try {
          const response = await api.post("/auth/signup", {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
          });

          if (response.status !== 201) {
            console.log("Signup failed");
            set({ isSigningUp: false });
            return;
          }

          console.log("User", response.data.user);

          set({ authUser: response.data.user });

          set({ isSigningUp: false });

          return true;
        } catch (error) {
          console.log(error);
          set({ isSigningUp: false });
        } finally {
          set({ isSigningUp: false });
        }
      },

      login: async (data) => {
        set({ isLoggingIn: true });

        // Validate the data before sending to the backend
        if (!data.email || !data.password) {
          console.log("Email and Password are required");
          set({ isLoggingIn: false });
          return;
        }

        try {
          const response = await api.post("/auth/login", {
            email: data.email,
            password: data.password,
          });

          console.log("User", response.data.user);

          if (response.status !== 200) {
            console.log("Login failed");
            set({ isLoggingIn: false });
            return;
          }

          set({ authUser: response.data.user, isAuthenticated: true });

          console.log("User", response.data.user);

          set({ isLoggingIn: false });

          return true;
        } catch (error) {
          console.log(error);
          set({ isLoggingIn: false });
        } finally {
          set({ isLoggingIn: false });
        }
      },

      logout: async () => {
        try {
          const response = await api.post("/auth/logout");

          if (response.status !== 200) {
            console.log("Logout failed");
            return;
          }

          console.log("Logout successful");

          set({ authUser: null, isAuthenticated: false });
        } catch (error) {
          console.log("Logout error", error);
        }
      },

      updateProfile: async (data, userId) => {
        set({ isUpdating: true });

        try {
          const response = await api.put(`/auth/update/${userId}`, { data });

          if (response.status !== 200) {
            console.log("Update failed");
            return false;
          }

          set({ authUser: response.data.user, isAuthenticated: true, isUpdating: false });

          return true;
        } catch (error) {
          console.log("Update error", error);
          return false;
        }
      },
    }),
    {
      name: "auth-user", // name of the item in the storage (must be unique)
      partialize: (state) => ({ 
        isAuthenticated: state.isAuthenticated, 
        authUser: state.authUser
      }),
    }
  )
);
