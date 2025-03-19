import { ChangeEvent } from "react";
import SearchIcon from "../icons/SearchIcon";
import useSearchStore from "../store/SearchStore";
import useHierarchyStore from "../store/HierarchyStore";

export default function Search() {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);
  const setActiveSubhierarchyItem = useHierarchyStore(
    (state) => state.setSubhierarchyActiveItem,
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setActiveSubhierarchyItem(null);
  };
  return (
    <div className="flex items-center gap-3 rounded-lg border-1 border-greyish p-5 px-3 py-2">
      <SearchIcon className="h-4 w-4 shrink-0 fill-midgrey" />
      <input
        type="text"
        placeholder="Поиск"
        className="w-[30%] grow-1 text-sm font-medium text-darktext placeholder-midgrey outline-0"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
