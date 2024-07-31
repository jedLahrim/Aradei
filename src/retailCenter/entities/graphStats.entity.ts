import { Field, ObjectType } from '@nestjs/graphql';
import { graphStat } from './graphStat.entity';

@ObjectType()
export class GraphStats {
  @Field()
  leads: graphStat;
  @Field()
  sentProposals: graphStat;
  @Field()
  signedProposals: graphStat;
}
