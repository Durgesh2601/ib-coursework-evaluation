import { create } from "zustand";

export const useTabsStore = create((set) => ({
  activeTab: "IA Example",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export const useRefetchStoredData = create((set) => ({
  refetch: false,
  setRefetch: (value) => set({ refetch: value }),
}));
