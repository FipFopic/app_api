import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({
  collection: 'user_details'
})
export class UserDetails {
  @Prop({
    name: 'first_name'
  })
  firstName: string

  @Prop({
    name: 'avatar_src'
  })
  avatarSrc: string
}

export type UserDetailsDocument = UserDetails & Document
export const UserDetailsSchema = SchemaFactory.createForClass(UserDetails)
