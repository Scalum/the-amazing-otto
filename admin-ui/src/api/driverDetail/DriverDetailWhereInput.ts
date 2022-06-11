import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DriverDetailWhereInput = {
  driversLicenceId?: StringFilter;
  driversLicenceIdPhotoFront?: StringFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
