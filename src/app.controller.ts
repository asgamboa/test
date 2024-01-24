import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Query('firstSensor') firstSensor: string,
    @Query('secondSensor') secondSensor: string,
  ) {
    console.log('firstSensor value: ', firstSensor);
    console.log('secondSensor value: ', secondSensor);
    return this.appService.getHello();
  }

  @Post()
  logAndReturn(@Body() body: any): any {
    // Log the received body
    console.log('Received body:', body);

    // Return the body in the response
    return body;
  }
}
