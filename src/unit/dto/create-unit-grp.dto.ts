import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUnitsGrpDto {
  @Field()
  unitId: string;
  @Field()
  floorId: string;
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
  @Field((returns) => Int)
  surface: number;
  @Field((returns) => Int)
  widthMeters: number;
  @Field((returns) => Int)
  depthMeters: number;
  @Field()
  dependency: boolean;
  @Field((returns) => Int)
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
  categoryId?: number;
  @Field({ nullable: true })
  picture?: string;
  @Field((type) => [String])
  unitsIds: string[];
}
