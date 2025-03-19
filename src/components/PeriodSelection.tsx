import { useEffect } from "react";
import useCyclesData from "../hooks/useCyclesData";
import Search from "./Search";
import useCyclesStore from "../store/CyclesStore";
import PeriodSelects from "./PeriodSelects";

export default function PeriodSelection() {
  const { data } = useCyclesData("/data/cycles.json");
  const setCyclesData = useCyclesStore((state) => state.setData);

  useEffect(() => {
    if (!data) return;
    setCyclesData(data);
  }, [data]);

  return (
    <div className="flex flex-col border-b border-greyish p-5">
      <h1 className="mb-2 text-lg font-bold uppercase">3Д Модель</h1>
      <PeriodSelects />
      <Search />
    </div>
  );
}
