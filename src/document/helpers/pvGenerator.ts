import { Booking } from 'src/booking/entities/booking.entity';
import { DocManager } from '../../utils/DocManager';
import { formatLocalNumber } from '../../utils/money';
import { TemplateType } from 'src/utils/DocManager/TemplateManager';
import { RetailCenter } from 'src/retailCenter/entities/retailcenter.entity';

export class PVGenerator {
  static async pvLivraison(booking: Booking, outputPath: string) {
    const retailCenterInfos: RetailCenter = booking.units[0].floor.retailCenter;
    const prospectInfos = booking.prospect;
    const company = booking.company;

    const data = {
      retailCenterInfos: {
        ...retailCenterInfos,
        legalStatus: 'Société à responsabilité limité',
        currency: 'dirhams',
        capital: formatLocalNumber(
          parseInt(retailCenterInfos.capital ?? '0') ?? 0,
        ),
      },
      prospectInfos,
      company: {
        ...company,
        legalStatus: 'Société à responsabilité limité',
        currency: 'dirhams',
        capital: formatLocalNumber(parseInt(company.capital ?? '0') ?? 0),
      },
      singleUnit: booking.units.length === 1,
      unitsIdsString: booking.units.map((u) => u.unitId).join(', '),
    };

    const docMan = new DocManager(TemplateType.PV_LIVRAISON);
    await docMan.compile(data, true);
    await docMan.print(outputPath);
    return true;
  }
}
