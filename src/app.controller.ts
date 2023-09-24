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

  @Get('MyFrogs')
  @Render('MyFrogs.hbs')
  root() {
    return {
      title: 'Мои лягушки',
    };
  }

  @Get('ExtinctFrogs')
  @Render('ExtinctFrogs.hbs')
  root() {
    return {
      title: 'Вымершие',
    };
  }

  @Get('Profile')
  @Render('Profile.hbs')
  root() {
    return {
      title: 'Профиль',
    };
  }
}
