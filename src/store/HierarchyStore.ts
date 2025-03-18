import { create } from "zustand";
import { DataItem } from "../types";

interface HierarchyState {
  activeMainItem: DataItem | null;
  setActiveMainItem: (item: DataItem) => void;
}

const useHierarchyStore = create<HierarchyState>((set) => ({
  activeMainItem: null,
  setActiveMainItem: (item: DataItem) => {
    set(() => ({
      activeMainItem: item,
    }));
  },
}));

export default useHierarchyStore;
