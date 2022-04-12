import { User } from "../user/User";
import { Route } from "../route/Route";
import { Ticket } from "../ticket/Ticket";
import { Vehicle } from "../vehicle/Vehicle";

export type Manifest = {
  createdAt: Date;
  driverId?: User;
  id: string;
  routeId?: Route;
  ticket?: Array<Ticket>;
  updatedAt: Date;
  vehicleId?: Vehicle;
};
