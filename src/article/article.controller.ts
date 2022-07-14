import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  index(): string {
    return '这是article里面的index';
  }
  @Get('add')
  add(): string {
    return '这是article里面的Add';
  }
}
