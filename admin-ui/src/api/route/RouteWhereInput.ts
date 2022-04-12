import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManifestListRelationFilter } from "../manifest/ManifestListRelationFilter";

export type RouteWhereInput = {
  fromLocation?: StringNullableFilter;
  id?: StringFilter;
  manifests?: ManifestListRelationFilter;
  name?: StringNullableFilter;
  toLocation?: StringNullableFilter;
};
