import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { filter } from 'rxjs';
import { CreateDoctor } from '../interfaces/request/create-doctor.interface';
import { CreateUser } from '../interfaces/request/create-user.interface';
import { SearchUserFilter } from '../interfaces/request/search-user-filter.interface';
import { UserResponse } from '../interfaces/response/user-response.interface';
import { User, UserDocument } from '../schemas/user.schema';
import { UserSerializer } from './user.serializer';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private userSerialize: UserSerializer
    ) { }
    
    async create(createUserDto: CreateUser): Promise<UserResponse> {

        const userExists = await this.findAll({
            nationality: createUserDto.nationality,
        });


        if (userExists && userExists.length) {
            return userExists[0];
        }

        const createdUser = await this.userModel.create(createUserDto);
        return this.userSerialize.serialize(createdUser);
    }

    async findAll(filters: SearchUserFilter): Promise<UserResponse[]> {
        const paginate = filters.paginate;

        const users = await this.userModel.find({
            $and: [
                filters.name ? { name: { $regex: filters.name, $options: 'i' } } : {},
                filters.nationality && filters.nationality.country ? { 'nationality.country': filters.nationality.country  } : {},
                filters.nationality && filters.nationality.nationalCode ? { 'nationality.nationalCode': filters.nationality.nationalCode  } : {},
                filters.nationality && filters.nationality.passportId ? { 'nationality.passportId': filters.nationality.passportId  } : {},
                filters.mobile && filters.mobile.countryCode ? { 'mobile.countryCode': filters.mobile.countryCode } : {},
                filters.mobile && filters.mobile.number ? { 'mobile.number': filters.mobile.number } : {},
            ]
        })
            .sort({createdAt: -1})
            .skip(paginate? paginate.count * paginate.page: 0)
            .limit(paginate? paginate.count: 10)
            .lean();

        return this.userSerialize.serializeList(users);
    }

    async createDoctor(data: CreateDoctor): Promise<UserResponse>{
        const updateUser = await this.userModel.findOneAndUpdate(
            {
                _id: data.userId
            },
            {
                expertise: data.expertise
            }
        ).lean();
        return this.userSerialize.serialize(updateUser);
    }
}
