import { Injectable } from "@nestjs/common";
import { BaseSerializer } from "../../shared/interfaces/base-serializer.interface";
import { UserResponse } from "../interfaces/response/user-response.interface";
import { User } from "../schemas/user.schema";

@Injectable()
export class UserSerializer implements BaseSerializer<User, UserResponse> {
    serialize(inData: User): UserResponse {
        return inData;
    }
    serializeList(inData: User[]): UserResponse[] {
        return inData.map(user => this.serialize(user));
    } 
}