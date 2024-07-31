import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedEmailNotifications() {
  console.log('Seeding emailNotifications');

  const aradeiEmailTemplate = await prisma.emailTemplate.createMany({
    data: [
      {
        id: 1,
        name: 'Aradei',
        signature: 'Aradei team',
        headerImage: `https://www.squarefeet.cloud/wp-content/uploads/2false23/true2/Header_sqft.jpg`,
        footerImage: `https://www.squarefeet.cloud/wp-content/uploads/2false23/falsetrue/Footer.jpg`,
        linkWebsite: 'https://v2.squarefeet.cloud/',
      },
    ],
  });
  async function createTemplate(template) {
    return await prisma.messageNotification.create({
      data: {
        ...template,
        tos: { connect: template.tos.map((to) => ({ id: to })) },
      },
    });
  }
  async function createAllTemplates() {
    const templates = [
      {
        name: 'new_user',
        subject: 'Votre accès à Squarefeet',
        event: 'Nouveau lead enregistré',
        department: 'General',
        message:
          '<h3>Bienvenue à bord {{firstName}}</h3><p>Votre compte est prêt.</p><p>Veuillez utiliser les identifiants suivants pour vous connecter :</p><p><strong>Url</strong>: <a href="https://v2.squarefeet.cloud" rel="noopener noreferrer" target="_blank">v2.squarefeet.cloud</a></p><p><strong>Login</strong>: {{login}}</p><p><strong>Password</strong>: {{password}}</p><p>Si vous avez besoin d\'aide, n\'hésitez pas à nous contacter.</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [1],
      },
      {
        name: 'new_quote',
        subject: 'Votre devis "{{brand}}"',
        event: 'Nouveau devis disponible',
        department: 'Specialty',
        message:
          '<p>Bonjour {{contact}},</p><p>Je vous prie de trouver ci-joint le devis et les conditions générales relatifs à votre consultation.</p><p>Pour valider, merci de nous retourner ces éléments <strong>signés, tamponnés</strong> et <strong>accompagnés</strong> du règlement.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [],
      },
      {
        name: 'new_proposal',
        subject: 'Proposition "{{brand}}"',
        event: 'Nouvelle proposition disponible',
        department: 'General',
        message:
          '<p>Bonjour {{contact}}</p><p>Je vous prie de trouver en pièce jointe la proposition commerciale relative à votre consultation.</p><p>Nous restons à votre disposition pour faire suite.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [],
      },
      {
        name: 'new_convention',
        subject: 'Convention d\'occupation temporaire "{{brand}}"',
        event: 'Nouvelle convention disponible.',
        department: 'General',
        message:
          "<p>Bonjour {{contact}},</p><p>Je vous prie de trouver ci-jointes la convention d'occupation temporaire et les conditions générales relatives à votre consultation.</p><p>Pour valider, merci de nous retourner ces éléments <strong>signés, tamponnés</strong> et <strong>accompagnés</strong> du règlement.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>",
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [],
      },
      {
        name: 'doc_to_retailer',
        subject: 'PV de Livraison "{{brand}}"',
        event: 'Nouveau document disponible',
        department: 'General',
        message:
          '<p>Bonjour {{contact}},</p><p>Un PV de Livraison est disponible pour vous.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [6],
      },
      {
        name: 'send_invoice',
        subject: 'Facture "{{brand}}"',
        event: 'Nouvelle facture disponible',
        department: 'General',
        message:
          '<p>Bonjour {{contact}},</p><p>Veuillez trouver ci-jointe votre facture.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [],
      },
      {
        name: 'confirm_contract_LT',
        subject: 'Contract signe disponible "{{brand}}"',
        event: 'Nouveau document disponible',
        department: 'General',
        message:
          "<p>Bonjour {{contact}},</p><p>Contract signe est disponible.</p><p>Veuillez vérifier la pièce jointe  où vous connecter pour la consulter</p><p>Si vous avez besoin d'aide, n'hésitez pas à nous contacter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>",
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [1, 5, 20],
      },
      {
        name: 'new_offer',
        subject: 'Notre offre "{{brand}}"',
        event: 'Nouvelle offre',
        department: 'General',
        message:
          '<p>Bonjour {{contact}},</p><p>Je vous prie de trouver en pièce jointe la proposition commerciale relative à votre consultation, ainsi que les Head of Terms.</p><p>Nous restons à votre disposition pour faire suite.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [],
      },
      {
        name: 'new_fiche_de_com',
        subject: 'Nouvelle fiche de com "{{brand}}"',
        event: 'Nouvelle fiche de com en attente de validation',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Une nouvelle fiche de com est en attente de validation,</p><p>Vous pouvez la consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [8, 9, 11, 12],
      },
      {
        name: 'new_doc_Contract_sp',
        subject: 'Nouveau contract "{{brand}}"',
        event: 'Nouveau contract disponible',
        department: 'General',
        message:
          "<h3>Nouveau Contrat</h3><p>Bonjour, </p><p>Un Nouveau Contrat est disponible.</p><p>Veuillez vérifier la pièce jointe ou vous connecter pour le consulter.</p><p>Si vous avez besoin d'aide, n'hésitez pas à nous contacter.</p>",
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [1, 11, 21, 22],
      },
      {
        name: 'confirmation_installation_specialty',
        subject: 'Nouvelle installation Specialty "{{brand}}"',
        event: 'Nouvelle installation Specialty',
        department: 'Specialty',
        message:
          '<p>Bonjour</p><p>Une nouvelle installation est confirmée.</p><p>Voici les détails:</p><p>SOCIETE : {{company}}</p><p>CONTACT : {{contact}}</p><p>CENTRE : {{retailCenters}}</p><p>UNITE : {{units}}</p><p>ETAGE :  {{floors}}</p><p>SURFACE : {{surface}}</p><p>DATE DE DEBUT : {{dateFrom}}</p><p>DATE DE FIN : {{dateTo}}</p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [10, 11, 12, 21, 23],
      },
      {
        name: 'relance',
        subject: 'Relance : documents en attente de validation "{{brand}}"',
        event: 'Relance : documents en attente de validation',
        department: 'General',
        message:
          "<p>Bonjour,</p><p>Une validation de document est toujours requise de votre part.</p><p>Veuillez vous connecter pour le vérifier.</p><p>Si vous avez besoin d'aide, n'hésitez pas à nous contacter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>",
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [],
      },
      {
        name: 'new_contrat_bail',
        subject: 'Demande de contrat "{{brand}}"',
        event: 'Demande de contrat',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Vous avez une nouvelle demande de redaction de contrat de bail.</p><p>Veuillez vous connecter sur votre espace pour la consulter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [3],
      },
      {
        name: 'new_invoice',
        subject: 'Demande de facture "{{brand}}"',
        event: 'Demande de facture',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Une nouvelle demande de facture est en attente.</p><p>Veuillez vous connecter pour la vérifier.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [8],
      },
      {
        name: 'Request_Technical_Docs',
        subject: 'Liste des documents techniques à fournir "{{brand}}"',
        event: 'Liste des documents techniques à fournir',
        department: 'General',
        message:
          '<p>Bonjour {{contact}},</p><p>Je vous prie de trouver ci-dessous la liste des documents à nous remettre pour le démarrage de vos travaux au {{retailCenter}} :</p><ul><li>L’assurance TRC accompagnée du contrat de souscription ou la quittance de paiement</li><li>Le Plan d’aménagement du local</li><li>Le planning des travaux</li></ul><p>Le planning de remise des documents cités ci-après : (NB : les études et les plans techniques doivent être approuvés par un bureau de contrôle agréé avant remise) :</p><ol><li>Coupe montrant la hauteur sous faux plafond</li><li>Plan de coupe côté montrant l’emplacement de l’enseigne</li><li>Élévation de la façade présentant les matériaux utilisés ainsi que les détails de fixation de la façade, rideau et enseigne</li><li>Notice de sécurité du local réalisée par un bureau de contrôle agréé</li></ol><p>Électricité :</p><ul><li>Plan de détection incendie</li><li>Bilan de puissance électrique</li></ul><p>Fluides :</p><ul><li>Plan d’emplacement des équipements extérieurs de climatisation y compris détails des socles le cas échéant.</li><li>Plan de Plomberie</li><li>Plan de Sprinkler (y/c 2ème nappe si nécessaire) validé par un bureau de contrôle</li><li>Plan de distribution de gaz</li><li>Plan de protection contre l’incendie (extincteurs, etc. …)</li><li>D’autres plans suivant un éventuel besoin spécifique du preneur</li></ul><p>Liste des intervenants dans la mission d’aménagement : BET, Bureau de contrôle, Entreprise.</p><p>Merci de noter que mon collègue Azzedine BOULASDAL (false6 66 87 3true truetrue), en copie de ce mail, sera votre contact pour vos questions techniques.</p><p>Cordialement,</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [],
      },
      {
        name: 'leasing_form_validated',
        subject: 'Validation fiche de com "{{brand}}"',
        event: 'Validation fiche de com',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>{{creator}} a bien validé la fiche de com relative au client {{brand}}.</p><p>Vous pouvez la consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [],
      },
      {
        name: 'Comments_Fiche_Com',
        subject: 'Nouveau commentaire fiche de Com "{{brand}}"',
        event: 'Nouveau commentaire fiche de com',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Vous avez reçu un nouveau commentaire de {{creator}} sur la fiche de com pour : {{brand}}.</p><p><span style="letter-spacing: 0.03125em; color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));">Vous pouvez le consulter en cliquant sur </span><a href="{{documentLink}}" rel="noopener noreferrer" target="_blank" style="letter-spacing: 0.03125em;">ce lien</a><span style="letter-spacing: 0.03125em; color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));">.</span></p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: true,
        toSender: true,
        tos: [8, 9, 11, 22],
      },
      {
        name: 'new_fiche_rtm',
        subject: 'Nouvelle fiche RTM "{{brand}}"',
        event: 'Nouvelle fiche RTM en attente de validation',
        department: 'General',
        message:
          '<h3>Fiche RTM</h3><p>Bonjour,</p><p>Une nouvelle fiche RTM est en attente de validation:</p><p>Vous pouvez la consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [3, 8],
      },
      {
        name: 'new_fiche_de_com_lt',
        subject: 'Nouvelle fiche de com "{{brand}}"',
        event: 'Nouvelle fiche de com en attente de validation',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Une nouvelle fiche de com est en attente de validation:</p><p>Vous pouvez la consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [5, 8, 9, 22],
      },
      {
        name: 'new_doc_Contract_lt',
        subject: 'Nouveau contract "{{brand}}"',
        event: 'Nouveau contract disponible',
        department: 'General',
        message:
          "<p>Bonjour,</p><p>Un Nouveau Contrat est disponible.</p><p>Veuillez vérifier la pièce jointe ou vous connecter pour le consulter.</p><p>Si vous avez besoin d'aide, n'hésitez pas à nous contacter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>",
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [5, 1, 20],
      },
      {
        name: 'Comments_Fiche_Com_LT',
        subject: 'Nouveau commentaire fiche de Com "{{brand}}"',
        event: 'Nouveau commentaire fiche de com',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Vous avez reçu un nouveau commentaire de {{creator}} sur la fiche de com pour : {{brand}}.</p><p><span style="letter-spacing: 0.03125em; color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));">Vous pouvez le consulter en cliquant sur </span><a href="{{documentLink}}" rel="noopener noreferrer" target="_blank" style="letter-spacing: 0.03125em;">ce lien</a><span style="letter-spacing: 0.03125em; color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));">.</span></p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p><p><br></p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [5, 8, 9, 22],
      },
      {
        name: 'Comments_Fiche_RTM',
        subject: 'Nouveau commentaire fiche RTM "{{brand}}"',
        event: 'Nouveau commentaire fiche RTM',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Vous avez reçu un nouveau commentaire de {{creator}} sur la fiche RTM pour : {{brand}}.</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [3, 8],
      },
      {
        name: 'Comments_PV_Livraison',
        subject: 'Nouveau commentaire PV de Livraison "{{brand}}"',
        event: 'Nouveau commentaire PV de Livraison',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Vous avez reçu un nouveau commentaire de {{creator}} sur le PV de Livraison pour : {{brand}}.</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p><p><br></p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [6],
      },
      {
        name: 'Comments_OIP',
        subject: 'Nouveau commentaire OIP "{{brand}}"',
        event: 'Nouveau commentaire OIP',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Vous avez reçu un nouveau commentaire de {{creator}}  sur l\'OIP  pour : {{brand}}.</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [9],
      },
      {
        name: 'confirm_contract_SP',
        subject: 'Contract signe disponible "{{brand}}"',
        event: 'Nouveau document disponible',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Un nouveau contract signe&nbsp;est disponible.</p><p>Veuillez vous vérifier la pièce jointe où vouz connecter pour la consulter</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [1, 11, 21],
      },
      {
        name: 'confirm_installation',
        subject: 'PV de livraison signe disponible "{{brand}}"',
        event: 'Nouveau document disponible',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Un PV de livraison signe est disponible.</p><p>Veuillez vous vérifier la pièce jointe où vous connectez  pour le consulter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [5, 1, 20],
      },
      {
        name: 'invoice_response',
        subject: 'Nouvelle facture disponible "{{brand}}"',
        event: 'Nouveau document disponible',
        department: 'General',
        message:
          '<h3>Nouveau document</h3><p>Bonjour,</p><p>Un nouveau document est disponible.</p><p>Veuillez vous connecter pour le consulter</p><p><a href="https://v2.squarefeet.cloud" rel="noopener noreferrer" target="_blank">v2.squarefeet.cloud</a></p><p>Si vous avez besoin d\'aide, n\'hésitez pas à nous contacter.</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [1, 11, 13, 21],
      },
      {
        name: 'new_quote_to_validate',
        subject: 'Nouveau devis en attente de validation "{{brand}}"',
        event: 'Nouveau devis en attente de validation ',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Un nouveau devis est en attente de validation:</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [9],
      },
      {
        name: 'quote_validated',
        subject: '{{retailCenterName}} : Validation du devis',
        event: 'Validation du devis "{{brand}}"',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>{{creator}} a bien validé le devis  relative au client {{brand}}.</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [1, 14],
      },
      {
        name: 'new_oip_to_validate',
        subject: 'Nouvelle OIP en attente de validation "{{brand}}"',
        event: 'Nouvelle OIP en attente de validation ',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Un nouveau OIP est en attente de validation:</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [9],
      },
      {
        name: 'leasing_form_lt_validated',
        subject: 'Validation fiche de com "{{brand}}"',
        event: 'Validation fiche de com',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>{{creator}} a bien validé la fiche de com relative au client "{{brand}}".</p><p>Vous pouvez la consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [],
      },
      {
        name: 'RTM_form_validated',
        subject: 'Validation fiche RTM "{{brand}}"',
        event: 'Validation RTM',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>{{creator}} a bien validé la fiche RTM relative au client {{brand}}.</p><p>Vous pouvez la consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [],
      },
      {
        name: 'new_media_to_validate',
        subject: 'Media en attente de validation "{{brand}}"',
        event: 'Media en attente de validation ',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>Media est en attente de validation:</p><p>Veuillez vous connecter pour la consulter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p><p><br></p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [15],
      },
      {
        name: 'OIP_Validated',
        subject: 'Validation OIP "{{brand}}"',
        event: 'Validation OIP',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>{{creator}} a bien validé l\'OIP relative au client {{brand}}.</p><p>Vous pouvez le consulter en cliquant sur <a href="{{documentLink}}" rel="noopener noreferrer" target="_blank">ce lien</a>.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [],
      },
      {
        name: 'media_validated',
        subject: 'Validation du media "{{brand}}"',
        event: 'Validation media',
        department: 'General',
        message:
          '<p>Bonjour,</p><p>{{creator}} a bien validé le media  relative au client {{brand}}.</p><p>Vous pouvez vous connecter pour la consulter.</p><p><strong>Détails: {{retailCenter}}</strong></p><p><br></p><h3><strong>{{signature}}</strong></h3><p><strong>{{commercialFullName}}</strong></p><p>{{commercialJobTitle}}</p><p>{{commercialMobilePhone}}</p>',
        emailTemplateId: 1,
        toProspect: false,
        toSender: true,
        tos: [1, 14],
      },
    ];

    for (const template of templates) {
      await createTemplate(template);
    }
  }
  createAllTemplates();
}
