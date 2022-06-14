import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverDetailUpdateInput = {
  driversLicenceId?: string;
  driversLicenceIdPhotoFront?: string;
  user?: UserWhereUniqueInput;
};
