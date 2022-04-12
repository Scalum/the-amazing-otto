import { ManifestCreateNestedManyWithoutVehiclesInput } from "./ManifestCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  chasisNumber: string;
  manifests?: ManifestCreateNestedManyWithoutVehiclesInput;
  registrationNumber: string;
};
