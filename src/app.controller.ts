import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Query('firstSensor') firstSensor: string,
    @Query('secondSensor') secondSensor: string,
  ): string {
    console.log('firstSensor value: ', firstSensor);
    console.log('secondSensor value: ', secondSensor);
    return this.appService.getHello();
  }
}
