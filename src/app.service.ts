import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMedia(): any[] {
    return [
      { id: 1, title: 'Media 1' },
      { id: 2, title: 'Media 2' },
    ];
  }
}
