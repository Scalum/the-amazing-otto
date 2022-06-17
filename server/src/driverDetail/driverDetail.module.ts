import { Module } from "@nestjs/common";
import { DriverDetailModuleBase } from "./base/driverDetail.module.base";
import { DriverDetailService } from "./driverDetail.service";
import { DriverDetailController } from "./driverDetail.controller";
import { DriverDetailResolver } from "./driverDetail.resolver";

@Module({
  imports: [DriverDetailModuleBase],
  controllers: [DriverDetailController],
  providers: [DriverDetailService, DriverDetailResolver],
  exports: [DriverDetailService],
})
export class DriverDetailModule {}
