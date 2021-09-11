exports.importParcel = async function importParcel() {
  const { default: {default: Parcel, createWorkerFarm} } = await import("@parcel/core");
  const { NodeFS, MemoryFS, OverlayFS } = await import("@parcel/fs");
  return { Parcel, NodeFS, MemoryFS, OverlayFS, createWorkerFarm }
}
