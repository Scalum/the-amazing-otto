import { ManifestUpdateManyWithoutUsersInput } from "./ManifestUpdateManyWithoutUsersInput";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  manifests?: ManifestUpdateManyWithoutUsersInput;
  password?: string;
  phoneNumber?: string;
  roles?: Array<string>;
  tickets?: TicketUpdateManyWithoutUsersInput;
  username?: string;
};
