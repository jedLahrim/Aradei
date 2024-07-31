import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// import { Public } from './public.decorator'
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { LoginDto } from './dto/login.dto';
import { AuthPayload } from '../interfaces/authPayload';
import { NestLogger } from '../logger.service';
import { jwtConstants } from './constants';
import bcrypt from 'bcrypt';
import { SendResetDto } from './dto/send-reset.dto';
import { UserProfile } from '../user/entities/userProfile.entity';
import { ERR_NOT_FOUND_USER } from '../common/error/error-code';
import { InjectMailgun } from '@mindik/mailgun-nestjs';
import * as fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import { ClientManager } from '../prisma/ClientManager';
import * as process from 'process';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private logger: NestLogger,
    private jwtService: JwtService,
    @InjectMailgun() private readonly mg,
  ) {}

  // @Public()

  async checkToken(token: string) {
    const tokenInfos = this.jwtService.verify(token, {
      secret: jwtConstants.secret,
    });

    const { email } = tokenInfos;
    const LoggedInUser = await this.prisma.userProfile.findUnique({
      where: {
        email: email,
      },
    });

    if (!LoggedInUser)
      throw new HttpException(
        'Check your credentials',
        HttpStatus.UNAUTHORIZED,
      );

    const payload = {
      user: LoggedInUser,
    };

    return payload;
  }

  async userFilePath() {
    return 'Error';
  }

  async login(userLoginInput: LoginDto): Promise<AuthPayload> {
    // this.logger.info(userLoginInput);

    const LoggedInUser = await this.prisma.userProfile.findUnique({
      where: {
        email: userLoginInput.email,
      },
      include: {
        role: {
          include: {
            Permissions: true,
          },
        },
      },
    });

    if (!LoggedInUser)
      throw new HttpException('Check your credentials', HttpStatus.FORBIDDEN);
    if (LoggedInUser.status === 0)
      throw new HttpException(
        'Your account is suspended',
        HttpStatus.FORBIDDEN,
      );

    const checkPassword = bcrypt.compareSync(
      userLoginInput.password,
      LoggedInUser.password,
    );

    if (!checkPassword)
      throw new HttpException('Check your credentials', HttpStatus.FORBIDDEN);

    const payload = {
      user: LoggedInUser,
      token: this._getToken(LoggedInUser),
    };

    // this.logger.info(payload);
    return payload;
  }

  async sendResetPassword(data: SendResetDto): Promise<AuthPayload> {
    const { email } = data;
    const foundedUser = await this.prisma.userProfile.findUnique({
      where: { email: email },
    });
    if (!foundedUser) throw new NotFoundException(ERR_NOT_FOUND_USER);
    const payload = {
      user: foundedUser,
      token: this._getToken(foundedUser),
    };
    // Compile the template
    const compiledTemplate = await this._getCompiledTemplate();
    // Prepare the data for the template
    await this._sendResetMail(foundedUser, compiledTemplate);
    return payload;
  }

  private _getToken(user: UserProfile): string {
    const tokenInfos = {
      email: user.email,
      id: user.id,
      level: user.roleId,
      status: user.status,
      // companyId: LoggedInUser.companyId
    };
    return this.jwtService.sign(tokenInfos, {
      expiresIn: '14d',
      secret: jwtConstants.secret,
    });
  }

  private async _sendResetMail(
    user: UserProfile,
    compiledTemplate: ReturnType<(typeof handlebars)['compile']>,
  ) {
    const emailTemplate = await this.prisma.emailTemplate.findFirst({
      where: {
        name: ClientManager.getClient().name,
      },
    });
    // const messageNotification = await this.prisma.messageNotification.findFirst(
    //   {
    //     where: {
    //       name: 'new_user',
    //     },
    //   },
    // );
    const emailFromName = ClientManager.getClient().emailFromName;
    const emailFrom = ClientManager.getClient().emailFrom;
    let frontUrl = process.env.FRONT_URL;
    if (frontUrl.includes('"')) {
      frontUrl = frontUrl.replace(/"/g, '');
    }
    const url = `${frontUrl}/#/auth/new-password?id=${user.id}`;
    const emailData = {
      username: user.name,
      resetUrl: url,
      // expirationTime: 24, // or whatever your expiration time is in hours
      headerImage: emailTemplate.headerImage,
      footerImage: emailTemplate.footerImage,
      signature: emailTemplate.signature,
      linkWebsite: emailTemplate.linkWebsite,
    };
    // Generate the HTML for the email
    const emailHtml = compiledTemplate(emailData);
    await this.mg.messages.create('squarefeet.cloud', {
      from: `${emailFromName} <${emailFrom}>`,
      to: user?.email,
      cc: 'malaouifr@gmail.com',
      subject: 'Réinitialiser votre mot de passe',
      html: emailHtml,
    });
  }

  private async _getCompiledTemplate() {
    const resetPasswordTemplate = fs.readFileSync(
      path.join(__dirname, '../../../templates/auth/reset-password.hbs'),
      'utf-8',
    );
    return handlebars.compile(resetPasswordTemplate);
  }
}
