/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Ticket, Manifest, User } from "@prisma/client";

export class TicketServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TicketFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketFindManyArgs>
  ): Promise<number> {
    return this.prisma.ticket.count(args);
  }

  async findMany<T extends Prisma.TicketFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketFindManyArgs>
  ): Promise<Ticket[]> {
    return this.prisma.ticket.findMany(args);
  }
  async findOne<T extends Prisma.TicketFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketFindUniqueArgs>
  ): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique(args);
  }
  async create<T extends Prisma.TicketCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketCreateArgs>
  ): Promise<Ticket> {
    return this.prisma.ticket.create<T>(args);
  }
  async update<T extends Prisma.TicketUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketUpdateArgs>
  ): Promise<Ticket> {
    return this.prisma.ticket.update<T>(args);
  }
  async delete<T extends Prisma.TicketDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TicketDeleteArgs>
  ): Promise<Ticket> {
    return this.prisma.ticket.delete(args);
  }

  async findManifestId(
    parentId: string,
    args: Prisma.ManifestFindManyArgs
  ): Promise<Manifest[]> {
    return this.prisma.ticket
      .findUnique({
        where: { id: parentId },
      })
      .manifestId(args);
  }

  async findUserId(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.ticket
      .findUnique({
        where: { id: parentId },
      })
      .userId(args);
  }
}
