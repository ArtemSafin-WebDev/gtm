import Hierarchy from "./Hierarchy";
import PeriodSelection from "./PeriodSelection";

export default function MainControls() {
  return (
    <div className="pointer-events-auto flex w-lg shrink-0 flex-col border-r border-greyish bg-white text-darktext">
      <PeriodSelection />
      <Hierarchy />
    </div>
  );
}
