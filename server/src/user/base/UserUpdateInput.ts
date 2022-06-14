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
import { DriverDetailUpdateManyWithoutUsersInput } from "./DriverDetailUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ManifestUpdateManyWithoutUsersInput } from "./ManifestUpdateManyWithoutUsersInput";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DriverDetailUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DriverDetailUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DriverDetailUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  driverDetails?: DriverDetailUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => ManifestUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ManifestUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ManifestUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  manifests?: ManifestUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: () => TicketUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TicketUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TicketUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  tickets?: TicketUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
