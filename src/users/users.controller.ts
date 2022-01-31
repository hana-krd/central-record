import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateDoctor } from './interfaces/request/create-doctor.interface';
import { CreateUser } from './interfaces/request/create-user.interface';
import { SearchUserFilter } from './interfaces/request/search-user-filter.interface';
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
  
    @GrpcMethod('UserService', 'FindAll')
    async findAll(
      data: SearchUserFilter,
      metadata: Metadata,
      call: ServerUnaryCall<any, any>): Promise<UserResponse[]> {
      return await this.userService.findAll(data);
    }
  
  
    @GrpcMethod('DoctorService', 'Create')
    async createDoctor(
      data: CreateDoctor,
      metadata: Metadata,
      call: ServerUnaryCall<any, any>): Promise<UserResponse> {
      return await this.userService.createDoctor(data);
    }
}
