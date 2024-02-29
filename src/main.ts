import { NestFactory } from '@nestjs/core';
import { HttpStatus, ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
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

  // API documentation generated with Swagger
  const SwaggerOptions = new DocumentBuilder()
    .setTitle('Comic Book Characters Api')
    .setDescription('A api to manipulate data about comic book characters.')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' }) // For JWT authentication
    .addTag(
      'alignment',
      'Endpoints to manipulate possible alignments for the character, like good or evil, for example.',
    )
    .addTag('auth', 'Endpoints to manipulate API authentication.')
    .addTag('character', 'Endpoints to manipulate character data.')
    .addTag('character ally', 'Endpoints to manipulate data related to the connection between character and ally.')
    .addTag('character enemy', 'Endpoints to manipulate data related to the connection between character and enemy.')
    .addTag('character power', 'Endpoints to manipulate data related to the connection between character and power.')
    .addTag(
      'character relative',
      'Endpoints to manipulate data related to the connection between character and relative.',
    )
    .addTag('character team', 'Endpoints to manipulate data related to the connection between character and team.')
    .addTag('healthcheck', 'Endpoints related to the healthcheck of the application.')
    .addTag(
      'living status',
      'Endpoints to manipulate possible living statuses for the character, like alive or deceased, for example.',
    )
    .addTag(
      'marital status',
      'Endpoints to manipulate possible marital statuses for the character, like single or married, for example.',
    )
    .addTag('power', 'Endpoints to manipulate power data.')
    .addTag(
      'relationship type',
      'Endpoints to manipulate possible relationship types for the character, like father or brother, for example.',
    )
    .addTag('team', 'Endpoints to manipulate team data.')
    .addTag('user', 'Endpoints to manipulate user data.')
    .build();
  const SwaggerDocument = SwaggerModule.createDocument(app, SwaggerOptions);

  SwaggerModule.setup('api-docs', app, SwaggerDocument, {
    customCss: '.swagger-ui .topbar { display: none }', // Custom CSS for the documentation webpage
    customSiteTitle: 'API Documentation - Comic Book Characters', // Custom title for the documentation webpage
    swaggerOptions: {
      tagsSorter: 'alpha', // To ordering tags on ASC order
      operationsSorter: 'alpha', // To ordering tags on ASC order
    },
  });

  // Application port
  await app.listen(appPort, () => {
    // Adding colors to startup message with control characters ( \x1b ) and ANSI colors
    console.info(`🚀 \x1b[96m Server ready at:\x1b[0m \x1b[95m ${appFullBaseUrl} \x1b[0m`);
  });
}

bootstrap();
