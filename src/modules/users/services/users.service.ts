import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import {
  User,
  UserDetails,
  UserDetailsDocument,
  UserDocument
} from 'src/modules/database'
import { CreateUserDto } from '../dto'

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name)

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(UserDetails.name)
    private readonly userDetailsModel: Model<UserDetailsDocument>
  ) {}

  public async createUser(userDto: CreateUserDto): Promise<UserDocument> {
    const newUser: UserDocument = new this.userModel(userDto)
    return newUser.save()
  }
}
