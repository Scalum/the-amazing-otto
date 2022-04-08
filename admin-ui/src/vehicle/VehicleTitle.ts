import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "chasisNumber";

export const VehicleTitle = (record: TVehicle): string => {
  return record.chasisNumber || record.id;
};
