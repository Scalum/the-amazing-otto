import { DriverDetail as TDriverDetail } from "../api/driverDetail/DriverDetail";

export const DRIVERDETAIL_TITLE_FIELD = "driversLicenceId";

export const DriverDetailTitle = (record: TDriverDetail): string => {
  return record.driversLicenceId || record.id;
};
