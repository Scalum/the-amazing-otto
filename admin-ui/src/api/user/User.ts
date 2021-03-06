import { DriverDetail } from "../driverDetail/DriverDetail";
import { Manifest } from "../manifest/Manifest";
import { Ticket } from "../ticket/Ticket";

export type User = {
  createdAt: Date;
  driverDetails?: Array<DriverDetail>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  manifests?: Array<Manifest>;
  phoneNumber: string;
  roles: Array<string>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
};
