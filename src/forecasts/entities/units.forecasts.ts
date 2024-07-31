import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from '../../unit/entities/unit.entity';

@ObjectType()
export class UnitsForecasts {
  @Field()
  id?: string;
  @Field((type) => Unit, { nullable: true })
  unit?: Unit;
  @Field((type) => String, { nullable: true })
  glaForecast?: String;
  @Field((type) => String, { nullable: true })
  terrasseForecast?: String;
  @Field((type) => String, { nullable: true })
  mezzanineForecast?: String;
  @Field((type) => String, { nullable: true })
  monthlyRentFirstYear?: String;
  @Field((type) => String, { nullable: true })
  monthlyRentSecondYear?: String;
  @Field((type) => String, { nullable: true })
  monthlyRentThirdYear?: String;
  @Field((type) => String, { nullable: true })
  yearlyRentFirstYear?: String;
  @Field((type) => String, { nullable: true })
  yearlyRentSecondYear?: String;
  @Field((type) => String, { nullable: true })
  yearlyRentThirdYear?: String;
  @Field((type) => String, { nullable: true })
  chargesM2Fonctionnement?: String;
  @Field((type) => String, { nullable: true })
  chargesM2Marketing?: String;
  @Field((type) => String, { nullable: true })
  chargesM2ChargesCommunes?: String;
  @Field((type) => String, { nullable: true })
  chargesFonctionnement?: String;
  @Field((type) => String, { nullable: true })
  chargesMarketing?: String;
  @Field((type) => String, { nullable: true })
  chargesChargesCommunes?: String;
  @Field((type) => String, { nullable: true })
  franchiseFirstYear?: String;
  @Field((type) => String, { nullable: true })
  franchiseSecondYear?: String;
  @Field((type) => String, { nullable: true })
  franchiseThirdYear?: String;
  @Field((type) => String, { nullable: true })
  legalisation?: String;
  @Field((type) => String, { nullable: true })
  signature?: String;
  @Field((type) => String, { nullable: true })
  livraison?: String;
  @Field((type) => String, { nullable: true })
  travaux?: String;
  @Field((type) => String, { nullable: true })
  loyer?: String;
  @Field((type) => String, { nullable: true })
  fraisRTM?: String;
  @Field((type) => String, { nullable: true })
  marketingOuverture?: String;
  @Field((type) => String, { nullable: true })
  slMedia?: String;
}
