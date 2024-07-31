import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from 'src/unit/entities/unit.entity';
import { UserProfile } from 'src/user/entities/userProfile.entity';
import { Validation } from 'src/validation/entities/validation.entity';
@ObjectType()
export class Invoice {
  @Field()
  id: string;
  @Field()
  total: number;
  @Field({ nullable: true })
  notes?: string;
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
}
