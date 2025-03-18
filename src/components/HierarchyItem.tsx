import { useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { DataItem } from "../types";
import { cn } from "../utils";
import useHierarchyStore from "../store/HierarchyStore";

interface IHierarchyItemProps {
  item: DataItem;
  depth: number;
}

export default function HierarchyItem({ depth, item }: IHierarchyItemProps) {
  const { name, items } = item;
  const setActiveMainItem = useHierarchyStore(
    (state) => state.setActiveMainItem,
  );
  const activeMainItem = useHierarchyStore((state) => state.activeMainItem);
  const [open, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (items.length) {
      setOpen((prev) => !prev);
    } else {
      setActiveMainItem(item);
    }
  };
  return (
    <div className="flex flex-col">
      <button
        onClick={handleClick}
        className={cn(
          "flex cursor-pointer items-center gap-4 px-4 py-3 text-sm font-medium text-midgrey",
          {
            "pl-11": depth === 1,
            "bg-orangish": activeMainItem?.code === item.code,
            "text-bluetext": activeMainItem?.code === item.code,
          },
        )}
      >
        {items.length ? (
          <ArrowDownIcon
            className={cn("h-3 w-3 fill-current transition-transform", {
              "rotate-180": open,
            })}
          />
        ) : null}
        {name}
      </button>
      {items.length ? (
        <div
          className={cn("hidden flex-col", {
            flex: open,
          })}
        >
          {items.map((item) => (
            <HierarchyItem
              item={item}
              key={item.code}
              depth={++depth}
            ></HierarchyItem>
          ))}
        </div>
      ) : null}
    </div>
  );
}
