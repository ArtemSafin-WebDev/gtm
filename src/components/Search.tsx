import SearchIcon from "../icons/SearchIcon";

export default function Search() {
  return (
    <div className="flex items-center gap-3 rounded-lg border-1 border-greyish p-5 px-3 py-2">
      <SearchIcon className="h-4 w-4 shrink-0 fill-midgrey" />
      <input
        type="text"
        placeholder="Поиск"
        className="w-[30%] grow-1 text-sm font-medium text-darktext placeholder-midgrey outline-0"
      />
    </div>
  );
}
