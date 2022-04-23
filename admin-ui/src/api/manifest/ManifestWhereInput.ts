import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type ManifestWhereInput = {
  arrivalTime?: DateTimeNullableFilter;
  departureTime?: DateTimeNullableFilter;
  driver?: UserWhereUniqueInput;
  id?: StringFilter;
  route?: RouteWhereUniqueInput;
  ticket?: TicketListRelationFilter;
  vehicle?: VehicleWhereUniqueInput;
};
