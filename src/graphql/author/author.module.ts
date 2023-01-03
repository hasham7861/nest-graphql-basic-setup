import { Module } from "@nestjs/common";
import { AuthorQueryResolver } from "./author.query.resolver";
import { AuthorService } from "./author.service";

@Module({
    providers: [ AuthorService, AuthorQueryResolver],
})
export class AuthorModule {}