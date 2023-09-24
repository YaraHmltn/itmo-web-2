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

  @Get('/MyFrogs')
  @Render('MyFrogs.hbs')
  MyFrogs() {
    return {
      title: 'Мои лягушки',
    };
  }

  @Get('ExtinctFrogs')
  @Render('ExtinctFrogs.hbs')
  ExtinctFrogs() {
    return {
      title: 'Вымершие',
    };
  }

  @Get('Profile')
  @Render('Profile.hbs')
  Profile() {
    return {
      title: 'Профиль',
    };
  }
}
