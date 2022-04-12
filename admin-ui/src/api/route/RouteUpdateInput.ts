import { ManifestUpdateManyWithoutRoutesInput } from "./ManifestUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  fromLocation?: string | null;
  manifests?: ManifestUpdateManyWithoutRoutesInput;
  name?: string | null;
  toLocation?: string | null;
};
