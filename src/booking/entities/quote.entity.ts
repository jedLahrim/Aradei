import { Field, ObjectType } from '@nestjs/graphql';
import { Validation } from '../../validation/entities/validation.entity';
import { QuoteEdit } from './quoteEdit.entity';
import { UserProfile } from '../../user/entities/userProfile.entity';

@ObjectType()
export class Quote {
  @Field()
  id: string;
  @Field()
  total: number;
  @Field({ nullable: true })
  notes?: string;
  @Field({ nullable: true })
  creatorId?: string;
  @Field()
  status: number;
  @Field()
  isAccepted: boolean;
  @Field()
  isValidated: boolean;
  @Field()
  createdAt: Date;
  @Field()
  sentAt: Date;
  @Field((returns) => Date, { nullable: true })
  exportedAt?: Date;
  @Field((type) => Validation, { nullable: true })
  validation?: Validation | null;
  @Field((type) => [QuoteEdit], { nullable: true })
  edits?: QuoteEdit[];
  @Field((type) => UserProfile, { nullable: true })
  creator?: UserProfile | null;
}
