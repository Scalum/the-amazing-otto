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
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateVehicleArgs } from "./CreateVehicleArgs";
import { UpdateVehicleArgs } from "./UpdateVehicleArgs";
import { DeleteVehicleArgs } from "./DeleteVehicleArgs";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleFindUniqueArgs } from "./VehicleFindUniqueArgs";
import { Vehicle } from "./Vehicle";
import { ManifestFindManyArgs } from "../../manifest/base/ManifestFindManyArgs";
import { Manifest } from "../../manifest/base/Manifest";
import { VehicleService } from "../vehicle.service";

@graphql.Resolver(() => Vehicle)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VehicleResolverBase {
  constructor(
    protected readonly service: VehicleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  async _vehiclesMeta(
    @graphql.Args() args: VehicleFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Vehicle])
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  async vehicles(
    @graphql.Args() args: VehicleFindManyArgs
  ): Promise<Vehicle[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Vehicle, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "own",
  })
  async vehicle(
    @graphql.Args() args: VehicleFindUniqueArgs
  ): Promise<Vehicle | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vehicle)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "create",
    possession: "any",
  })
  async createVehicle(
    @graphql.Args() args: CreateVehicleArgs
  ): Promise<Vehicle> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vehicle)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async updateVehicle(
    @graphql.Args() args: UpdateVehicleArgs
  ): Promise<Vehicle | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Vehicle)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "delete",
    possession: "any",
  })
  async deleteVehicle(
    @graphql.Args() args: DeleteVehicleArgs
  ): Promise<Vehicle | null> {
    try {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Manifest])
  @nestAccessControl.UseRoles({
    resource: "Manifest",
    action: "read",
    possession: "any",
  })
  async manifests(
    @graphql.Parent() parent: Vehicle,
    @graphql.Args() args: ManifestFindManyArgs
  ): Promise<Manifest[]> {
    const results = await this.service.findManifests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
