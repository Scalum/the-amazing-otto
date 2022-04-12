import { Manifest } from "../manifest/Manifest";
import { Ticket } from "../ticket/Ticket";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  manifests?: Array<Manifest>;
  roles: Array<string>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
};
