import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('main')
  @Render('index.hbs')
  root() {
    return {
      title: 'Главная страница',
    };
  }

  @Get('main')
  @Render('MyFrogs.hbs')
  root() {
    return {
      title: 'Мои лягушки',
    };
  }

  @Get('main')
  @Render('ExtinctFrogs.hbs')
  root() {
    return {
      title: 'Вымершие',
    };
  }

  @Get('main')
  @Render('Profile.hbs')
  root() {
    return {
      title: 'Профиль',
    };
  }
}
