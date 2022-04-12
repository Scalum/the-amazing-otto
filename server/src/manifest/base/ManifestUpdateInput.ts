/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
import { TicketUpdateManyWithoutManifestsInput } from "./TicketUpdateManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
@InputType()
class ManifestUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  driverId?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @IsOptional()
  @Field(() => RouteWhereUniqueInput, {
    nullable: true,
  })
  routeId?: RouteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutManifestsInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutManifestsInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutManifestsInput, {
    nullable: true,
  })
  ticket?: TicketUpdateManyWithoutManifestsInput;

  @ApiProperty({
    required: false,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @IsOptional()
  @Field(() => VehicleWhereUniqueInput, {
    nullable: true,
  })
  vehicleId?: VehicleWhereUniqueInput;
}
export { ManifestUpdateInput };