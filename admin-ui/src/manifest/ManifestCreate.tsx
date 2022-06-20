import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
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
        <TextInput label="Arrival Time" source="arrivalTime" />
        <TextInput label="Departure Time" source="departureTime" />
        <ReferenceInput source="user.id" reference="User" label="Driver">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="route.id" reference="Route" label="Route">
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
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
