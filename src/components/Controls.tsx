import CyclesRange from "./CyclesRange";
import MainControls from "./MainControls";

export default function Controls() {
  return (
    <div className="pointer-events-none z-1 flex w-full items-stretch">
      <MainControls />
      <CyclesRange />
    </div>
  );
}
