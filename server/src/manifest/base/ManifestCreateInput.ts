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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
import { TicketCreateNestedManyWithoutManifestsInput } from "./TicketCreateNestedManyWithoutManifestsInput";
import { VehicleWhereUniqueInput } from "../../vehicle/base/VehicleWhereUniqueInput";
@InputType()
class ManifestCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  arrivalTime?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  departureTime?: string | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  driver!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @Field(() => RouteWhereUniqueInput)
  route!: RouteWhereUniqueInput;

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
  vehicle!: VehicleWhereUniqueInput;
}
export { ManifestCreateInput };
