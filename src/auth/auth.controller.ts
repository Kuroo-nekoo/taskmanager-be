import { LocalAuthGuard } from './local-auth.guard';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req) {
    return req.user;
  }
}
