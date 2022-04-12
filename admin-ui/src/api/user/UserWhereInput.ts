import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManifestListRelationFilter } from "../manifest/ManifestListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  manifests?: ManifestListRelationFilter;
  tickets?: TicketListRelationFilter;
  username?: StringFilter;
};
