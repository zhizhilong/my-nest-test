import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return [
      { title: 'news111' },
      { title: 'news222' },
      { title: 'news333' },
      { title: 'news444' },
      { title: 'news555' },
    ];
  }
}
