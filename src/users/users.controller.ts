import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateUser } from './interfaces/request/create-user.interface';
import { UserResponse } from './interfaces/response/user-response.interface';
import { UsersService } from './services/users.service';

@Controller()
export class UsersController {
  
  constructor(private userService: UsersService) { }

    @GrpcMethod('UserService', 'Create')
    async create(
      data: CreateUser,
      metadata: Metadata,
      call: ServerUnaryCall<any, any>): Promise<UserResponse> {
      return await this.userService.create(data);
    }
  
    /* @GrpcMethod('UserService', 'FindOne')
    findOne(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>): User {
      const items = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
      ];
      return items.find(({ id }) => id === data.id);
    } */
}
