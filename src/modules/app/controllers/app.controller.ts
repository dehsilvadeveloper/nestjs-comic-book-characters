import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get()
  getWelcome(): string {
    return 'Welcome to the comic book characters API!';
  }
}
