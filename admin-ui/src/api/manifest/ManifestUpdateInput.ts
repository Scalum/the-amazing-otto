import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TicketUpdateManyWithoutManifestsInput } from "./TicketUpdateManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ManifestUpdateInput = {
  driverId?: UserWhereUniqueInput;
  routeId?: RouteWhereUniqueInput;
  ticket?: TicketUpdateManyWithoutManifestsInput;
  vehicleId?: VehicleWhereUniqueInput;
};
