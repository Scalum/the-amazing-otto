import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TicketCreateNestedManyWithoutManifestsInput } from "./TicketCreateNestedManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ManifestCreateInput = {
  driverId: UserWhereUniqueInput;
  routeId: RouteWhereUniqueInput;
  ticket?: TicketCreateNestedManyWithoutManifestsInput;
  vehicleId: VehicleWhereUniqueInput;
};
