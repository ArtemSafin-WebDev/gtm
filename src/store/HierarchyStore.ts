import { create } from "zustand";
import { DataItem } from "../types";
import { DmsEntity, PilesEntity } from "../ApiTypes";

interface HierarchyState {
  activeMainItem: DataItem | null;
  setActiveMainItem: (item: DataItem | null) => void;
  subhierarchyActiveItem: null | [PilesEntity, DmsEntity | undefined];
  setSubhierarchyActiveItem: (
    item: null | [PilesEntity, DmsEntity | undefined],
  ) => void;
}

const useHierarchyStore = create<HierarchyState>((set) => ({
  activeMainItem: null,
  setActiveMainItem: (item) => {
    set(() => ({
      activeMainItem: item,
    }));
  },
  subhierarchyActiveItem: null,
  setSubhierarchyActiveItem: (item) => {
    set(() => ({
      subhierarchyActiveItem: item,
    }));
  },
}));

export default useHierarchyStore;
