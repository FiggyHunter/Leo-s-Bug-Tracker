import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useIdStore = create((set, get) => ({
  userId: "",
  setUserId: (userId: string) => set({ userId }), // Correctly use set with an object
}));
