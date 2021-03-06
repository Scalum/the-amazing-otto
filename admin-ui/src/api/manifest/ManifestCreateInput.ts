import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TicketCreateNestedManyWithoutManifestsInput } from "./TicketCreateNestedManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ManifestCreateInput = {
  arrivalTime?: string | null;
  departureTime?: string | null;
  driver: UserWhereUniqueInput;
  route: RouteWhereUniqueInput;
  ticket?: TicketCreateNestedManyWithoutManifestsInput;
  vehicle: VehicleWhereUniqueInput;
};
