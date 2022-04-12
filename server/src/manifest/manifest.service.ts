import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ManifestServiceBase } from "./base/manifest.service.base";

@Injectable()
export class ManifestService extends ManifestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
