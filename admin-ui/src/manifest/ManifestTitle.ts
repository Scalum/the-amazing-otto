import { Manifest as TManifest } from "../api/manifest/Manifest";

export const MANIFEST_TITLE_FIELD = "arrivalTime";

export const ManifestTitle = (record: TManifest): string => {
  return record.arrivalTime || record.id;
};
