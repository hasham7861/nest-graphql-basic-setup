import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Author } from "./author.object";
import { AuthorService } from "./author.service";

@Resolver( of => {
    return Author;
})
export class AuthorQueryResolver {

    constructor(
        private authorService: AuthorService
    ){ }

    @Query(returns => Author, {name: 'author'})
    async getAuthor(
        @Args('id', {type: () => Int, nullable: false }) id: number,
    ){

        const author = await this.authorService.findById(id)
        return author
    }

}