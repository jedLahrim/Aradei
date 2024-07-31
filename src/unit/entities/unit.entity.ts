import { Document } from '../../document/entities/document.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { History } from '../../history/entities/history.entity';
import { Floor } from '../../floor/entities/floor.entity';
import { Feature } from './feature.entity';

import { Specialty } from './specialty.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { UnitAttachedCount } from './UnitCount.entity';
import { Picture } from './picture.entity';
import { Category } from './category.entity';
import { Mix } from 'src/mix/entities/mix.entity';
import { UnitsForecasts } from '../../forecasts/entities/units.forecasts';
import { UnitLogoMetadata } from './unitLogoMetadata.entity';

@ObjectType()
export class Unit {
  @Field()
  id: string;
  @Field((type) => [Picture], { nullable: true })
  pictures?: Picture[];
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
  unitId: string;
  @Field((type) => Floor)
  floor?: Floor;
  @Field()
  alias: string;
  @Field()
  isGroup: boolean;
  @Field()
  rentType: number;
  @Field((type) => Mix, { nullable: true })
  mix?: Mix;
  @Field((type) => Category, { nullable: true })
  category?: Category;
  @Field({ nullable: true })
  surface?: number;
  @Field({ nullable: true })
  mezzanine?: number;
  @Field({ nullable: true })
  terrasse?: number;
  @Field({ nullable: true })
  storage?: number;
  @Field()
  width: number;
  @Field()
  depth: number;
  @Field({ nullable: true })
  maxHeight?: number;
  @Field({ nullable: true })
  qty?: number;
  @Field()
  measurementUnit: string;
  @Field({ nullable: true })
  facadeLength?: number;
  @Field()
  dependency: boolean;
  @Field()
  dayPrice: number;
  @Field({ nullable: true })
  monthPrice?: number;
  @Field({ nullable: true })
  weekPrice?: number;
  @Field({ nullable: true })
  sqMeterPrice?: number;
  @Field()
  description: string;
  @Field()
  specialTerms: string;
  @Field()
  mainPicture: string;
  @Field((type) => [History], { nullable: true })
  histories?: History[];
  @Field((type) => [Document])
  documents?: Document[];
  @Field((type) => [Booking])
  bookings?: Booking[];
  @Field((type) => [Specialty], { nullable: true })
  specialities?: Specialty[];
  @Field((type) => [Feature], { nullable: true })
  features?: Feature[];
  @Field((type) => [UnitsForecasts], { nullable: true })
  UnitsForecasts?: UnitsForecasts[];
  @Field()
  floorId: string;
  @Field({ nullable: true })
  _count?: UnitAttachedCount;
  @Field({ nullable: true })
  unitLogoMetadata?: UnitLogoMetadata;
}
