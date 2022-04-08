import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  chasisNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
