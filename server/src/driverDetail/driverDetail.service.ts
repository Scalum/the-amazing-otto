import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DriverDetailServiceBase } from "./base/driverDetail.service.base";

@Injectable()
export class DriverDetailService extends DriverDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
