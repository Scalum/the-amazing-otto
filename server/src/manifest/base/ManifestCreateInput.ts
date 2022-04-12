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
import { TicketCreateNestedManyWithoutManifestsInput } from "./TicketCreateNestedManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
@InputType()
class ManifestCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  driverId!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @Field(() => RouteWhereUniqueInput)
  routeId!: RouteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TicketCreateNestedManyWithoutManifestsInput,
  })
  @ValidateNested()
  @Type(() => TicketCreateNestedManyWithoutManifestsInput)
  @IsOptional()
  @Field(() => TicketCreateNestedManyWithoutManifestsInput, {
    nullable: true,
  })
  ticket?: TicketCreateNestedManyWithoutManifestsInput;

  @ApiProperty({
    required: true,
    type: () => VehicleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VehicleWhereUniqueInput)
  @Field(() => VehicleWhereUniqueInput)
  vehicleId!: VehicleWhereUniqueInput;
}
export { ManifestCreateInput };
