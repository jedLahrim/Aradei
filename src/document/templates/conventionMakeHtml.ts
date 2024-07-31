import { formatDateShort } from '../../utils/date';

// ! Redundant
export const conventionMakeHtml = (booking) => {
  const retailCenterInfos = booking.units[0].floor.retailCenter;
  const company = booking.company;
  const prospectInfos = booking.prospect;
  const today = new Date();
  const html = `<div style="font-size:20pt;padding:20px;width:1400px;position:relative;font-family:Times New Roman,Times,serif !important;" >
  
<body style="padding-top:3%; padding-bottom:3%; padding-right:2%; padding-left:2%; font-family:Times New Roman,Times,serif !important;">
<br /><br /> <br />
<p style="font-size:26pt;font-family:Times New Roman,Times,serif !important;text-align:center;font-weight:600"><u>
CONTRAT D’INSTALLATION D’ENSEIGNES SUR ESPACES VISIBLES</u></p>
  <br /><br/>
  <br /><br/>

  <strong>
  ENTRE :
  </strong>
  <br /><br/>
  <strong>1. ${
    retailCenterInfos.name
  }</strong>, société à responsabilité limitée d’associé unique, au capital social de 3.000.000 de dirhams, dont le siège social est sis à ${
    retailCenterInfos.city
  }, ${
    retailCenterInfos.address
  }, immatriculée au registre de commerce de Casablanca sous le numéro ${
    retailCenterInfos.legalPersonRC
  }.<br /><br /> Valablement représentée par ${
    retailCenterInfos.legalPersonTitle
  } <strong>${retailCenterInfos.legalPersonFirstname} ${
    retailCenterInfos.legalPersonName
  }</strong>, en sa qualité de gérant.<br /><br />
  <span style:"float:right">Ci-après «  <strong>${
    retailCenterInfos.name
  }</strong> » </span> <br />
  <p>
  <p style:"float:right;font-weight:600">
    D'UNE PART
  </strong>
  </p><br />
  <p>
  <strong>
    <u>ET</u>
  </strong>
  </p>
  <br />
  <strong>2. ${
    company.name
  }</strong>, société à responsabilité limitée à associé unique au capital de ${
    prospectInfos.companyCapital
  } , dont le siège social est sis à ${company.address}, ${
    company.city
  }, immatriculée au registre de commerce de ${company.city} sous le numéro ${
    company.rc
  }   <br /><br/>Valablement représentée par ${prospectInfos.title} <strong>${
    prospectInfos.firstname
  } ${prospectInfos.name}</strong> en sa qualité de ${
    prospectInfos.position
  }.  <br /> <br />
  <span style:"float:right;">Ci-après le «  <strong>Bénéficiaire</strong> » </span> <br />
  <p style:"float:right;font-weight:600">D'AUTRE PART</p>   <br /><br/>
  « ${
    retailCenterInfos.name
  } » et le « <strong>Bénéficiaire</strong> » sont ci-après dénommés individuellement une « <strong>Partie</strong> » et collectivement les « <strong>Parties</strong> ».<br /><br />
  <p>
  <p style="font-size:26pt;font-family:Times New Roman,Times,serif !important;text-align:center;text-decoration:underline;font-weight:600">
  IL A ETE PREALABLEMENT EXPOSE CE QUI SUIT :
  </p>

  </p><br />
  <p>A.
  « <strong>
  ${retailCenterInfos.legalName}
  </strong>» est propriétaire du centre commercial dit « <strong>${
    retailCenterInfos.name
  }</strong> » situé à ${
    retailCenterInfos.city
  }, (le « <strong>Centre Commercial</strong> »).
  « ${
    retailCenterInfos.legalName
  } » est propriétaire d’espaces de visibilités (Pylône, murets etc.) situés au sein du Centre Commercial et souhaite en faire bénéficier les entreprises détenant des locaux commerciaux au sein du Centre Commercial et souhaitant y installer leur enseigne.<br /><br />
  </p>
  B. Les Parties se sont rapprochées pour conclure le présent contrat afin de fixer les modalités du contrat portant sur lesdits espaces décrits en Annexe 1 du présent contrat.
  <br /><br/>
  </p>
  <p>
  <p style="font-size:26pt;font-family:Times New Roman,Times,serif !important;text-align:center;text-decoration:underline;font-weight:600"><u>
  CECI ÉTANT EXPOSE, IL EST CONVENU ET ARRÊTÉ CE QUI SUIT :</u>
  </p>

  </p><br />

  <p>
  <strong>
  Article 1. Objet
  </strong>
  </p>
  <p>
  Par le présent contrat, «    <strong> ${
    retailCenterInfos.legalName
  } </strong>» réserve au Bénéficiaire un espace de visibilité situé sur « la façade enseigne » (annexe 3) et sur le « Muret » décrit en Annexe n° 4 ( l’« Espace Concerné »), pour qu’il y appose  l’enseigne  « La Grande Récré », décrite en Annexe 3 et ce, pour la durée du contrat, telle que fixée dans l’article 3 ci-après ( le « <strong>Contrat</strong> »).<br /><br />
  La réservation de l’Espace Concerné est consentie au Bénéficiaire, à titre gratuit, pour toute la Durée du Contrat, telle que définie à l’article 3 ci-après. Néanmoins, le Bénéficiaire a l’obligation de payer directement à la Commune une redevance d’occupation temporaire du domaine public communal, dite communément <span ><em><strong>« taxe sur les enseignes »</strong></em></span> dont le taux est fixé par la loi n° 30-89 relative à la fiscalité des collectivités locales et de leurs groupements du 21 novembre 1989, ce qu’il accepte expressément.
  </p><br />

  <p>
  <strong>
  Article 2. Destination de l’Espace Concerné
  </strong>
  </p>
  <p>

  L’Espace Concerné décrit en Annexe est destiné uniquement à l’installation de l’enseigne du Bénéficiaire.<br /><br />

  Le Bénéficiaire, engagera à ses frais, un prestataire désigné par « ${
    retailCenterInfos.legalName
  } » pour produire ses enseignes, les installer sur l’Espace Concerné et les retirer en fin de validité du Contrat.
  
  </p><br />

  <p>
  <strong>
  Article 3. Durée
  </strong>
  </p>
  <p>

  Le Contrat est conclu pour une durée d’<strong>Un (01) an</strong> renouvelable par tacite reconduction, d’année en année, sauf résiliation par l’une des Partie en respectant un préavis d’un (01) mois (Ci-après la « <strong>Durée</strong> »).

  
  </p><br />

  <p>
  <strong>
  Article 4. Obligations du Bénéficiaire
  </strong>
  </p>
  <p>

Le Bénéficiaire s’engage à :<br /><br />
<ul>
<li>Respecter la destination de l’Espace Concerné, objet des présentes ;</li>
<li>Engager, à ses frais, un prestataire choisi par « ${
    retailCenterInfos.legalName
  }  » pour la production de son enseigne, son installation et sa désinstallation ;</li>
<li>Restituer à « ${
    retailCenterInfos.legalName
  }  » les frais engagés pour maintenir l’enseigne en parfait état d’entretien, le cas échéant ;</li>
<li>Retirer les installations à ses frais dans un délai de trois (03) jours suivant la fin du Contrat de location sous peine de versement de dommages-intérêts ;</li>
<li>Régler directement à la Commune concernée, la <span ><em><strong>« taxe sur les enseignes »</strong></em></span>, en sus de l’Indemnité d’Occupation à verser à « ${
    retailCenterInfos.legalName
  }  » ;</li>
<li>Restituer, sans délai et à première demande de « ${
    retailCenterInfos.legalName
  }  », le montant de la redevance communale dite <span ><em><strong>« taxe sur les enseignes »</strong></em></span>, le cas échéant, dans le cas où elle aurait été payée directement par « ${
    retailCenterInfos.legalName
  }  ».</li>
<li>Valider la conception par « ${
    retailCenterInfos.legalName
  }  » avant l’installation.</li>
</ul>

Et généralement à se conformer à toutes nouvelles exigences définies en interne, visant à préserver la sécurité et l’image du Centre Commercial.<br /><br />

  
  </p><br />

  <p>
  <strong>
  Article 5. La redevance d’occupation temporaire du domaine public communal
  </strong>
  </p>
  <p>

  « ${
    retailCenterInfos.legalName
  }  » rappelle au Bénéficiaire que l’enseigne objet du présent Contrat est soumise au paiement de la redevance d’occupation temporaire du domaine public communal dite <span ><em><strong>« taxe sur les enseignes »</strong></em></span>, que le Bénéficiaire s’engager à régler directement à la Commune concernée.<br /><br /><br /><br />
  À défaut de paiement par le Bénéficiaire du montant de la <span ><em><strong>« taxe sur les enseignes »</strong></em></span>, « ${
    retailCenterInfos.legalName
  }  » paiera directement à la Commune ledit montant. Dans ce cas, le Bénéficiaire s’engage à restituer à « ${
    retailCenterInfos.legalName
  }  », sans délais et à sa première demande, le montant de la <span ><em><strong>« taxe sur les enseignes »</strong></em></span> payé, sous peine de versement à « ${
    retailCenterInfos.legalName
  }  » d’une indemnité comminatoire de 500 dirhams par jour de retard, exigible à compter de la date de notification de la demande de paiement.<br /><br />

  
  </p><br />
  <p>
  <strong>
  Article 6. Résiliation
  </strong>
  </p>
  <p>

  À défaut de paiement d’un seul terme de l’Indemnité d’Occupation, le Contrat pourra être résilié par « ${
    retailCenterInfos.legalName
  }  », à sa seule discrétion, après mise en demeure de payer, par envoi d’une lettre recommandée avec accusé de réception, ou par tout autre moyen de notification prévue par la loi, resté sans effet durant quinze (15) jours.<br /><br />
  Les Parties peuvent rompre le Contrat à tout moment en respectant un préavis d’un (01) mois. Toutefois, en cas de résiliation par le Bénéficiaire ce dernier devra indemniser « ${
    retailCenterInfos.legalName
  }  » jusqu’à la fin de la durée en cours.<br /><br />
  

  
  </p><br />
  <p>
  <strong>
  Article 7. Confidentialité
  </strong>
  </p>
  <p>

  Les Parties s’engagent à tenir confidentielles toutes données ou informations dont elles ont eu connaissance dans le cadre de l’exécution du Contrat. Cette obligation de confidentialité s’étend à une durée de deux (02) années après la résiliation ou l’extinction du Contrat pour quelque cause que ce soit.<br /><br />
  Les informations contenues dans le Contrat ne peuvent être communiquées sans l’accord écrit des deux Parties.<br /><br />
  </p> 

  <p>
  <strong>
  Article 8. Droit applicable et attribution de compétence
  </strong>
  </p>
  <p>

  Le Contrat est régi et interprété conformément au droit marocain.<br /><br />
  À défaut de règlement à l’amiable dans les trente (30) jours qui suivent la survenance d’un litige, tout litige résultat de l’interprétation, l’exécution ou la cessation du présent Contrat sera soumis à la compétence exclusive du Tribunal de Commerce de Casablanca.<br /><br />
  
  </p><br />    

<br /><br/>
Fait à ${retailCenterInfos.city} 
Le   ${formatDateShort(today)} ,en deux (2) exemplaires originaux. 
<br /><br/>
<br /><br/>
  </div>
  <div style="font-size:18pt;padding-left:20px;position:absolute;width:300px"><strong>Pour le Bailleur	</strong></div>
  <div style="font-size:18pt;width:300px;position:absolute;left:350px"><strong>Pour le Bénéficiaire	
  </strong></div>
  </body>
  `;
  return html;
};
