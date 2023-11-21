import { create } from "zustand";

export const useButtonLoadingStore = create((set) => ({
  buttonLoading: false,
  setButtonLoading: (value: boolean) => set({ buttonLoading: value }),
}));
