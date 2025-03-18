import { create } from "zustand";
import { CyclesData } from "../ApiTypes";

interface CyclesState {
  data: null | CyclesData;
  setData: (data: CyclesData) => void;
}

const useCyclesStore = create<CyclesState>((set) => ({
  data: null,
  setData: (data: CyclesData) => {
    set(() => ({
      data,
    }));
  },
}));

export default useCyclesStore;
