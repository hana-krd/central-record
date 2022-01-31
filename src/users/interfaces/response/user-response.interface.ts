import { PhoneNumber } from "../../models/phone-number.model";

export interface UserResponse{
    _id: string,
    name: string,
    mobile: PhoneNumber
}
