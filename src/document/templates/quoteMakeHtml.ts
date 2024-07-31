import { DevisCss } from './devisCss';
import { formatDateShort } from '../../utils/date';
import { Booking } from 'src/booking/entities/booking.entity';
import { ClientManager } from 'src/prisma/ClientManager';
import { formatLocalNumber, moneyAmountInWords } from 'src/utils/money';

export const quoteMakeHtml = (edits, booking: Booking) => {
  const today = new Date();
  const retailCenter = booking.units[0].floor.retailCenter;
  const logoImgUrl = retailCenter.logo;

  const client = ClientManager.getClient();

  const isMultipleAssets = function () {
    const units = booking?.units;

    if (!units || units.length === 0) {
      return false;
    }
    const firstRetailCenterId = units[0].floor.retailCenter.id;
    for (const unit of units) {
      if (unit.floor.retailCenter.id !== firstRetailCenterId) {
        return true;
      }
    }
    return false;
  };

  function totalAmountInNumbers() {
    return Math.round(
      edits?.reduce((totalTTC, edit) => {
        return totalTTC + edit.unitPrice + (edit.unitPrice / 100) * 20;
      }, 0),
    );
  }

  const deviRows = edits.map((edit, index) => {
    return `
      <tr>
      <td style="font-size:18px !important;border-right: solid;border-right: solid; border-bottom:solid;padding-top: 20px; padding-bottom:20px" class="text-no-wrap"> ${
        isMultipleAssets()
          ? edit.booking.units[index].floor.retailCenter.name +
            ' - ' +
            edit.unitId
          : edit.unitId
      } - ${edit.unitSurface} ${
      booking.units[index].measurementUnit === 'centimeters' ? 'cm²' : 'm²'
    }
      <br><strong> du ${formatDateShort(booking.dateFrom)} au ${formatDateShort(
      booking.dateTo,
    )}</strong></td>
      <td style="font-size:18px !important;border-right: solid; border-bottom:solid" class="text-no-wrap">${
        edit.unitPrice
      }</td>
      <td style="font-size:18px !important;border-right: solid; border-bottom:solid" class="text-left"> 20% </td>
      <td style="font-size:18px !important;border-right: solid; border-bottom:solid" class="text-left">${
        (edit.unitPrice / 100) * 20
      }</td>
      <td style="font-size:18px !important;border-bottom:solid" class="text-left">${
        edit.unitPrice + (edit.unitPrice / 100) * 20
      }</td>
  </tr>
      `;
  });

  const html = `
    <!DOCTYPE html>
    <html  lang="en">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <script type="module" src="Aradei%20Capital_fichiers/client.js"></script>
      <meta charset="UTF-8">
      <link rel="icon" href="http://localhost:5173/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aradei Capital</title>
     
    </head>
    <body>
    ${DevisCss}
    <div class="content">
    <div class="v-card-text d-flex flex-wrap justify-space-between  ">
    <div class="ma-sm-4">
    <div class="d-flex align-center mb-6"></div>
    <p style="font-size:18px !important" class="mb-1">
    ${booking.company.name}
    </p>
    <p style="font-size:18px !important" class="mb-1">
    ${booking.company.address}
    </p>
    <p style="font-size:18px !important" class="mb-1">
    ICE : ${booking.company.ice}
    </p>
    <!-- 👉 Invoice ID -->
    <h6 style="font-size:18px !important" class="font-weight-strong text-xl my-6">
    Devis ${edits[0].quoteId}
    </h6>
    <!-- 👉 Issue Date -->
    <p style="font-size:18px !important" class="mb-2">
    <span>Date: </span>
    <span class="font-weight-semibold">
    ${formatDateShort(today)}
    </span>
    </p>
    </div>
    
    <div style="margin-right: ${
      isMultipleAssets() ? '-30px' : '-80px'
    } !important" class="mt-4 ma-sm-4">
    <div class="v-responsive v-img logo mb-4 mr-4 d-flex"
    style="width: ${
      isMultipleAssets() ? '150px' : '436px'
    }; justify-items: end; text-align: right;">
    <div class="v-responsive__sizer" style="padding-bottom: 48.1013%;"></div>
    <img class="v-img__img v-img__img--contain" src="http://127.0.0.1:${
      process.env.PORT
    }${isMultipleAssets() ? client.media.logo : logoImgUrl}" style="">
    </div>
    </div>
    </div>
    
    <div class="v-card-text d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row">
    <div class="col-3 ma-sm-4">
    <h6 style="font-size:18px !important" class="text-sm font-weight-semibold mb-3">CENTRE COMMERCIAL :</h6>
    <p style="font-size:18px !important" class="mb-1">${
      isMultipleAssets() ? client.legal.name : retailCenter.name
    }</p>
    <p style="font-size:18px !important" class="mb-1">${
      isMultipleAssets() ? client.legal.address : retailCenter.address
    }</p>
    <p style="font-size:18px !important" class="mb-1">${
      isMultipleAssets() ? client.legal.city : retailCenter.city
    }</p>
    </div>
    <div class="col-9 mt-4 ma-sm-4">
    <h6 style="font-size:18px !important" class="text-sm font-weight-semibold mb-3">CONTACT CLIENT :</h6>
    <p style="font-size:18px !important" class="mb-1">
    ${booking.prospect.title} ${booking.prospect.firstname} ${
    booking.prospect.name
  }
    </p>
    </div>
    </div>
    
    <div class="v-table " style=" margin-left: 30px; margin-right: 30px">
    <div class="v-table__wrapper ">
    <table style="border:solid;font-size:18px !important">
    <thead>
    <tr>
    <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col">DESCRIPTION</th>
    <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col" class="text-left">MONTANT HT (MAD)</th>
    <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col" class="text-left">TVA (%)</th>
    <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col" class="text-left">TVA (MAD)</th>
    <th style="border-bottom:solid;font-size:18px !important" scope="col" class="text-left">TOTAL TTC (MAD)</th>
    </tr>
    </thead>
    <tbody>
    ${deviRows}
    <tr>
    <td style="border-right: solid;font-size:18px !important" class="text-left"><strong>Total</strong></td>
    <td style="border-right: solid;font-size:18px !important" class="text-left"><strong>
    ${Math.round(
      edits?.reduce((totalHT, edit) => {
        return totalHT + edit.unitPrice;
      }, 0),
    )}
    </strong></td>
    <td style="border-right: solid;font-size:18px !important" class="text-left"><strong>20%</strong></td>
    <td style="border-right: solid;font-size:18px !important" class="text-left"><strong>
    ${Math.round(
      edits?.reduce((totalTVA, edit) => {
        return totalTVA + (edit.unitPrice / 100) * 20;
      }, 0),
    )}
    </strong></td>
    <td style="font-size:18px !important" class="text-left"><strong>
    ${totalAmountInNumbers()}
    </strong></td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    
    
    <div style="font-size:18px !important" class="v-card-text d-flex justify-space-between print-row">
    <p>
    Arrêté le présent devis à la somme de ${moneyAmountInWords(
      totalAmountInNumbers(),
    )} Dirhams ./.
    <br><br>
    <strong>NOTES :</strong> ${edits[0].quote.notes}
    <br><br>
    <strong>IMPORTANT :</strong><br>
    Après accord sur les conditions générales d’exploitation d’un emplacement au niveau de Sela Plaza Targa
    Manifesté par l’apposition de notre signature et cachet sur lesdites conditions générales.
    <br><br>
    <strong>CONDITIONS DE PAIEMENT :</strong>
    <br>100% à la signature du bon de commande
    <br>
    Banque : ${
      isMultipleAssets()
        ? client.legal.bankName
        : booking.units[0].floor.retailCenter.bankName
    }
    <br>
    IBAN : ${
      isMultipleAssets()
        ? client.legal.bankIBAN
        : booking.units[0].floor.retailCenter.bankIBAN
    }
    <br>
    SWIFT : ${
      isMultipleAssets()
        ? client.legal.bankSWIFT
        : booking.units[0].floor.retailCenter.bankSWIFT
    }
    </p>
    </div>
    
    </div>
    <footer>
    <hr >
    <p style="font-size:18px !important;">
    <strong>${
      isMultipleAssets()
        ? client.legal.name
        : booking.units[0].floor.retailCenter.name
    }</strong>
    <br> Société Anonyme au Capital Social de
    ${
      isMultipleAssets()
        ? formatLocalNumber(client.legal.capital, true)
        : booking.units[0].floor.retailCenter.capital
    } DH
    Siège social : ${
      isMultipleAssets()
        ? client.legal.hq
        : booking.units[0].floor.retailCenter.headquarters
    }
    <br>
    RC : Nº${
      isMultipleAssets()
        ? client.legal.rc
        : booking.units[0].floor.retailCenter.legalPersonRC
    } ${
    isMultipleAssets()
      ? client.legal.city
      : booking.units[0].floor.retailCenter.legalPersonCityRC
  }
    IF : ${
      isMultipleAssets()
        ? client.legal.if
        : booking.units[0].floor.retailCenter.taxIF
    }
    Patente : ${
      isMultipleAssets()
        ? client.legal.patent
        : booking.units[0].floor.retailCenter.patente
    }
    ICE : ${
      isMultipleAssets()
        ? client.legal.ice
        : booking.units[0].floor.retailCenter.ice
    }
    <br>Adresse de correspondance : ${
      isMultipleAssets()
        ? client.legal.corAddress
        : booking.units[0].floor.retailCenter.address
    }, ${
    isMultipleAssets()
      ? client.legal.city
      : booking.units[0].floor.retailCenter.city
  }, ${
    isMultipleAssets()
      ? client.legal.zip
      : booking.units[0].floor.retailCenter.zip
  }, ${
    isMultipleAssets()
      ? client.legal.contact
      : booking.units[0].floor.retailCenter.country
  }
    </p>
    </footer>
</body>
    </html>`;

  return html;
};
