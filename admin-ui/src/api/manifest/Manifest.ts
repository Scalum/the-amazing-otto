import { User } from "../user/User";
import { Route } from "../route/Route";
import { Ticket } from "../ticket/Ticket";
import { Vehicle } from "../vehicle/Vehicle";

export type Manifest = {
  arrivalTime: string | null;
  createdAt: Date;
  departureTime: string | null;
  driver?: User;
  id: string;
  route?: Route;
  ticket?: Array<Ticket>;
  updatedAt: Date;
  vehicle?: Vehicle;
};
