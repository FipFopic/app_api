import { Body, Controller, Post } from '@nestjs/common'

import { LoginDto } from '../dto'
import { AuthService } from '../services'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() body: LoginDto): Promise<any> {
    const { login, password } = body

    const user = await this.authService.validateUser(login, password)

    // Generate tokens
    // const tokens =
  }
}
