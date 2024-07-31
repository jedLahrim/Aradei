import axios from 'axios';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import MAILJET_EMAILS from '../enum/mailjetEmail';

dotenv.config();

const { EMAIL_FROM, EMAIL_FROM_NAME, MAILJET_API_KEY, MAILJET_API_SECRET } =
  process.env;

Injectable();
export class MailjetApiClient {
  constructor() { }

  /**
   * @param {number} templateId
   * @param {string[]} to
   * @param {string} subject
   * @param {object} templateData
   * @returns {Promise<boolean>}
   */
  async sendTemplatingEmail(
    emailMessages: any,
    projectName?,
  ): Promise<boolean> {
    try {
      const Messages: any[] = emailMessages.map((emailMessage) => {
        const mailjetEmail = MAILJET_EMAILS['fr'][emailMessage.emailId];
        const emailSubject = mailjetEmail.subject;

        const recipients = Array.isArray(emailMessage.to)
          ? emailMessage.to
          : [emailMessage.to];

        return {
          From: {
            Email: EMAIL_FROM,
            Name: EMAIL_FROM_NAME,
          },
          To: recipients.map((recipient) => ({
            Email: recipient.email,
            Name: recipient.name,
          })),

          Subject: emailSubject,
          TemplateID: mailjetEmail.templateId,
          TemplateLanguage: true,
          Variables: emailMessage.templateData,
        };
      });

      const { data: response } = await axios.post(
        'https://api.mailjet.com/v3.1/send',
        { Messages },
        {
          auth: {
            username: MAILJET_API_KEY,
            password: MAILJET_API_SECRET,
          },
        },
      );

    } catch (error) {
      console.error(error);
    }

    return true;
  }
}
