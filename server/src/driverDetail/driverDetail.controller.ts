import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DriverDetailService } from "./driverDetail.service";
import { DriverDetailControllerBase } from "./base/driverDetail.controller.base";

@swagger.ApiTags("driverDetails")
@common.Controller("driverDetails")
export class DriverDetailController extends DriverDetailControllerBase {
  constructor(
    protected readonly service: DriverDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
