import { Module } from "@nestjs/common";
import { ManifestModuleBase } from "./base/manifest.module.base";
import { ManifestService } from "./manifest.service";
import { ManifestController } from "./manifest.controller";
import { ManifestResolver } from "./manifest.resolver";

@Module({
  imports: [ManifestModuleBase],
  controllers: [ManifestController],
  providers: [ManifestService, ManifestResolver],
  exports: [ManifestService],
})
export class ManifestModule {}
