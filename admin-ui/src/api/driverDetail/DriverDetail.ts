import { User } from "../user/User";

export type DriverDetail = {
  createdAt: Date;
  driversLicenceId: string;
  driversLicenceIdPhotoFront: string;
  id: string;
  updatedAt: Date;
  user?: User;
};
