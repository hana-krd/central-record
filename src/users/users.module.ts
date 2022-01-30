import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../config/grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  providers: [UsersService],
  controllers:[UsersController]
})
export class UsersModule {}
