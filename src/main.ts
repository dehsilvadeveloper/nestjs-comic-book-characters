import { NestFactory } from '@nestjs/core';
import { HttpStatus, ValidationPipe, VersioningType } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { AppModule } from '@modules/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Create application instance
  const app = await NestFactory.create(AppModule);

  // Preparing config service
  const configService = app.get<ConfigService>(ConfigService);

  // Getting app config data
  const appUrl: string = configService.getOrThrow<string>('app.http.url');
  const appPort: number = configService.getOrThrow<number>('app.http.port');
  const appPortExternal: number = configService.getOrThrow<number>('app.http.portExternal');
  const appGlobalPrefix: string = configService.getOrThrow<string>('app.globalPrefix');
  const appVersioningEnable: boolean = configService.getOrThrow<boolean>('app.versioning.enable');
  const appVersionPrefix: string = configService.getOrThrow<string>('app.versioning.prefix');
  const appVersion: string = configService.getOrThrow<string>('app.versioning.version');

  // Getting cors config data
  const corsEnabled: boolean = configService.getOrThrow<boolean>('cors.enabled');

  // Defining app full base url
  let appFullBaseUrl = `${appUrl}:${appPortExternal}/${appGlobalPrefix}`;

  // Enabling service container for custom validator constraint classes (class-validator)
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // API global prefix
  app.setGlobalPrefix(appGlobalPrefix);

  // API versioning
  if (appVersioningEnable) {
    app.enableVersioning({
      type: VersioningType.URI,
      prefix: appVersionPrefix,
      defaultVersion: appVersion,
    });

    // Complementing app full base url
    appFullBaseUrl = `${appFullBaseUrl}/${appVersionPrefix}${appVersion}`;
  }

  // Global validation pipeline
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Enable shutdown hook explicitly
  app.enableShutdownHooks();

  // Cors
  if (corsEnabled) {
    app.enableCors();
  }

  // Application port
  await app.listen(appPort, () => {
    console.info(`Server ready at: ${appFullBaseUrl}`);
  });
}

bootstrap();
