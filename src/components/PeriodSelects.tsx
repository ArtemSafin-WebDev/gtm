import useCyclesStore from "@/store/CyclesStore";
import Select from "./Select";
import { useEffect } from "react";

export default function PeriodSelects() {
  const cyclesData = useCyclesStore((state) => state.data);
  const setFrom = useCyclesStore((state) => state.setFrom);
  const setTo = useCyclesStore((state) => state.setTo);
  const to = useCyclesStore((state) => state.to);
  const from = useCyclesStore((state) => state.from);

  console.log("Cycles data hello", cyclesData);

  useEffect(() => {
    if (!cyclesData) return;

    const firstItem = cyclesData.at(0);
    const lastItem = cyclesData.at(-1);

    if (firstItem === lastItem) return;

    if (firstItem) setFrom(firstItem);
    if (lastItem) setTo(lastItem);
  }, [cyclesData]);

  const indexOfFrom = cyclesData?.findIndex(
    (item) => item.name === from?.name && item.code === from.code,
  );
  const toOptions = cyclesData
    ?.filter((_item, itemIndex) => {
      if (typeof indexOfFrom === "undefined" || indexOfFrom === -1) return true;
      if (itemIndex > indexOfFrom) return true;
      return false;
    })
    .map((item) => {
      return {
        title: item.name,
        value: item,
      };
    });

  const indexOfTo = cyclesData?.findIndex(
    (item) => item.name === to?.name && item.code === to.code,
  );
  const fromOptions = cyclesData
    ?.filter((_item, itemIndex) => {
      if (typeof indexOfTo === "undefined" || indexOfTo === -1) return true;
      if (itemIndex >= indexOfTo) return false;
      return true;
    })
    .map((item) => {
      return {
        title: item.name,
        value: item,
      };
    });

  let fromInitial = fromOptions?.find((option) => {
    if (!from) return false;
    if (from.name === option.title && option.value.code === from.code)
      return true;
    return false;
  });
  let toInitial = toOptions?.find((option) => {
    if (!to) return false;
    if (to.name === option.title && option.value.code === to.code) return true;
    return false;
  });

  console.log("To options", toOptions, toInitial, from, to);

  return (
    <div className="hello mb-3 flex flex-col gap-3">
      <Select
        options={fromOptions ?? []}
        placeholder="С"
        onOptionSelect={(item) => {
          console.log("Selected from value", item);
          setFrom(item.value);
        }}
        initialValue={fromInitial}
      />
      <Select
        options={toOptions ?? []}
        placeholder="До"
        onOptionSelect={(item) => {
          console.log("Selected from value", item);
          setTo(item.value);
        }}
        initialValue={toInitial}
      />
    </div>
  );
}
