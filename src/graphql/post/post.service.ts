import { Injectable } from '@nestjs/common';

@Injectable()
export default class PostService {
  private readonly posts;

  get() {
    return 'post is not yet implemented thus returning this text';
  }
}
