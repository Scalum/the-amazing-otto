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
import { DriverDetailListRelationFilter } from "../../driverDetail/base/DriverDetailListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ManifestListRelationFilter } from "../../manifest/base/ManifestListRelationFilter";
import { TicketListRelationFilter } from "../../ticket/base/TicketListRelationFilter";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => DriverDetailListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DriverDetailListRelationFilter)
  @IsOptional()
  @Field(() => DriverDetailListRelationFilter, {
    nullable: true,
  })
  driverDetails?: DriverDetailListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ManifestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ManifestListRelationFilter)
  @IsOptional()
  @Field(() => ManifestListRelationFilter, {
    nullable: true,
  })
  manifests?: ManifestListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  phoneNumber?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => TicketListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TicketListRelationFilter)
  @IsOptional()
  @Field(() => TicketListRelationFilter, {
    nullable: true,
  })
  tickets?: TicketListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}
export { UserWhereInput };
