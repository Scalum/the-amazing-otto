import { ManifestUpdateManyWithoutTicketsInput } from "./ManifestUpdateManyWithoutTicketsInput";
import { UserUpdateManyWithoutTicketsInput } from "./UserUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  manifest?: ManifestUpdateManyWithoutTicketsInput;
  seatNumber?: number;
  user?: UserUpdateManyWithoutTicketsInput;
};
