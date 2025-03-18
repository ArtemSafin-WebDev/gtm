import { useEffect, useRef } from "react";
import useRegionStore from "../store/RegionStore";
import useCyclesStore from "../store/CyclesStore";

export default function ModelView() {
  const regionData = useRegionStore((state) => state.data);
  const cyclesData = useCyclesStore((state) => state.data);
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    console.log("Region data", regionData);
    console.log("Cycles data", cyclesData);
    // Инициализация просмотра модели
  }, [regionData, cyclesData]);

  return (
    <div className="absolute inset-0 bg-gray-200">
      <canvas
        ref={ref}
        className="absolute top-0 left-0 h-full w-full"
      ></canvas>
    </div>
  );
}
