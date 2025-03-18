import { create } from "zustand";
import { RegionData } from "../ApiTypes";

interface RegionState {
  data: null | RegionData;
  setData: (data: RegionData) => void;
}

const useRegionStore = create<RegionState>((set) => ({
  data: null,
  setData: (data: RegionData) => {
    set(() => ({
      data,
    }));
  },
}));

export default useRegionStore;
