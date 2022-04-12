import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { RouteTitle } from "../route/RouteTitle";
import { TicketTitle } from "../ticket/TicketTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const ManifestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Driver ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="route.id" reference="Route" label="Route ID">
          <SelectInput optionText={RouteTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ticket"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="vehicle.id"
          reference="Vehicle"
          label="Vehicle ID"
        >
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
