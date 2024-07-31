import { Booking } from 'src/booking/entities/booking.entity';
import { formatDateShort } from '../../utils/date';
import { moneyAmount } from '../../utils/money';

export const hotMakeHtml = (booking: Booking, dataObj) => {
  const getYearly = (monthly: number) => {
    const unit = booking.units[0];
    return (
      monthly *
      ((parseFloat(dataObj?.surface) || 0) +
        (unit?.mezzanine / 2 || 0) +
        (unit?.terrasse / 2 || 0))
    );
  };
  const getMonthly = (monthly: number) => {
    const unit = booking.units[0];
    return (
      monthly *
      ((parseFloat(dataObj.surface) || unit?.surface || 0) +
        (unit?.mezzanine / 2 || 0) +
        (unit?.terrasse / 2 || 0))
    );
  };
  const html = `


<html  xmlns="http://www.w3.org/1999/xhtml">
<head>
    <style type="text/css">

        .ritz .waffle a {
            background-color: #ffffff;
            color: inherit;
        }



        .ritz .waffle .s27 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            font-weight: bold;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s7 {
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }



        .ritz .waffle .s29 {
            border-bottom: 1px SOLID #000000;
            background-color: #d9d9d9;
            text-align: left;
            font-weight: bold;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s15 {
            border-bottom: 1px SOLID #000000;
            background-color: #f3f3f3;
            text-align: center;
            font-weight: bold;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s4 {
            border-bottom: 1px SOLID #000000;
            border-right: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s89 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s31 {
            border-right: none;
            background-color: #ffffff;
            text-align: left;
            font-weight: bold;
            color: #ff0000;
            font-family: 'docs-Calibri', Arial;
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s11 {
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 10pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }





        .ritz .waffle .s0 {
            background-color: #980000;
            text-align: center;
            font-weight: bold;
            place-items: center;
            color: #ffffff;
            justify-content: center;
            font-family: 'Arial';
            font-size: 19pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }


        .ritz .waffle .s21 {
            border-left: none;
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: center;
            place-items: center;
            font-weight: bold;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s77 {
            border-left: none;
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            place-items: center;
            font-weight: bold;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s10 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s12 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s55 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: center;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s33 {
            border-right: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            font-weight: bold;
            font-style: italic;
            color: #000000;
            font-family: 'Arial';
            font-size: 10pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s101 {
            border-right: 1px SOLID #000000;
            border-top: 1px SOLID #000000;
            border-left: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            font-weight: bold;
            font-style: italic;
            color: #000000;
            font-family: 'Arial';
            font-size: 10pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s102 {
            border-right: 1px SOLID #000000;
            border-left: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            font-weight: bold;
            font-style: italic;
            color: #000000;
            font-family: 'Arial';
            font-size: 10pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s103 {
            border-right: 1px SOLID #000000;
            border-left: 1px SOLID #000000;
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            font-weight: bold;
            font-style: italic;
            color: #000000;
            font-family: 'Arial';
            font-size: 10pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }



        .ritz .waffle .s16 {
            border-bottom: 1px #000000;
            background-color: #f3f3f3;
            text-align: center;
            font-weight: bold;
            color: #1f1f1f;
            font-family: 'docs-Google Sans', Arial;
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }


        .ritz .waffle .s9 {
            border-bottom: 1px SOLID #000000;
            background-color: #d9d9d9;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s14 {
            border-bottom: 1px SOLID #000000;
            background-color: #f3f3f3;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }



        .ritz .waffle .s28 {
            border-bottom: 1px SOLID #000000;
            background-color: #d9d9d9;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s18 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: center;
            font-weight: bold;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s30 {
            border-bottom: 1px SOLID #000000;
            background-color: #ffffff;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s26 {
            border-bottom: 1px SOLID #000000;
            background-color: #999999;
            text-align: left;
            font-weight: bold;
            color: #ffffff;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s1 {
            background-color: #980000;
            text-align: center;
            font-weight: bold;
            color: #ffffff;
            font-family: 'Arial';
            font-size: 12pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }



        .ritz .waffle .s3 {
            background-color: #999999;
            text-align: left;
            font-weight: bold;
            color: #ffffff;
            font-family: 'Arial';
            font-size: 12pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s6 {
            border-bottom: 1px SOLID #000000;
            border-right: 1px SOLID #000000;
            background-color: #d9d9d9;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s8 {
            border-bottom: 1px SOLID #000000;
            background-color: #999999;
            text-align: left;
            font-weight: bold;
            color: #ffffff;
            font-family: 'Arial';
            font-size: 12pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s17 {
            border-bottom: 1px SOLID #000000;
            border-right: 1px SOLID #000000;
            background-color: #d9d9d9;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 11pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        .ritz .waffle .s5 {
            border-bottom: 1px SOLID #000000;
            border-right: 1px SOLID #000000;
            background-color: #efefef;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
            vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }
        .ritz .waffle .s88 {
            border-bottom: 1px SOLID #000000;
            background-color: #efefef;
            text-align: left;
            color: #000000;
            font-family: 'Arial';
            font-size: 12pt;
               vertical-align: center;
            white-space: nowrap;
            direction: ltr;
            padding: 2px 3px 2px 3px;
        }

        html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

      
        .waffle {
            table-layout: fixed;
           width: 100%;
            zoom: 130%;
        }

        .waffle td,
        .waffle th {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }


        .waffle tbody tr {
            height: 35px;
        }
       .page-break {
          page-break-before: always; 
        }


    </style>

</head>
<body>
<div class="ritz grid-container" dir="ltr" style="background-color: #ffffff;">
    <table class="waffle" cellspacing="0" cellpadding="0">
        <tbody>
        <tr >
            <td class="s0" dir="ltr" colspan="12" >
                HEAD OF TERMS
            </td>
        </tr>
        <tr >
            <td class="s1" dir="ltr" colspan="12">
                Site: ${booking.units[0].floor.retailCenter.name}
            </td>
        </tr>
        <tr>
            <td class="s1" dir="ltr" colspan="12" >
                ${booking.company.name}
            </td>
        </tr>
        <tr >
            <td class="s1" dir="ltr" colspan="12">
                ${formatDateShort(new Date())}
            </td>
        </tr>
        <tr    >
            <td class="s3" dir="ltr" colspan="12">
                LOCAL
            </td>
        </tr>
        <tr     >
            <td class="s5" dir="ltr" colspan="1">
            </td>
            <td class="s5" dir="ltr" colspan="2" >
                Nª
            </td>
            <td class="s5" dir="ltr" colspan="1">
                Niveau
            </td>
            <td   class="s5 softmerge" dir="ltr" colspan="2">
                <div class="softmerge-inner" >
                    Surface GLA RDC m²
                </div>
            </td>
            <td class="s5" dir="ltr" colspan="2">
                Surface GLA mezzanine m²
            </td>
            <td  class="s5"  dir="ltr" colspan="2">
                Surface terrasse m²
            </td>
            <td  class="s88" dir="ltr" colspan="2">
                GLA pondérée m²
            </td>
        </tr>
        <tr     >
            <td class="s6" dir="ltr" colspan="1">
                Local <br>
                principal
            </td>
            <td class="s4" dir="ltr" colspan="2">
                ${booking.units
                  .map((unit) => unit?.unitId)
                  .filter(Boolean)
                  .join(' - ')}
            </td>
            <td class="s4" dir="ltr" colspan="1">
                ${booking.units[0].floor.name}
            </td>
            <td class="s4" dir="ltr" colspan="2">
                ${dataObj.surface || 0} m²
            </td>
            <td class="s4" dir="ltr" colspan="2">
                ${booking.units[0].mezzanine || 0} m²
            </td>
            <td class="s4" dir="ltr" colspan="2">
                ${booking.units[0].terrasse || 0} m²
            </td>
            <td class="s89" dir="ltr" colspan="2">
                ${
                  (parseFloat(dataObj.surface) || 0) +
                  (booking.units[0].mezzanine / 2 || 0) +
                  (booking.units[0].terrasse / 2 || 0)
                } m²
            </td>
        </tr>
        <tr >
            <td class="s7" colspan="2" />
            <td class="s7" dir="ltr" colspan="10"  >
                *Les surfaces communiquées sont approximatives - les loyers seront ajustés en fonction des surfaces
            </td>
        </tr>

        <tr >
            <td class="s11" colspan="12"/>
        </tr>


        <tr >
            <td class="s8" dir="ltr" colspan="12">
                LOCAL
            </td>
        </tr>
        <tr >
            <td class="s9" dir="ltr" colspan="5">
                Enseigne
            </td>
            <td class="s10" dir="ltr" colspan="7">
                ${booking.brand.name}
            </td>
        </tr>
        <tr >
            <td class="s9" dir="ltr" colspan="5">
                Activite du bail
            </td>
            <td class="s10" dir="ltr" colspan="7">
                ${dataObj.companyActivity}
            </td>
        </tr>
        <tr >
            <td class="s9" dir="ltr" colspan="5">
                Changement d&#39;enseigne
            </td>
            <td class="s10" dir="ltr" colspan="7">
                Accord du bailleur obligatoire
            </td>
        </tr>


        <tr >
            <td class="s11" colspan="12"/>
        </tr>


        <tr >
            <td class="s8" dir="ltr" colspan="12">
                CONTRAT
            </td>
        </tr>
        <tr >
            <td class="s9" dir="ltr" colspan="5">
                Durée du contrat
            </td>
            <td class="s10" dir="ltr" colspan="7">
                ${dataObj['Durée du contrat']}
            </td>
        </tr>
        <tr>
            <td class="s9" dir="ltr" colspan="5">
                Prévision Livraison du local :
            </td>
            <td class="s10" dir="ltr" colspan="7">
                ${formatDateShort(dataObj['livraison'])}
            </td>
        </tr>


        <tr >
            <td class="s11" colspan="12"/>
        </tr>



        <tr>
            <td class="s8" dir="ltr" colspan="12">
                LOYERS ET CHARGES
            </td>
        </tr>
        <tr >
            <td class="s14" colspan="5" />
            <td class="s15" dir="ltr" colspan="3">
                Prix au m2
            </td>
            <td class="s15" dir="ltr" colspan="4">
                Prix GLA totale
            </td>
        </tr>
        ${dataObj.rent
          .map(
            (monthly, index) => `
        <tr    >
            <td class="s17" dir="ltr" colspan="5">
                ${`Loyer Année ${index + 1} en MAD / mois`}
            </td>
            <td colspan="3" class="s55" dir="ltr">
                <strong>
                    ${moneyAmount(monthly).replace(/\sMAD$/, '')}

                </strong>
                MAD / HC / HT / Mois

            </td>
            <td colspan="4" class="s55" dir="ltr">
                <strong>
                    ${moneyAmount(getYearly(monthly)).replace(/\sMAD$/, '')}
                </strong>
                MAD / HC / HT / Mois
            </td>

        </tr>
        `,
          )
          .join('')}
        ${dataObj.common
          .map(
            (monthly, index) => `
        <tr    >
            <td colspan="5" class="s17" dir="ltr">
                ${`Charges communes année ${index + 1} en MAD / mois`}
            </td>
            <td class="s55" dir="ltr" colspan="3">
                <strong>
                    ${moneyAmount(monthly).replace(/\sMAD$/, '')}

                </strong>
                MAD / HC / HT / Mois
            </td>
            <td class="s55" dir="ltr" colspan="4">
                <strong>
                    ${moneyAmount(getYearly(monthly)).replace(/\sMAD$/, '')}

                </strong>
                MAD / HC / HT / Mois
            </td>
        </tr>
        `,
          )
          .join('')}
        ${dataObj.common
          .map(
            (monthly, index) => `
        <tr    >
            <td colspan="5" class="s17" dir="ltr">
                ${`Montant total mensuel (loyer + charges) année ${
                  index + 1
                } en MAD / mois`}
            </td>
            <td  colspan="3" class="s55" dir="ltr">
                <strong>
                    ${moneyAmount(
                      parseFloat(dataObj?.rent[index]) +
                        parseFloat(dataObj?.common[index]),
                    ).replace(/\sMAD$/, '')}

                </strong>
                MAD / HC / HT / Mois
            </td>
            <td colspan="4" class="s55" dir="ltr">
                <strong>
                    ${moneyAmount(
                      getYearly(
                        parseFloat(dataObj?.rent[index]) +
                          parseFloat(dataObj?.common[index]),
                      ),
                    ).replace(/\sMAD$/, '')}

                </strong>
                MAD / HC / HT / Mois
            </td>
        </tr>
        `,
          )
          .join('')}







        <tr>
            <td class="s17" dir="ltr" colspan="5" style="white-space: normal;">
Indexation du loyer
            </td>
            <td class="s12" dir="ltr" colspan="7">
                <strong>
                    ${dataObj.indexPercent || '10'}%
                </strong>
à partir du 1er jour du début de la 4eme année
            </td>
        </tr> 
        <tr>
            <td class="s17" dir="ltr" colspan="5" style="white-space: normal;">
            Indexation charges
            </td>
            <td class="s12" dir="ltr" colspan="7">
                <strong>
                    ${dataObj.indexPercent1 || '10'}%
                </strong>
à partir du 1er jour du début de la 4eme année         
   </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5">
                Date de facture du 1er loyer
            </td>
            <td class="s12" dir="ltr" colspan="7">
                <strong>
                    ${dataObj.monthOne || '2'}
                </strong>
                mois après la signature du PV de livraison
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5">
                Franchise de loyer
            </td>
            <td class="s12" dir="ltr" colspan="7">
                <strong>
                    ${dataObj.monthTwo || '3'}
                </strong>
                 mois de franchises de loyer pendant la période travaux
            </td>
        </tr>
        
        
        
        
      ${
        dataObj.other && Array.isArray(dataObj.other)
          ? dataObj.other
              .map(
                (text, index) => `
    <tr>
        <td colspan="5" class="s17" dir="ltr">
            ${dataObj.other[index]?.title}
        </td>
        <td colspan="7" class="s12" dir="ltr">
            ${dataObj.other[index]?.text1}
        </td>
    </tr>
`,
              )
              .join('')
          : ''
      }

         
         
      
        <tr >
            <td class="s11" colspan="12"/>
        </tr>




        <tr>
            <td class="s26" dir="ltr" colspan="12">
                IMPOTS ET TAXES - GROS TRAVAUX
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr"  colspan="5">
                Taxe sur Services Communaux
            </td>
            <td class="s12" dir="ltr"  colspan="2" >
                A la charge du Preneur à
            </td>
            <td class="s12" dir="ltr"  colspan="4" style="white-space: normal;">
                <strong>
                    ${dataObj.tax || '10.50'}%
                </strong>
                du loyer HT, soit mensuellement sur la 1ère année
            </td>
            <td class="s27" dir="ltr"  colspan="1">
             ${dataObj.tax2}

            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr"  colspan="5">
                Autres impôts et taxes de toutes natures, existants ou futurs
            </td>
            <td class="s12" dir="ltr"  colspan="2">
                A la charge du Preneur<br><span style="font-size:9pt;">(soit la TVA actuellement)</span>
            </td>
            <td class="s12" dir="ltr"  colspan="4" style="white-space: normal;">
                <strong>
                    ${dataObj.otherTax || '20.00'}%
                </strong>
                du loyer + charges, soit mensuellement sur la 1ère année
            </td>
            <td class="s27" dir="ltr" colspan="1">
              ${dataObj.otherTax2 || '20.00'}
            </td>
        </tr>






        <tr>
            <td class="s17" dir="ltr"  colspan="5">
                Gros travaux : Gros œuvre (murs extérieurs)
            </td>
            <td class="s12" dir="ltr" colspan="7">
                A la charge du Bailleur
            </td>
        </tr>




        <tr >
            <td class="s11" colspan="12"/>
        </tr>









        <tr>
            <td class="s26" dir="ltr" colspan="12">
                IMPOTS ET TAXES - GROS TRAVAUX
            </td>
        </tr>

        <tr>
            <td class="s28" dir="ltr" colspan="5">
                <span style="font-weight:bold;">Dépôt de garantie (3 mois de loyer + charges)</span><span style="font-size:9pt;font-weight:bold;"><br></span><span style="font-size:10pt;">Le dépôt de garantie sera actualisé en fonction du loyer<br>(ça devrait correspondre toujours à 3 mois de loyer + charges)</span>
            </td>
            <td class="s12" dir="ltr" colspan="2">
                <strong>
  ${moneyAmount(
    getMonthly(
      parseFloat(dataObj?.rent[dataObj?.rent.length - 1]) +
        parseFloat(dataObj?.common[dataObj?.common.length - 1]),
    ) * 3,
  )
    .replace(/\sMAD$/, '')
    .replace(/\sEUR$/, '')}                </strong>
                 MAD HT <span style="font-size:11pt;">soit</span>
            </td>
            <td class="s12" dir="ltr" colspan="5" style="white-space: normal;">
                l&#39;équivalent de trois mois de loyer + charges payable HT
            </td>
        </tr>
        <tr>
            <td class="s28" dir="ltr"  colspan="5" style="white-space: normal;">
                <span style="font-weight:bold;">Paticipation aux frais de pilotage des travaux du preneur (RTM / Pilote B) </span><span style="font-size:10pt;"><br>Important pour coordonner vos travaux avec ceux de notre chantier. Objectif: orienter vos aménageurs pour être en ligne avec les prescriptions techniques >du projets et l&#39;évolution des installations </span>
            </td>
            <td class="s12" dir="ltr"  colspan="2">
                <strong>
                    ${dataObj.pilotage}
                </strong>
              <span style="font-size:11pt;"> MAD HT soit</span>
            </td>
            <td class="s12" dir="ltr"  colspan="5">
               <strong>
                                  ${moneyAmount(
                                    parseFloat(dataObj?.pilotage) * 1.2,
                                  )
                                    .replace(/\\sMAD$/, '')
                                    .replace(/\\sEUR$/, '')}

               </strong>
                MAD TTC
            </td>
        </tr>
        <tr>
            <td class="s28" dir="ltr" colspan="5" style="white-space: normal;">
                <span style="font-weight:bold;">Participation aux frais de marketing préouverture </span><span style="font-size:10pt;"><br>Il s&#39;agit de communication visant à promouvoir la première ouverture du projet au public dans son ensemble. Tous les locataires y participent y compris le Bailleur.</span>
            </td>
            <td class="s12" dir="ltr" colspan="2">
                <strong>
                    ${dataObj.marketing}
                </strong>
                 MAD HT <span style="font-size:11pt;">soit</span>
            </td>
            <td class="s12" dir="ltr" colspan="5">
                <strong>
                  ${moneyAmount(parseFloat(dataObj?.marketing) * 1.2)
                    .replace(/\\sMAD$/, '')
                    .replace(/\\sEUR$/, '')}
                </strong>
                MAD TTC
            </td>
        </tr>
        <tr>
            <td class="s29" dir="ltr" colspan="5">
                TOTAL INDEMNITE D&#39;IMMOBILISATION (à verser à la signature)
            </td>
            <td class="s12" dir="ltr" colspan="2" >
               <strong>
               ${moneyAmount(
                 getMonthly(
                   parseFloat(dataObj?.rent[dataObj?.rent.length - 1]) +
                     parseFloat(dataObj?.common[dataObj?.common.length - 1]),
                 ) *
                   3 +
                   parseFloat(dataObj?.marketing) * 1.0 +
                   parseFloat(dataObj?.pilotage) * 1.0,
               )
                 .replace(/\sMAD$/, '')
                 .replace(/\sEUR$/, '')}
            
               </strong>
                  MAD HT <span style="font-size:11pt;">soit</span>
            </td>
            <td class="s12" dir="ltr" colspan="5">
                <strong>
 ${moneyAmount(
   getMonthly(
     parseFloat(dataObj?.rent[dataObj?.rent.length - 1]) +
       parseFloat(dataObj?.common[dataObj?.common.length - 1]),
   ) *
     3 +
     parseFloat(dataObj?.marketing) * 1.2 +
     parseFloat(dataObj?.pilotage) * 1.2,
 )
   .replace(/\sMAD$/, '')
   .replace(/\sEUR$/, '')}                </strong>
                MAD TTC
            </td>
        </tr>



        <tr >
            <td class="s11" colspan="12"/>
        </tr>



        <tr>
            <td class="s26" dir="ltr" colspan="12" >
                SOUS-LOCATION / GERANCE LIBRE / CESSION
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5">
                Sous-location
            </td>
            <td class="s30" dir="ltr" colspan="7" >
                ${dataObj.sousLocation}
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5">
                Gérance libre
            </td>
            <td class="s30" dir="ltr" colspan="7">
                ${dataObj.gerance}
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5" >
                Cession
            </td>
            <td class="s30" dir="ltr" colspan="7" style="white-space: normal;">
                ${dataObj.cession}
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5">
                Droit de préemption
            </td>
            <td class="s30" dir="ltr" colspan="7" style="white-space: normal;">
                ${dataObj.droit}
            </td>
        </tr>
        <tr>
            <td class="s17" dir="ltr" colspan="5">
                Conditions spéciales
            </td>
            <td class="s30" dir="ltr" colspan="7" style="white-space: normal;">
                ${dataObj.conditions}
            </td>
        </tr>



        </tbody>
    </table>
</div>
  <div class="page-break"></div>

<div class="ritz grid-container" dir="ltr" style="background-color: #ffffff;">
    <table class="waffle" cellspacing="0" cellpadding="0">
    <tr>
            <td class="s11" colspan="12"></td>
        </tr>
        <tr>
            <td class="s31 softmerge" dir="ltr" colspan="12">
                <div class="softmerge-inner" style="width: 680px; left: -1px;">
                    OFFRE SOUMISE A VALIDATION DES INSTANCES DE GOUVERNANCE DU BAILLEUR
                </div>
            </td>
        </tr>
        <tr>
            <td class="s11" colspan="12"></td>
        </tr>
        <tr>
            <td class="s101" dir="ltr" colspan="6">
                Acceptation du Preneur
            </td>
        </tr>
        <tr>
            <td class="s102" dir="ltr" colspan="6">
                Signature &amp; Cachet (mention de &quot;bon pour accord&quot;)
            </td>
        </tr>
        <tr>
            <td class="s102" dir="ltr" colspan="6">
                Mme/M.. _____________________________________________
            </td>
        </tr>
        <tr>
            <td class="s102" colspan="6"></td>
        </tr>
        <tr>
            <td class="s102" colspan="6"></td>
        </tr>
        <tr>
            <td class="s102" colspan="6"></td>
        </tr>
        <tr>
            <td class="s103" colspan="6"></td>
        </tr>
</table>
</div>
</body>
</html>



  `;
  return html;
};
