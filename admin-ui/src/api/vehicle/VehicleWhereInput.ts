import { StringFilter } from "../../util/StringFilter";
import { ManifestListRelationFilter } from "../manifest/ManifestListRelationFilter";

export type VehicleWhereInput = {
  chasisNumber?: StringFilter;
  id?: StringFilter;
  manifests?: ManifestListRelationFilter;
  registrationNumber?: StringFilter;
};
