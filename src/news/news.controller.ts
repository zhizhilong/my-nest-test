import { Controller, Get, Post, Query, Body } from '@nestjs/common';
@Controller('news')
export class NewsController {
  @Get()
  getAbout(@Query() query): string {
    console.log(query); //这里获取的就是所有的Get传值
    return '这是about';
  }
  @Get('list')
  getNews(@Query('id') query): string {
    console.log(query); //这里获取的就是Get传值里面的Id的值
    return '这是新闻';
  }
  @Post('doAdd')
  async addNews(@Body() newsData) {
    console.log(newsData);
    return '增加新闻';
  }
}
