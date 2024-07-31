import { UserProfile } from '../../user/entities/userProfile.entity';
import { Document } from '../../document/entities/document.entity';
import { Brand } from '../../brand/entities/brand.entity';
import { Unit } from '../../unit/entities/unit.entity';
import { Request } from '../../company/entities/request.entity';
import { Booking } from '../../booking/entities/booking.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { CompanyType } from 'src/utils/enums/lead.enum';
import { BrandCount } from 'src/brand/entities/brandsCount.dto';
import { CompanyGroup } from 'src/companyGroup/entities/company-group.entity';

@ObjectType()
export class Company {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  logo?: string;
  @Field({ nullable: true })
  address?: string;
  @Field({ nullable: true })
  city?: string;
  @Field({ nullable: true })
  country?: string;
  @Field()
  phone: string;
  @Field()
  email: string;
  @Field({ nullable: true })
  web?: string;
  @Field({ nullable: true })
  tva?: string;
  @Field({ nullable: true })
  rc?: string;
  @Field({ nullable: true })
  capital?: string;
  @Field({ nullable: true })
  cityRC?: string;
  @Field()
  type: CompanyType;
  @Field({ nullable: true })
  mainColor?: string;
  @Field({ nullable: true })
  dateFormat?: string;
  @Field({ nullable: true })
  currency?: string;
  @Field((type) => UserProfile)
  creator?: UserProfile;
  @Field()
  creatorId: string;
  @Field((type) => [Document], { nullable: true })
  documents?: Document[];
  @Field((type) => Unit)
  units?: Unit[];
  @Field((type) => [Booking], { nullable: true })
  bookings?: Booking[];
  @Field(() => BrandCount, { nullable: true })
  _count?: BrandCount;
  @Field()
  createdAt: Date;
  @Field({ nullable: true })
  zip?: string;
  @Field({ nullable: true })
  region?: string;
  @Field({ nullable: true })
  instragram?: string;
  @Field({ nullable: true })
  ice?: string;
  @Field({ nullable: true })
  patente?: string;
  @Field({ nullable: true })
  taxIF?: string;
  @Field({ nullable: true })
  managerName: string;
  @Field({ nullable: true })
  managerID?: string;
  @Field({ nullable: true })
  managerPosition?: string;
  @Field({ nullable: true })
  managerTitle?: string;
  @Field()
  isValidated: boolean;
  @Field((type) => [Brand], { nullable: true })
  brands?: Brand[];
  @Field((type) => [Request], { nullable: true })
  requests?: Request[];
  @Field((type) => CompanyGroup, { nullable: true })
  companyGroup?: CompanyGroup;
  @Field({ nullable: true })
  status?: string;
  @Field({ nullable: true })
  source?: string;
  @Field({ nullable: true })
  bgBanner?: string;
  @Field({ nullable: true })
  linkedIn?: string;
  @Field({ nullable: true })
  customerCode?: string;
}
