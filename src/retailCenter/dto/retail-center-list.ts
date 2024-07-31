import { Field, ObjectType } from '@nestjs/graphql';
import { RetailCenter } from '../entities/retailcenter.entity';

@ObjectType()
export class RetailCenterList {
  @Field((type) => [RetailCenter])
  retailCenters: RetailCenter[];
  @Field()
  total: number;

  constructor(retailCenters: RetailCenter[], total: number) {
    this.retailCenters = retailCenters;
    this.total = total;
  }
}
