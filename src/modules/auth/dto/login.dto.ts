import { IsNotEmpty, IsEmail, Matches } from 'class-validator'

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  login: string

  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
  password: string
}
