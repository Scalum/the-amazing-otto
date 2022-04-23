import { ManifestCreateNestedManyWithoutTicketsInput } from "./ManifestCreateNestedManyWithoutTicketsInput";
import { UserCreateNestedManyWithoutTicketsInput } from "./UserCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  manifest?: ManifestCreateNestedManyWithoutTicketsInput;
  user?: UserCreateNestedManyWithoutTicketsInput;
};
