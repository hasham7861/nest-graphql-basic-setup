import { Query, Resolver } from '@nestjs/graphql';
import { GraphQLString } from 'graphql';
import { Post } from './post.object';
import PostService from './post.service';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private postService: PostService) {}
  @Query(() => GraphQLString)
  post(): string {
    return this.postService.get();
  }
}
