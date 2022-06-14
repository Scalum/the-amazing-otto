import { SortOrder } from "../../util/SortOrder";

export type ManifestOrderByInput = {
  arrivalTime?: SortOrder;
  createdAt?: SortOrder;
  departureTime?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
