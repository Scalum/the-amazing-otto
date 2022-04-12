import { Manifest as TManifest } from "../api/manifest/Manifest";

export const MANIFEST_TITLE_FIELD = "id";

export const ManifestTitle = (record: TManifest): string => {
  return record.id || record.id;
};
