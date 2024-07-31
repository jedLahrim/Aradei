import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
  });
  app.use(json({ limit: '50mb' }));
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT, () => {
    // console.log(`Listening to PORT ${process.env.PORT}`);
  });
}

bootstrap();
