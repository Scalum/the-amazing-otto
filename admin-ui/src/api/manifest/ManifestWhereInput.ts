import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ManifestWhereInput = {
  driverId?: UserWhereUniqueInput;
  id?: StringFilter;
  routeId?: RouteWhereUniqueInput;
  ticket?: TicketListRelationFilter;
  vehicleId?: VehicleWhereUniqueInput;
};
