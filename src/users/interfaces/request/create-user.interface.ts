import { PhoneNumber } from "../../models/phone-number.model";

export interface CreateUser {
    name: string
    mobile: PhoneNumber
    nationality?: string
}