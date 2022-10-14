import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name)

  constructor(

  ) {
  }

  public async validateUser(email: string, password: string) {
    // const user =
  }
}
