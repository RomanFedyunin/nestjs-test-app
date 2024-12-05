import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IsString } from 'class-validator';

class SendFormInput {
  name: string;
  email: string;
  phone: string;
}

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Post('/create')
  sendForm(@Body() sendFormInput: SendFormInput) {
    console.log(sendFormInput.email);
    return 'Saved';
  }
}
