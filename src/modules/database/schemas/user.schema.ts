import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Exclude } from 'class-transformer'
import { Document } from 'mongoose'

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
  @Exclude()
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

}

export type UserDocument = User & Document
export const UserSchema = SchemaFactory.createForClass(User)
