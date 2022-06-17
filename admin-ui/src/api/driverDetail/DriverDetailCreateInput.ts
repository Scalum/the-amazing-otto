import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverDetailCreateInput = {
  driversLicenceId: string;
  driversLicenceIdPhotoFront: string;
  user: UserWhereUniqueInput;
};
