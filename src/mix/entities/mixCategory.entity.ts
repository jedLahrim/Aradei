import { Field, ObjectType } from '@nestjs/graphql';
import { Mix } from './mix.entity';

@ObjectType()
export class MixCategory {
  @Field()
  id: number;
  @Field()
  alias: string;
  @Field({ nullable: true })
  color?: string;
  @Field({ nullable: true })
  icon?: string;
  @Field({ nullable: true })
  i18nAlias?: string;
  @Field((type) => [Mix], { nullable: true })
  subMixes?: Mix[];
}
