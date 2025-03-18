import PlayIcon from "../icons/PlayIcon";

function CyclesRange() {
  return (
    <div className="pointer-events-auto flex grow-1 items-center gap-5 self-start border-b border-greyish bg-white px-5 py-3">
      <button className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full border-1 border-greyish text-deepblue transition-colors hover:border-deepblue hover:bg-deepblue hover:text-white">
        <PlayIcon className="h-full w-full fill-current" />
      </button>
      <div className="grow-1"></div>
    </div>
  );
}

export default CyclesRange;
