import { Injectable } from '@nestjs/common';


function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    // await delay(2000);
    return 'Hello World!';
  }
}
