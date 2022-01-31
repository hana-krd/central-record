import { DoctorExpertise } from "../../models/doctor-expertise.model";
import { Nationality } from "../../models/nationality.model";
import { PhoneNumber } from "../../models/phone-number.model";

export interface UserResponse{
    _id: string,
    name: string,
    mobile: PhoneNumber,
    nationality: Nationality,
    expertise?: DoctorExpertise
}
