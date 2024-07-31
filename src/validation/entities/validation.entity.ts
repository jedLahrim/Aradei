import {Field, ObjectType} from '@nestjs/graphql';
import {Booking} from 'src/booking/entities/booking.entity';
import {Document} from 'src/document/entities/document.entity';
import {UserProfile} from 'src/user/entities/userProfile.entity';
import {ValidationKind} from './validationKind.entity';
import {MediaProposal} from 'src/booking/entities/mediaProposal.entity';
import {Quote} from "../../booking/entities/quote.entity";

@ObjectType()
export class Validation {
    @Field()
    id: string;
    @Field((type) => ValidationKind)
    kind: ValidationKind;
    @Field((type) => UserProfile, {nullable: true})
    creator?: UserProfile | null;
    @Field((type) => Booking, {nullable: true})
    booking?: Booking | null;
    @Field((type) => Document, {nullable: true})
    document?: Document | null;
    @Field((type) => MediaProposal, {nullable: true})
    mediaProposal?: MediaProposal | null;
    @Field()
    isComplete: boolean;
    @Field()
    createdAt: Date;
    @Field({nullable: true})
    updatedAt?: Date | null;
    @Field((type) => Quote, {nullable: true})
    quote?: Quote | null;
}
