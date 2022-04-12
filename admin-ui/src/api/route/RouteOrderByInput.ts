import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  fromLocation?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  toLocation?: SortOrder;
  updatedAt?: SortOrder;
};
