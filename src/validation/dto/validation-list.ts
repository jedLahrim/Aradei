import { Field, ObjectType } from '@nestjs/graphql';
import { Validation } from '../entities/validation.entity';

@ObjectType()
export class ValidationList {
  @Field((type) => [Validation])
  validations: Validation[];
  @Field()
  total: number;

  constructor(validations: Validation[], total: number) {
    this.validations = validations;
    this.total = total;
  }
}
