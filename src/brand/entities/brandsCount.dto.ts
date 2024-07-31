import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BrandCount {
  @Field()
  brands: number;
}
