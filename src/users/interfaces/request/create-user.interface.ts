import { Nationality } from "../../models/nationality.model";
import { PhoneNumber } from "../../models/phone-number.model";

export interface CreateUser {
    name: string
    mobile: PhoneNumber
    nationality: Nationality
}