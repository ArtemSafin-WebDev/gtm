import { create } from "zustand";
import { CyclesData } from "../ApiTypes";

interface CyclesState {
  data: null | CyclesData[];
  setData: (data: CyclesData[]) => void;
  from: CyclesData | null;
  setFrom: (from: CyclesData) => void;
  to: CyclesData | null;
  setTo: (to: CyclesData) => void;
}

const useCyclesStore = create<CyclesState>((set) => ({
  data: null,
  setData: (data: CyclesData[]) => {
    set(() => ({
      data,
    }));
  },
  from: null,
  setFrom: (from) => {
    set(() => ({
      from,
    }));
  },
  to: null,
  setTo: (to) => {
    set(() => ({
      to,
    }));
  },
}));

export default useCyclesStore;
