import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCustomStore = create(
  persist(
    (set, get) => ({
      jwt: "noToken",
      setJwt: (jwt: string) => set({ jwt }),
    }),
    {
      onRehydrateStorage: () => (state) => {},
      name: "combinedStore", // Choose a unique name for the storage
    }
  )
);
