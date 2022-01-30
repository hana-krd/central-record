import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById } from './interfaces/user-by-id.interface';
import { User } from './interfaces/User.interface';

@Controller()
export class UsersController {
    
    @GrpcMethod('UserService', 'FindOne')
    findOne(data: UserById, metadata: Metadata, call: ServerUnaryCall<any, any>): User {
      const items = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Doe' },
      ];
      return items.find(({ id }) => id === data.id);
    }
}
