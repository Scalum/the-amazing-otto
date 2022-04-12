import { ManifestCreateNestedManyWithoutUsersInput } from "./ManifestCreateNestedManyWithoutUsersInput";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  manifests?: ManifestCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
};
