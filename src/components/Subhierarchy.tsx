import { DmsEntity, PilesEntity } from "../ApiTypes";
import useHierarchyStore from "../store/HierarchyStore";
import useRegionStore from "../store/RegionStore";
import useSearchStore from "../store/SearchStore";
import { cn } from "../utils";

export default function Subhierarchy() {
  const activeItem = useHierarchyStore((state) => state.activeMainItem);
  const regionData = useRegionStore((state) => state.data);
  const searchQuery = useSearchStore((state) => state.query);
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

  const pilesWithDms = piles
    ?.map((pile) => {
      const correspondingDms = dms?.find((dm) => dm.object_code === pile.code);
      return [pile, correspondingDms] as [PilesEntity, DmsEntity | undefined];
    })
    .filter((item) => {
      if (searchQuery.trim() === "") return true;
      if (
        item[0].code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item[1]?.code?.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return true;
      return false;
    });

  if (!pilesWithDms) return null;

  return (
    <div className="relative flex w-[240px] border-l border-greyish">
      <div className="absolute inset-0 scrollbar-hidden overflow-y-auto">
        {!pilesWithDms.length && searchQuery.trim() ? (
          <div className="px-5 py-3 text-left text-sm text-midgrey">
            Результаты не найдены
          </div>
        ) : null}
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
