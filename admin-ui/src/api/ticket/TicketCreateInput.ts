import { ManifestCreateNestedManyWithoutTicketsInput } from "./ManifestCreateNestedManyWithoutTicketsInput";
import { UserCreateNestedManyWithoutTicketsInput } from "./UserCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  manifestId?: ManifestCreateNestedManyWithoutTicketsInput;
  userId?: UserCreateNestedManyWithoutTicketsInput;
};
