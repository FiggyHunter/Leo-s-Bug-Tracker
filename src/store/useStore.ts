import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCustomStore = create(
  persist(
    (set, get) => ({
      jwt: "a",
      isRehydrated: false, // New state property to track rehydration
      setJwt: (jwt: string) => set({ jwt }), // Correctly use set with an object
    }),
    {
      onRehydrateStorage: () => (state) => {},
      name: "jwt", // name of the item in the storage (must be unique)
    }
  )
);
