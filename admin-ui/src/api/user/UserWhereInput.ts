import { DriverDetailListRelationFilter } from "../driverDetail/DriverDetailListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManifestListRelationFilter } from "../manifest/ManifestListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type UserWhereInput = {
  driverDetails?: DriverDetailListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  manifests?: ManifestListRelationFilter;
  phoneNumber?: StringFilter;
  tickets?: TicketListRelationFilter;
  username?: StringFilter;
};
