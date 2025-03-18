import { DmsEntity, PilesEntity } from "../ApiTypes";
import useHierarchyStore from "../store/HierarchyStore";
import useRegionStore from "../store/RegionStore";
import { cn } from "../utils";

export default function Subhierarchy() {
  const activeItem = useHierarchyStore((state) => state.activeMainItem);
  const regionData = useRegionStore((state) => state.data);
  const activeSubhierarchyItem = useHierarchyStore(
    (state) => state.subhierarchyActiveItem,
  );
  const setActiveSubhierarchyItem = useHierarchyStore(
    (state) => state.setSubhierarchyActiveItem,
  );

  if (!activeItem) return null;
  const currentBlock = regionData?.objects?.find((item) =>
    item.block_boxes?.find((item) => item.name === activeItem.name),
  );

  const piles = currentBlock?.piles;
  const dms = currentBlock?.dms;

  const pilesWithDms = piles?.map((pile) => {
    const correspondingDms = dms?.find((dm) => dm.object_code === pile.code);
    return [pile, correspondingDms] as [PilesEntity, DmsEntity | undefined];
  });
  if (!pilesWithDms) return null;

  console.log("Subhierarchical data", currentBlock);

  return (
    <div className="relative flex w-[240px] border-l border-greyish">
      <div className="absolute inset-0 scrollbar-hidden overflow-y-auto">
        {pilesWithDms.map((item) => (
          <button
            onClick={() => {
              if (
                activeSubhierarchyItem &&
                activeSubhierarchyItem[0].code === item[0].code
              ) {
                setActiveSubhierarchyItem(null);
              } else {
                setActiveSubhierarchyItem(item);
              }
            }}
            key={item[0]?.code}
            className={cn(
              "w-full cursor-pointer px-5 py-3 text-left text-sm text-midgrey transition-colors",
              {
                "bg-orangish":
                  activeSubhierarchyItem &&
                  activeSubhierarchyItem[0].code === item[0].code,
                "text-bluetext":
                  activeSubhierarchyItem &&
                  activeSubhierarchyItem[0].code === item[0].code,
              },
            )}
          >{`Свая id: ${item[0] ? item[0].code : ""}${item[1] ? "/" + item[1].code : ""}`}</button>
        ))}
      </div>
    </div>
  );
}
