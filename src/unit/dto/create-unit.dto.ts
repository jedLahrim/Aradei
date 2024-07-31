import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUnitDto {
  @Field()
  unitId: string;
  @Field()
  floorId: string;
  @Field({ nullable: true })
  categoryId?: number;
  @Field()
  alias: string;
  @Field()
  status: number;
  @Field()
  description: string;
  @Field({ nullable: true })
  specialTerms?: string;
  @Field({ nullable: true })
  videoFormat?: string;
  @Field({ nullable: true })
  videoLength?: string;
  @Field({ nullable: true })
  videoUrl?: string;
  @Field({ nullable: true })
  virtualVisitUrl?: string;
  @Field({ nullable: true })
  bgBanner?: string;
  @Field()
  surface: number;
  @Field({ nullable: true })
  mezzanine?: number;
  @Field({ nullable: true })
  terrasse?: number;
  @Field({ nullable: true })
  storage?: number;
  @Field()
  widthMeters: number;
  @Field()
  depthMeters: number;
  @Field()
  dependency: boolean;
  @Field()
  rentType: number;
  @Field({ nullable: true })
  dayPrice?: number;
  @Field({ nullable: true })
  weekPrice?: number;
  @Field({ nullable: true })
  monthPrice?: number;
  @Field({ nullable: true })
  sqmetersPrice?: number;
  @Field((type) => [Number], { nullable: true })
  specialtyIds?: number[];
  @Field((type) => [Number], { nullable: true })
  features?: number[];
  @Field({ nullable: true })
  mixId?: number;
  @Field({ nullable: true })
  picture?: string;
}
