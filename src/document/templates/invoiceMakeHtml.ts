

import { DevisCss } from './devisCss';
import { formatDateShort } from '../../utils/date';
import { bookingDuration } from '../../utils/booking';

export const invoiceMakeHtml = (edits, booking) => {
  console.log(
    '🚀 ~ file: invoiceMakeHtml.ts:6 ~ invoiceMakeHtml ~ booking:',
    booking,
  );
  const durationInDays = bookingDuration(booking.dateFrom, booking.dateTo);
  const today = new Date();
  // const logoImgUrl = booking.units[0].floor.retailCenter.logo;
  const logoImgUrl = 'http://127.0.0.1:5970/uploads/logos/Logo_MARJANE.png';
  

  const deviRows = edits.map((edit, index) => {
    return `
      <tr>
      <td style="font-size:18px !important;border-right: solid;border-right: solid; border-bottom:solid;padding-top: 20px; padding-bottom:20px" class="text-no-wrap"> ${edit.unitId} - ${edit.unitSurface} ${
      booking.units[index].measurementUnit === 'centimeters' ? 'cm²' : 'm²'
    }
      <br><strong> du ${formatDateShort(booking.dateFrom)} au ${formatDateShort(
      booking.dateTo,
    )}</strong></td>
      <td style="font-size:18px !important;border-right: solid; border-bottom:solid" class="text-no-wrap">${edit.unitPrice}</td>
      <td style="font-size:18px !important;border-right: solid; border-bottom:solid" class="text-left"> 20% </td>
      <td style="font-size:18px !important;border-right: solid; border-bottom:solid" class="text-left">${(edit.unitPrice / 100) * 20}</td>
      <td style="font-size:18px !important;border-bottom:solid" class="text-left">${edit.unitPrice + (edit.unitPrice / 100) * 20}</td>
  </tr>
      `;
  });

  const html = `
    <!DOCTYPE html>
    <html style="--initial-loader-bg: #FFFFFF; --initial-loader-color: #7367F0; --vh: 11.63px;" dir="ltr"
      class="wf-publicsans-n4-active wf-active" lang="en">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8">
      <script type="module" src="Aradei%20Capital_fichiers/client.js"></script>
      <meta charset="UTF-8">
      <link rel="icon" href="http://localhost:5173/favicon.ico">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aradei Capital</title>
    </head>
    ${DevisCss}
    <body class="skin--default" style="">
      <div id="app" data-v-app="">
        <div class="v-locale-provider v-locale--is-ltr">
          <div class="v-application v-theme--light v-layout v-layout--full-height v-locale--is-ltr"
            style="z-index: 1000; --v-global-theme-primary: 71,138,135;">
            <div class="v-application__wrap">
              <div
                class="layout-wrapper layout-nav-type-vertical layout-navbar-sticky layout-footer-static layout-content-width-boxed">
                <div class="layout-content-wrapper">
                  <main class="layout-page-content">
                    <div class="page-content-container">
                      <section id="clhnjbkhy0000epo69nntf191" class="">
                        <div class="v-row">
                          <div class="v-col-12">
                            <div class="v-card v-theme--light v-card--density-default v-card--variant-elevated"><!---->
                              <div class="v-card__loader">
                                <div class="v-progress-linear v-theme--light"
                                  style="height: 0px; --v-progress-linear-height: 2px;" role="progressbar"
                                  aria-hidden="true" aria-valuemin="0" aria-valuemax="100"><!---->
                                  <div class="v-progress-linear__background" style="width: 100%;"></div>
                                  <div class="v-progress-linear__indeterminate">
                                    <div class="v-progress-linear__indeterminate long"></div>
                                    <div class="v-progress-linear__indeterminate short"></div>
                                  </div><!---->
                                </div>
                              </div><!----><!----><!-- SECTION Header -->
                              <div
                                class="v-card-text d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row">
                                <!-- 👉 Left Content -->
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
                                </p><!-- 👉 Invoice ID -->
                                  <h6 style="font-size:18px !important" class="font-weight-strong text-xl my-6"> Facture ${
                                    edits[0].invoiceId
                                  } </h6><!-- 👉 Issue Date -->
                                  <p style="font-size:18px !important" class="mb-2"><span>Date: </span><span class="font-weight-semibold">
                                  ${formatDateShort(today)}
                                  </span>
                                  </p>
                                </div><!-- 👉 Right Content -->
                                <div style="" class="mt-4 ma-sm-4">
                                  <div class="v-responsive v-img logo mb-4 d-flex"
                                  style="width: 436px;justify-items: end;text-align:right">
                                    <div class="v-responsive__sizer" style="padding-bottom: 48.1013%;"></div><img
                                      class="v-img__img v-img__img--contain" src="${logoImgUrl}" alt=""
                                      style="">
                                  </div>
                                </div>
                              </div><!-- !SECTION -->
                              <hr class="v-divider v-theme--light" aria-orientation="horizontal" role="separator">
                              <!-- 👉 Payment Details -->
                              <div
                                class="v-card-text d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row">
                                <div class="col-3 ma-sm-4">
                                  <h6 style="font-size:18px !important" class="text-sm font-weight-semibold mb-3"> CENTRE COMMERCIAL : </h6>
                                  <p style="font-size:18px !important" class="mb-1">${booking.units[0].floor.retailCenter.name}</p>
                                  <p style="font-size:18px !important" class="mb-1">${booking.units[0].floor.retailCenter.address}</p>
                                  <p style="font-size:18px !important" class="mb-1">${booking.units[0].floor.retailCenter.city}</p>
                                </div>
                                <div class="col-9 mt-4 ma-sm-4">
                                  <h6 style="font-size:18px !important"  class="text-sm font-weight-semibold mb-3">
                                   CONTACT CLIENT :</h6>
                                   <p style="font-size:18px !important"class="mb-1">
                                  ${booking.prospect.title} ${
    booking.prospect.firstname
  } ${booking.prospect.name}</p>
                                </div>
                              </div><!-- 👉 Table -->
                              <hr class="v-divider v-theme--light" aria-orientation="horizontal" role="separator">
                              <div class="v-table v-theme--light v-table--density-default"><!---->
                                <div class="v-table__wrapper">
                                  <table style="border:solid;font-size:18px !important ">
                                    <thead>
                                      <tr>
                                        <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col"> DESCRIPTION </th>
                                        <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col" class="text-left"> MONTANT HT (MAD) </th>
                                        <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col" class="text-left"> TVA (%) </th>
                                        <th style="border-right: solid; border-bottom:solid;font-size:18px !important" scope="col" class="text-left"> TVA (MAD) </th>
                                        <th style=" border-bottom:solid;font-size:18px !important" scope="col" class="text-left"> TOTAL TTC (MAD) </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      ${deviRows}
                                      <tr>
                                        <td style="border-right: solid;font-size:18px !important" class="text-left"><strong> Total </strong></td>
                                        <td style="border-right: solid;font-size:18px !important " class="text-left"><strong>
                                        ${Math.round(
                                          edits?.reduce((totalHT, edit) => {
                                            return totalHT + edit.unitPrice;
                                          }, 0),
                                        )}
                                        </strong></td>
                                        <td style="border-right: solid;font-size:18px !important " class="text-left"><strong> 20% </strong></td>
                                        <td style="border-right: solid; font-size:18px !important" class="text-left"><strong>
                                        ${Math.round(
                                          edits?.reduce((totalTVA, edit) => {
                                            return (
                                              totalTVA +
                                              (edit.unitPrice / 100) * 20
                                            );
                                          }, 0),
                                        )}
                                        </strong></td>
                                        <td style="font-size:18px !important" class="text-left"><strong>
                                        ${Math.round(
                                          edits?.reduce((totalTTC, edit) => {
                                            return (
                                              totalTTC +
                                              edit.unitPrice +
                                              (edit.unitPrice / 100) * 20
                                            );
                                          }, 0),
                                        )}
                                        </strong></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div><!---->
                              </div>
                              <br />
                             
                              <div style="font-size:18px !important"  class="v-card-text d-flex justify-space-between print-row">
                              <p>
                                <strong>NOTES :</strong> ${edits[0].invoice.notes}
                                <br> <br>
                                <strong>MODALITÉS DE RÈGLEMENT :</strong><br>
                                    100% à l’avance. <br><br>
                                <strong>À PAYER PAR : </strong> <br>
                                    Chèque à l'ordre de EKO6TM <br>
                                    ou par virement bancaire sur le compte suivant : EKO6TM<br>
                                    CFG BANK , Agence Casablanca - Racine, 5 avenue Mohamed Sijilmassi<br>
                                    N° de compte : 050 780 0170107526842001 13<br>
                                    Code SWIFT : CAFGMAMC<br>
                              </p>
                              </div>
                           
                              <div style="position: fixed;bottom: 0;left: 0;width: 100%;text-align: center;" class="v-card-text">
                              <hr class="v-divider v-theme--light" aria-orientation="horizontal" role="separator">
                              <br>
                                <div class="d-flex mx-sm-4" style="justify-content: center;">
                                  <p style="font-size:18px !important" >
                                    EKO6TM SARL, Angle Abu Dhabi et route de l’Oasis - Résidence Soft City - 3ème étage, bureau 17 - Casablanca TP N° 36341121- RC N° : 486997- Identifiant Fiscal : 48531147- ICE N° : 002698183000036
                                  </p>
                                </div>
                              </div><!----><!----><span class="v-card__underlay"></span>
                            </div>
                          </div>
                      </section><!--v-if-->
                    </div>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </body><nordvpn-contentscript-extension-mount-2.73.8></nordvpn-contentscript-extension-mount-2.73.8>
    
    </html>`;

  return html;
};
