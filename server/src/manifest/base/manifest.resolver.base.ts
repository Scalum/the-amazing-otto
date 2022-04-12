/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateManifestArgs } from "./CreateManifestArgs";
import { UpdateManifestArgs } from "./UpdateManifestArgs";
import { DeleteManifestArgs } from "./DeleteManifestArgs";
import { ManifestFindManyArgs } from "./ManifestFindManyArgs";
import { ManifestFindUniqueArgs } from "./ManifestFindUniqueArgs";
import { Manifest } from "./Manifest";
import { TicketFindManyArgs } from "../../ticket/base/TicketFindManyArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { User } from "../../user/base/User";
import { Route } from "../../route/base/Route";
import { Vehicle } from "../../vehicle/base/Vehicle";
import { ManifestService } from "../manifest.service";

@graphql.Resolver(() => Manifest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ManifestResolverBase {
  constructor(
    protected readonly service: ManifestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async _manifestsMeta(
    @graphql.Args() args: ManifestFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Manifest])
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async manifests(
    @graphql.Args() args: ManifestFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Manifest[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Manifest",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Manifest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "own",
  })
  async manifest(
    @graphql.Args() args: ManifestFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Manifest | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Manifest",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Manifest)
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "create",
    possession: "any",
  })
  async createManifest(
    @graphql.Args() args: CreateManifestArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Manifest> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Manifest",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Manifest"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        driverId: {
          connect: args.data.driverId,
        },

        routeId: {
          connect: args.data.routeId,
        },

        vehicleId: {
          connect: args.data.vehicleId,
        },
      },
    });
  }

  @graphql.Mutation(() => Manifest)
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "update",
    possession: "any",
  })
  async updateManifest(
    @graphql.Args() args: UpdateManifestArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Manifest | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Manifest",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Manifest"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          driverId: {
            connect: args.data.driverId,
          },

          routeId: {
            connect: args.data.routeId,
          },

          vehicleId: {
            connect: args.data.vehicleId,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Manifest)
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "delete",
    possession: "any",
  })
  async deleteManifest(
    @graphql.Args() args: DeleteManifestArgs
  ): Promise<Manifest | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Ticket])
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async ticket(
    @graphql.Parent() parent: Manifest,
    @graphql.Args() args: TicketFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ticket[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Ticket",
    });
    const results = await this.service.findTicket(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async driverId(
    @graphql.Parent() parent: Manifest,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getDriverId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Route, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async routeId(
    @graphql.Parent() parent: Manifest,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Route | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Route",
    });
    const result = await this.service.getRouteId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Vehicle, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async vehicleId(
    @graphql.Parent() parent: Manifest,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Vehicle | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Vehicle",
    });
    const result = await this.service.getVehicleId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
