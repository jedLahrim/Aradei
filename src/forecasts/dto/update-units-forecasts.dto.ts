import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UnitsForecastsDto {
  @Field()
  id?: string;
  @Field()
  unitId?: string;
  @Field({ nullable: true })
  glaForecast?: string;
  @Field({ nullable: true })
  terrasseForecast?: string;
  @Field({ nullable: true })
  mezzanineForecast?: string;
  @Field({ nullable: true })
  monthlyRentFirstYear?: string;
  @Field({ nullable: true })
  monthlyRentSecondYear?: string;
  @Field({ nullable: true })
  monthlyRentThirdYear?: string;
  @Field({ nullable: true })
  yearlyRentFirstYear?: string;
  @Field({ nullable: true })
  yearlyRentSecondYear?: string;
  @Field({ nullable: true })
  yearlyRentThirdYear?: string;
  @Field({ nullable: true })
  chargesM2Fonctionnement?: string;
  @Field({ nullable: true })
  chargesM2Marketing?: string;
  @Field({ nullable: true })
  chargesM2ChargesCommunes?: string;
  @Field({ nullable: true })
  chargesFonctionnement?: string;
  @Field({ nullable: true })
  chargesMarketing?: string;
  @Field({ nullable: true })
  chargesChargesCommunes?: string;
  @Field({ nullable: true })
  franchiseFirstYear?: string;
  @Field({ nullable: true })
  franchiseSecondYear?: string;
  @Field({ nullable: true })
  franchiseThirdYear?: string;
  @Field({ nullable: true })
  legalisation?: string;
  @Field({ nullable: true })
  signature?: string;
  @Field({ nullable: true })
  livraison?: string;
  @Field({ nullable: true })
  travaux?: string;
  @Field({ nullable: true })
  loyer?: string;
  @Field({ nullable: true })
  fraisRTM?: string;
  @Field({ nullable: true })
  marketingOuverture?: string;
  @Field({ nullable: true })
  slMedia?: string;
}
