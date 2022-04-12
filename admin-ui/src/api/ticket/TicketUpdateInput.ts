import { ManifestUpdateManyWithoutTicketsInput } from "./ManifestUpdateManyWithoutTicketsInput";
import { UserUpdateManyWithoutTicketsInput } from "./UserUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  manifestId?: ManifestUpdateManyWithoutTicketsInput;
  userId?: UserUpdateManyWithoutTicketsInput;
};
