import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DriverDetailResolverBase } from "./base/driverDetail.resolver.base";
import { DriverDetail } from "./base/DriverDetail";
import { DriverDetailService } from "./driverDetail.service";

@graphql.Resolver(() => DriverDetail)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DriverDetailResolver extends DriverDetailResolverBase {
  constructor(
    protected readonly service: DriverDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
