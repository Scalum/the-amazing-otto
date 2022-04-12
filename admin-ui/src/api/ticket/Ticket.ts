import { Manifest } from "../manifest/Manifest";
import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  id: string;
  manifestId?: Array<Manifest>;
  updatedAt: Date;
  userId?: Array<User>;
};
