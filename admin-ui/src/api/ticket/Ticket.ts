import { Manifest } from "../manifest/Manifest";
import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  id: string;
  manifest?: Array<Manifest>;
  updatedAt: Date;
  user?: Array<User>;
};
