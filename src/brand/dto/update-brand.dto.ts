import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBrandDto {
  @Field()
  name: string;
  @Field()
  logo: string;
  @Field()
  description: string;
  @Field()
  products: string;
  @Field()
  brandId: string;
  @Field()
  status: string;
}
