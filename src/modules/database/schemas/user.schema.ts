import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

import { UserDetails } from './user-details.schema'

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  FROZEN = 'FROZEN',
  BLOCKED = 'BLOCKED'
}

@Schema({
  collection: 'users'
})
export class User {
  @Prop({
    name: 'email',
    required: true,
    unique: true,
    trim: true
  })
  email: string

  @Prop({
    name: 'password',
    required: true,
    trim: true
  })
  password: string

  @Prop({
    name: 'is_confirmed',
    default: false
  })
  isConfirmed: boolean

  @Prop({
    name: 'is_temp_password',
    default: false
  })
  isTempPassword: boolean

  @Prop({
    name: 'status',
    enum: UserStatus,
    default: UserStatus.ACTIVE
  })
  status: UserStatus

  @Prop({
    type: UserDetails,
    ref: UserDetails.name
  })
  details: UserDetails
}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
