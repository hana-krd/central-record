import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Gender } from "../gender.enum";
import { DoctorExpertise } from "../models/doctor-expertise.model";
import { Nationality } from "../models/nationality.model";
import { PhoneNumber } from "../models/phone-number.model";

export type UserDocument = User & Document;

@Schema({
    timestamps: true
})
export class User{

    _id;

    @Prop()
    name: string;

    @Prop()
    mobile: PhoneNumber;

    @Prop()
    nationality: Nationality;

    @Prop()
    expertise: DoctorExpertise;

    @Prop({
        type: String,
        required: false,
        enum: Object.values(Gender),
        default: Gender.UNKNOWN
    })
    gender: Gender;

    @Prop()
    birthday: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);