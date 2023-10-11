import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {FrogsModule} from "./frogs/frogs.module";
import {UsersModule} from "./users/users.module";
import {AuthModule} from "./auth/auth.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const hbs = require('hbs');
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));
  //hbs.registerHelper('times', function (n, block) {
  //let accum = '';
  //for (let i = 1; i <= n; ++i) accum += block.fn(i);
  //return accum;
  //});

  const config = new DocumentBuilder()
      .setTitle('Yaroslava Vdovina: Frogs')
      .setDescription('Frogs API description')
      .setVersion('1.0')
      .addTag("auth")
      .addTag("users")
      .addBearerAuth()
      .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [FrogsModule, UsersModule, AuthModule],
  });
  SwaggerModule.setup('api', app, document);

  const port = app.get(ConfigService).get<number>('PORT') || 12345;
  await app.listen(port);
}

bootstrap();

