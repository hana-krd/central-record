import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoOption } from './config/mongodb.options';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(mongoOption.uri),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
