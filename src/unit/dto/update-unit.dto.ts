import { Field, InputType } from '@nestjs/graphql';
import { inputFeature } from './input-feature.dto';
import { inputSpecialty } from './input-specilaty.dto';

@InputType()
export class UpdateUnitDto {
  @Field()
  id: string;
  @Field()
  unitId: string;
  @Field()
  alias: string;
  @Field({ nullable: true })
  surface?: number;
  @Field({ nullable: true })
  width?: number;
  @Field({ nullable: true })
  depth?: number;
  @Field({ nullable: true })
  maxHeight?: number;
  @Field()
  description: string;
  @Field({ nullable: true })
  specialTerms?: string;
  @Field()
  dependency: boolean;
  @Field({ nullable: true })
  mezzanine?: number;
  @Field({ nullable: true })
  terrasse?: number;
  @Field({ nullable: true })
  storage?: number;
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
  rentType: number;
  @Field({ nullable: true })
  dayPrice?: number;
  @Field({ nullable: true })
  monthPrice?: number;
  @Field()
  mainPicture: string;
  @Field((type) => [inputSpecialty], { nullable: true })
  specialties?: inputSpecialty[];
  @Field()
  mixId: number;
  @Field({ nullable: true })
  categoryId?: number;
  @Field({ nullable: true })
  facadeLength?: number;
  @Field((type) => [inputFeature], { nullable: true })
  features?: inputFeature[];
}
