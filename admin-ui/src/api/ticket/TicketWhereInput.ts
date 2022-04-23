import { StringFilter } from "../../util/StringFilter";
import { ManifestListRelationFilter } from "../manifest/ManifestListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  manifest?: ManifestListRelationFilter;
  user?: UserListRelationFilter;
};
