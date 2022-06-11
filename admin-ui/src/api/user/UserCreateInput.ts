import { DriverDetailCreateNestedManyWithoutUsersInput } from "./DriverDetailCreateNestedManyWithoutUsersInput";
import { ManifestCreateNestedManyWithoutUsersInput } from "./ManifestCreateNestedManyWithoutUsersInput";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  driverDetails?: DriverDetailCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  manifests?: ManifestCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber: string;
  roles: Array<string>;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
};
