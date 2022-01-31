import { DoctorExpertise } from "../../models/doctor-expertise.model";

export interface CreateDoctor{
    userId: string
    expertise: DoctorExpertise
}