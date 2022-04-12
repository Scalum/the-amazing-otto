import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ManifestTitle } from "../manifest/ManifestTitle";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Chasis Number" source="chasisNumber" />
        <ReferenceArrayInput
          source="manifests"
          reference="Manifest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ManifestTitle} />
        </ReferenceArrayInput>
        <TextInput label="Registration Number" source="registrationNumber" />
      </SimpleForm>
    </Edit>
  );
};
