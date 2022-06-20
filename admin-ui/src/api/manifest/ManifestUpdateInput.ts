import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TicketUpdateManyWithoutManifestsInput } from "./TicketUpdateManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ManifestUpdateInput = {
  arrivalTime?: string | null;
  departureTime?: string | null;
  driver?: UserWhereUniqueInput;
  route?: RouteWhereUniqueInput;
  ticket?: TicketUpdateManyWithoutManifestsInput;
  vehicle?: VehicleWhereUniqueInput;
};
