import { ManifestCreateNestedManyWithoutUsersInput } from "./ManifestCreateNestedManyWithoutUsersInput";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  manifests?: ManifestCreateNestedManyWithoutUsersInput;
  password: string;
  phoneNumber: string;
  roles: Array<string>;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
};
