import { Field, InputType } from '@nestjs/graphql';
import { ClientLegal } from '../entities/client.entity';

@InputType()
export class UpdateClientInput {
  @Field((type) => ClientLegal, { nullable: true })
  legal?: ClientLegal;
}
