import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthResolver } from './auth/auth.resolver';
import { FloorModule } from './floor/floor.module';
import { NestLogger } from './logger.service';
import { RetailCenterModule } from './retailCenter/retailCenter.module';
import { CompanyModule } from './company/company.module';
import { ContactModule } from './contact/contact.module';
// import { MailgunModule } from './mailgun/mailgun.module';
import { UnitModule } from './unit/unit.module';
import { BookingModule } from './booking/booking.module';
import { DocumentModule } from './document/document.module';
import { MailerModule } from './mailer/mailer.module';
// import { HistoryModule } from './history/history.module';
import { MailgunModule } from '@mindik/mailgun-nestjs';
// import { MailgunSendModule } from './mailgun/mailgun.module'
// import { ReportingModule } from './reporting/reporting.module';
import { BrandModule } from './brand/brand.module';
import { ValidationModule } from './validation/validation.module';
import { TalkModule } from './talk/talk.module';
import { ReportingModule } from './reporting/reporting.module';
import { CompanyGroupModule } from './companyGroup/group.module';
import { MixModule } from './mix/mix.module';
import { EmailNotificationModule } from './emailNotification/email.notification.module';
import { NotificationModule } from './notification/notification.module';
import { HistoryModule } from './history/history.module';
import { ForcastsModule } from './forecasts/forcasts.module';
import { PresentationsModule } from './presentations/presentations.module';
import { ClientModule } from './client/client.module';
import { PrismaModule } from './prisma.module';
import GraphQLJSON from 'graphql-type-json';
import { EmailModule } from './email/email.module';
import { PictureModule } from './pictures/pictures.module';
import { config } from 'dotenv';
import { PlanModule } from './upload/plan/plan.module';
import { FileModule } from './upload/file/file.module';
import { PicturesModule } from './upload/pictures/pictures.module';

config();
const { MAILGUN_API_KEY, MAILGUN_USER_NAME, MAILGUN_PUB_KEY } = process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../uploads'),
      serveRoot: '/uploads/',
      exclude: ['/api*'],
    }),
    MailgunModule.forRoot({
      username: MAILGUN_USER_NAME,
      key: MAILGUN_API_KEY,
      // public_key: MAILGUN_PUB_KEY,
      url: 'https://api.eu.mailgun.net/',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // path: '/v1',
      context: ({ req }) => {
        return { token: req.headers.authorization };
      },
      // csrfPrevention: true,
      cors: {
        origin: [process.env.ALLOWED_ORIGIN],
        credentials: true,
      },
      resolvers: { JSON: GraphQLJSON },
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    UserModule,
    MailerModule,
    EmailModule,
    AuthModule,
    CompanyModule,
    ContactModule,
    BrandModule,
    RetailCenterModule,
    FloorModule,
    UnitModule,
    BookingModule,
    DocumentModule,
    ValidationModule,
    TalkModule,
    HistoryModule,
    ReportingModule,
    CompanyGroupModule,
    MixModule,
    EmailNotificationModule,
    NotificationModule,
    ForcastsModule,
    PresentationsModule,
    PictureModule,
    ClientModule,
    PlanModule,
    FileModule,
    PicturesModule,
    PictureModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [
    NestLogger,
    UserResolver,
    UserService,
    PrismaService,
    JwtService,
    AuthService,
    AuthResolver,
  ],
})
export class AppModule {}
