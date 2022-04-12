import { ManifestWhereInput } from "./ManifestWhereInput";
import { ManifestOrderByInput } from "./ManifestOrderByInput";

export type ManifestFindManyArgs = {
  where?: ManifestWhereInput;
  orderBy?: Array<ManifestOrderByInput>;
  skip?: number;
  take?: number;
};
