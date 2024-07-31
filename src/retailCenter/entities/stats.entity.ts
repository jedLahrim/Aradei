import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from '../../unit/entities/unit.entity';
import { RetailCenter } from './retailcenter.entity';
import { GraphStats } from './graphStats.entity';
import { Contact } from '../../contact/entities/contact.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { History } from '../../history/entities/history.entity';

@ObjectType()
export class Stats {
  @Field((type) => [Contact])
  contacts: Contact[];
  @Field((type) => [Unit])
  units: Unit[];
  @Field((type) => [RetailCenter])
  ccs: RetailCenter[];
  @Field((type) => [Booking])
  bookings: Booking[];
  @Field((type) => [History])
  histories: History[];
  @Field((type) => GraphStats)
  graphStats: GraphStats;
}
