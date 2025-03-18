import useHierarchyStore from "../store/HierarchyStore";
import Hierarchy from "./Hierarchy";
import PeriodSelection from "./PeriodSelection";
import Subhierarchy from "./Subhierarchy";

export default function MainControls() {
  const activeMainItem = useHierarchyStore((state) => state.activeMainItem);

  return (
    <div className="pointer-events-auto flex shrink-0 border-r border-greyish bg-white text-darktext">
      <div className="w-[280px]">
        <PeriodSelection />
        <Hierarchy />
      </div>
      {activeMainItem && <Subhierarchy />}
    </div>
  );
}
