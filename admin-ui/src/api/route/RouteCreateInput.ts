import { ManifestCreateNestedManyWithoutRoutesInput } from "./ManifestCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  fromLocation?: string | null;
  manifests?: ManifestCreateNestedManyWithoutRoutesInput;
  name?: string | null;
  toLocation?: string | null;
};
