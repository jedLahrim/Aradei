import {UserProfile} from '../../user/entities/userProfile.entity';
import {Contact} from '../../contact/entities/contact.entity';
import {Document} from '../../document/entities/document.entity';
import {Unit} from '../../unit/entities/unit.entity';
import {Talk} from '../../talk/entities/talk.entity';
import {QuoteEdit} from './quoteEdit.entity';
import {ProposalEdit} from '../entities/proposalEdit.entity';
import {Field, ObjectType} from '@nestjs/graphql';
import {Validation} from 'src/validation/entities/validation.entity';
import {MediaProposal} from './mediaProposal.entity';
import {Company} from 'src/company/entities/company.entity';
import {Brand} from 'src/brand/entities/brand.entity';

import {InvoiceEdit} from "./invoiceEdit.entity";

@ObjectType()
export class Booking {
    @Field()
    id: string;
    @Field()
    contractComplete: boolean;
    @Field({nullable: true})
    contractCompletedAt?: Date;
    @Field()
    createdAt?: Date;
    @Field({nullable: true})
    validatedAt?: Date;
    @Field({nullable: true})
    signedAt?: Date;
    @Field((type) => [Validation], {nullable: true})
    validations?: Validation[];
    @Field()
    type: string;
    @Field((type) => UserProfile)
    creator?: UserProfile;
    @Field((type) => UserProfile, {nullable: true})
    validator?: UserProfile;
    @Field((type) => [Unit], {nullable: true})
    units?: Unit[];
    @Field((type) => Contact)
    prospect?: Contact;
    @Field((type) => [Document], {nullable: true})
    documents?: Document[];
    @Field((type) => [Talk], {nullable: true})
    talks?: Talk[];
    @Field((type) => Document)
    contract?: Document;
    @Field((type) => [QuoteEdit], {nullable: true})
    quoteEdits?: QuoteEdit[];
    @Field((type) => [ProposalEdit], {nullable: true})
    proposalEdits?: ProposalEdit[];
    @Field((type) => [MediaProposal], {nullable: true})
    mediaProposals?: MediaProposal[];
    @Field()
    dateFrom: Date;
    @Field()
    dateTo: Date;
    @Field({nullable: true})
    notes?: string;
    @Field()
    status: number;
    @Field()
    proposalSentAt: Date;
    @Field()
    proposalSent: boolean;
    @Field()
    renewalSent?: boolean;
    @Field()
    renewed?: boolean;
    @Field({nullable: true})
    parentBookingId?: string;
    @Field({nullable: true})
    total?: number;
    @Field(() => Company, {nullable: true})
    company?: Company;
    @Field(() => Brand, {nullable: true})
    brand?: Brand;
    @Field({nullable: true})
    isManual?: boolean;
    @Field((type) => [InvoiceEdit], {nullable: true})
    invoiceEdits?: InvoiceEdit[];
}
