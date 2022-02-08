import { Gender } from "../../gender.enum";
import { Nationality } from "../../models/nationality.model";
import { Paginate } from "../../models/paginate.model";
import { PhoneNumber } from "../../models/phone-number.model";

export interface SearchUserFilter{
    name?: string
    mobile?: PhoneNumber
    nationality?: Nationality
    gender?: Gender
    paginate?: Paginate
}