import { DriverDetailWhereInput } from "./DriverDetailWhereInput";
import { DriverDetailOrderByInput } from "./DriverDetailOrderByInput";

export type DriverDetailFindManyArgs = {
  where?: DriverDetailWhereInput;
  orderBy?: Array<DriverDetailOrderByInput>;
  skip?: number;
  take?: number;
};
