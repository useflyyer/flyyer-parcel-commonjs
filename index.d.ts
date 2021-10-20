import type { NodeFS, MemoryFS, OverlayFS } from "@parcel/fs";
import type { default as Parcel, createWorkerFarm } from "@parcel/core";

export type ParcelReImports = {
  Parcel: typeof Parcel,
  createWorkerFarm: typeof createWorkerFarm,
  NodeFS: typeof NodeFS,
  MemoryFS: typeof MemoryFS,
  OverlayFS: typeof OverlayFS,
}

export function importParcel(): Promise<ParcelReImports>;
