import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
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
}

export const UserSchema = SchemaFactory.createForClass(User);