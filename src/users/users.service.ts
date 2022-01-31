import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from './interfaces/request/create-user.interface';
import { UserResponse } from './interfaces/response/user-response.interface';
import { User, UserDocument } from './schemas/user.schema';
import { UserSerializer } from './user.serializer';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private userSerialize: UserSerializer
    ) { }
    
    async create(createUserDto: CreateUser): Promise<UserResponse> {
        const createdUser = await this.userModel.create(createUserDto);
        return this.userSerialize.serialize(createdUser);
    }
}
