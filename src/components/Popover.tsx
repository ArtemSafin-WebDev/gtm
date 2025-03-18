import useHierarchyStore from "../store/HierarchyStore";

export default function Popover() {
  const item = useHierarchyStore((state) => state.subhierarchyActiveItem);
  if (!item) return null;

  console.log("Item", item);
  return (
    <div className="absolute right-[20%] bottom-[20%] z-10 flex w-[232px] flex-col overflow-hidden rounded-xl bg-white text-darktext shadow-xl">
      <h3 className="px-4 py-3 text-sm font-bold uppercase">
        {`Свая ID: ${item[0] ? item[0].code : ""}${item[1] ? "/" + item[1].code : ""}`}
      </h3>
      <div className="flex flex-col gap-2 border-t border-greyish px-4 py-3">
        {item[0]?.code ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">ID</div>
            <div className="text-xs font-medium text-darktext">
              {item[0].code}
            </div>
          </div>
        ) : null}
        {item[0]?.coord_x ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">X</div>
            <div className="text-xs font-medium text-darktext">
              {item[0].coord_x}
            </div>
          </div>
        ) : null}
        {item[0]?.coord_y ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">Y</div>
            <div className="text-xs font-medium text-darktext">
              {item[0].coord_y}
            </div>
          </div>
        ) : null}
        {item[0]?.length_under ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">
              Длина под землей
            </div>
            <div className="text-xs font-medium text-darktext">
              {item[0].length_under}
            </div>
          </div>
        ) : null}
        {item[0]?.length_above ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">
              Длина над землей
            </div>
            <div className="text-xs font-medium text-darktext">
              {item[0].length_above}
            </div>
          </div>
        ) : null}
        {item[0]?.diameter ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">Диаметр</div>
            <div className="text-xs font-medium text-darktext">
              {item[0].diameter}
            </div>
          </div>
        ) : null}
        {item[1]?.orientation ? (
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="text-xs font-medium text-midgrey">Ориентация</div>
            <div className="text-xs font-medium text-darktext">
              {item[1].orientation}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
