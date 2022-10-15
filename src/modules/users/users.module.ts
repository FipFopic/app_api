import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User, UserDetails, UserDetailsSchema, UserSchema } from '../database'
import { UsersController } from './controllers'
import { UsersService } from './services'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserDetails.name, schema: UserDetailsSchema }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
