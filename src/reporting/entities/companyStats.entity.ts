import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CompanyStats {
  @Field()
  revenue: number;
  @Field()
  pipe: number;
  @Field()
  deals: number;
  @Field()
  booked: number;
}
