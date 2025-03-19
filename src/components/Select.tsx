import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { cn } from "@/utils";

import { useRef, useState, useCallback, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface SelectOption {
  title: string;
  value: any;
}

interface SelectProps {
  options: SelectOption[];
  placeholder: string;
  onOptionSelect: (value: SelectOption) => void;
  initialValue?: SelectOption | null | undefined;
}

function Select({
  options,
  placeholder,
  onOptionSelect,
  initialValue,
}: SelectProps) {
  const [toggle, setToggle] = useState(false);
  const [activeOption, setActiveOption] = useState<SelectOption | undefined>(
    undefined,
  );
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = useCallback(() => setToggle(false), []);
  useOnClickOutside(
    ref as React.RefObject<HTMLDivElement>,
    outsideClickHandler,
  );

  useEffect(() => {
    if (!initialValue) return;
    setActiveOption(initialValue);
  }, [initialValue?.title]);

  return (
    <div className="relative w-full" ref={ref}>
      <button
        className={cn(
          "flex h-10 w-full cursor-pointer rounded-lg border-1 border-greyish text-left text-sm font-medium text-darktext",
        )}
        onClick={() => setToggle((toggle) => !toggle)}
        type="button"
      >
        <span className="mr-3 flex w-15 shrink-0 items-center border-r border-greyish pr-3 pl-3 text-midgrey">
          {placeholder}
        </span>
        <span className="flex w-[30%] min-w-0 grow-1 items-center truncate">
          {activeOption ? activeOption.title : ""}
        </span>
        <ArrowDownIcon
          className={cn(
            "mr-4 h-3 w-3 shrink-0 self-center fill-current transition-transform",
            {
              "rotate-180": toggle,
            },
          )}
        />
      </button>

      <div
        className={cn("absolute top-full left-0 z-20 hidden w-full pt-1", {
          block: toggle,
        })}
      >
        <div className="overflow-hidden rounded-lg border-1 border-greyish bg-white">
          <div className="flex flex-col">
            {options.map((option) => (
              <button
                key={option.title}
                className={cn(
                  "block w-full cursor-pointer px-2 py-2 text-left text-sm font-medium text-midgrey",
                  {
                    "bg-orangish": option.value === activeOption?.value,
                    "text-bluetext": option.value === activeOption?.value,
                    "cursor-default": option.value === activeOption?.value,
                  },
                )}
                onClick={() => {
                  setActiveOption(option);
                  onOptionSelect(option);
                  setToggle(false);
                }}
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;

export type { SelectOption };
