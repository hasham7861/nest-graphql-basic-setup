import { Module } from '@nestjs/common';
import { ApiModule } from './graphql/api.module';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
