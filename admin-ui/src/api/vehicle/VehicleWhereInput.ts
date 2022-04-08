import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type VehicleWhereInput = {
  chasisNumber?: StringNullableFilter;
  id?: StringFilter;
};
