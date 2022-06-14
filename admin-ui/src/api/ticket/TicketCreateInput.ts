import { ManifestCreateNestedManyWithoutTicketsInput } from "./ManifestCreateNestedManyWithoutTicketsInput";
import { UserCreateNestedManyWithoutTicketsInput } from "./UserCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  manifest?: ManifestCreateNestedManyWithoutTicketsInput;
  seatNumber: number;
  user?: UserCreateNestedManyWithoutTicketsInput;
};
