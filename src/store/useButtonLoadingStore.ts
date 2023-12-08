import { create } from "zustand";

export const useButtonLoadingStore = create((set) => ({
  buttonLoading: {},
  setButtonLoading: (buttonId: string, value: boolean) =>
    set((state: any) => ({
      buttonLoading: { ...state.buttonLoading, [buttonId]: value },
    })),
}));
