import { ManifestUpdateManyWithoutVehiclesInput } from "./ManifestUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  chasisNumber?: string;
  manifests?: ManifestUpdateManyWithoutVehiclesInput;
  registrationNumber?: string;
};
