export interface RegionData {
  name: string;
  code: string;
  size_length: number;
  size_width: number;
  objects?: ObjectsEntity[] | null;
}
export interface ObjectsEntity {
  piles?: PilesEntity[] | null;
  supports?: SupportsEntity[] | null;
  platforms?: PlatformsEntity[] | null;
  block_boxes?: BlockBoxesEntity[] | null;
  dms?: DmsEntity[] | null;
  tss?: TssEntity[] | null;
}
export interface PilesEntity {
  code: string;
  coord_x: number;
  coord_y: number;
  diameter: number;
  length_under: number;
  length_above: number;
}
export interface SupportsEntity {
  code: string;
  code_pile: string;
  length: number;
  width: number;
}
export interface PlatformsEntity {
  code: string;
  name: string;
  vertices?: VerticesEntity[] | null;
  thickness: number;
  height: number;
  fences?: FencesEntity[] | null;
}
export interface VerticesEntity {
  coord_x: number;
  coord_y: number;
}
export interface FencesEntity {
  fence_start_x: number;
  fence_start_y: number;
  fence_end_x: number;
  fence_end_y: number;
}
export interface BlockBoxesEntity {
  code: string;
  name: string;
  coord_x: number;
  coord_y: number;
  length_x: number;
  length_y: number;
  size_height: number;
  height_above: number;
  edges_orientation?: EdgesOrientationEntity[] | null;
  door_orientation: string;
}
export interface EdgesOrientationEntity {
  orientation: string;
  dms_pairs?: DmsPairsEntity[] | null;
}
export interface DmsPairsEntity {
  dms_start_code: string;
  dms_end_code: string;
}
export interface DmsEntity {
  code: string;
  name: string;
  object_code: string;
  orientation: string;
}
export interface TssEntity {
  code: string;
  name: string;
  coord_x: number;
  coord_y: number;
}

export interface CyclesData {
  code: string;
  season: string;
  year: number;
  name: string;
  rank: number;
  period_date: string;
}
