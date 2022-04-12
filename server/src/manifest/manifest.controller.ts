import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ManifestService } from "./manifest.service";
import { ManifestControllerBase } from "./base/manifest.controller.base";

@swagger.ApiTags("manifests")
@common.Controller("manifests")
export class ManifestController extends ManifestControllerBase {
  constructor(
    protected readonly service: ManifestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
