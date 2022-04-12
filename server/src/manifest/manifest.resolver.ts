import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ManifestResolverBase } from "./base/manifest.resolver.base";
import { Manifest } from "./base/Manifest";
import { ManifestService } from "./manifest.service";

@graphql.Resolver(() => Manifest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ManifestResolver extends ManifestResolverBase {
  constructor(
    protected readonly service: ManifestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
