import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name)

  constructor() {}
}
