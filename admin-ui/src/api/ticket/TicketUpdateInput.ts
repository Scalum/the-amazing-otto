import { ManifestUpdateManyWithoutTicketsInput } from "./ManifestUpdateManyWithoutTicketsInput";
import { UserUpdateManyWithoutTicketsInput } from "./UserUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  manifest?: ManifestUpdateManyWithoutTicketsInput;
  user?: UserUpdateManyWithoutTicketsInput;
};
