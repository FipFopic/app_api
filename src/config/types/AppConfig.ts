import { NestApplicationOptions } from '@nestjs/common'
import { BaseConfig } from './BaseConfig'

export class AppConfig extends BaseConfig {
  private readonly ENV_MODE: string
  readonly PORT: number
  readonly API_PREFIX: string
  readonly SECRET_ACCESS_KEY_JWT_TOKEN: string
  readonly SECRET_REFRESH_KEY_JWT_TOKEN: string
  readonly PASSWORD_ROUNDS: number
  constructor(config) {
    super(config)
  }

  public isProduction(): boolean {
    return this.ENV_MODE === 'PRODUCTION'
  }

  public getApplicationOptions(): NestApplicationOptions {
    if (this.isProduction()) {
      return {}
    }

    return { cors: true }
  }
}
