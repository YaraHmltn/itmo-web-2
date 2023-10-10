import { Controller, Get, Render, Post, UseInterceptors, Req, Res, } from '@nestjs/common';
import { AppService } from './app.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Controller()
export class AppController {
  private signed_in: boolean;
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index.hbs')
  root() {
    return {
      title: 'Главная страница',
    };
  }

  @Get('MyFrogs')
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

  @Post('auth/register')
  async register(@Req() req, @Res() res) {
    try {
      await firebase
          .auth()
          .createUserWithEmailAndPassword(req.body.email, req.body.password);
      return res.redirect('back');
    } catch (e) {
      console.log('Failed to register');
      return res.redirect('back');
    }
  }

  @Post('logout')
  async logout(@Req() req, @Res() res) {
    res.clearCookie('access_token');
    this.signed_in = false;
    return res.redirect('back');
  }
}


