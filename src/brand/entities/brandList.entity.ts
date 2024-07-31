import { Field, ObjectType } from '@nestjs/graphql';
import { Brand } from './brand.entity';

@ObjectType()
export class BrandList {
  @Field((type) => [Brand])
  brands: Brand[];
  @Field()
  totalBrands: number;

  constructor(brands: Brand[], totalBrands: number) {
    this.brands = brands;
    this.totalBrands = totalBrands;
  }
}
