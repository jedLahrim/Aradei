import { Field, ObjectType } from '@nestjs/graphql';
import { UserRole } from 'src/user/entities/userRole.entity';
import {Validation} from "./validation.entity";

@ObjectType()
export class ValidationKind {
  @Field()
  id: number;
  @Field()
  alias: string;
  @Field((type) => [UserRole])
  rolesNeeded?: UserRole[];
  @Field((type) => [Validation])
  validations?: Validation[];
  @Field()
  isAutomated: boolean;
  @Field()
  isOverride: boolean;
  @Field()
  isFinal: boolean;
  @Field()
  isSpecialty: boolean;
}
