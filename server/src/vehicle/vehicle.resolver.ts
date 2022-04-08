import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { VehicleResolverBase } from "./base/vehicle.resolver.base";
import { Vehicle } from "./base/Vehicle";
import { VehicleService } from "./vehicle.service";

@graphql.Resolver(() => Vehicle)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VehicleResolver extends VehicleResolverBase {
  constructor(
    protected readonly service: VehicleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
