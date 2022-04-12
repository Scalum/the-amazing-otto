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
import { ManifestCreateNestedManyWithoutTicketsInput } from "./ManifestCreateNestedManyWithoutTicketsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutTicketsInput } from "./UserCreateNestedManyWithoutTicketsInput";
@InputType()
class TicketCreateInput {
  @ApiProperty({
    required: false,
    type: () => ManifestCreateNestedManyWithoutTicketsInput,
  })
  @ValidateNested()
  @Type(() => ManifestCreateNestedManyWithoutTicketsInput)
  @IsOptional()
  @Field(() => ManifestCreateNestedManyWithoutTicketsInput, {
    nullable: true,
  })
  manifestId?: ManifestCreateNestedManyWithoutTicketsInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutTicketsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutTicketsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutTicketsInput, {
    nullable: true,
  })
  userId?: UserCreateNestedManyWithoutTicketsInput;
}
export { TicketCreateInput };
