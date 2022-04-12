import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  chasisNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  registrationNumber?: SortOrder;
  updatedAt?: SortOrder;
};
