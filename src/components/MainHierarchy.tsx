import useRegionStore from "../store/RegionStore";
import { DataItem } from "../types";
import HierarchyItem from "./HierarchyItem";

export default function MainHierarchy() {
  const regionData = useRegionStore((state) => state.data);

  if (!regionData) return null;

  const mainHierarchyData: DataItem[] = [
    {
      name: regionData.name,
      code: regionData.code,
      items: regionData.objects?.length
        ? regionData.objects.map((object) => ({
            name: object.block_boxes![0].name,
            code: object.block_boxes![0].code,
            items: [],
          }))
        : [],
    },
  ];

  return (
    <div className="flex grow-1 flex-col py-0">
      {mainHierarchyData.map((item) => (
        <HierarchyItem item={item} key={item.code} depth={0} />
      ))}
    </div>
  );
}
