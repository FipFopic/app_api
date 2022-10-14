import { env } from './env'
import { AppConfig } from './types/AppConfig'
import { SwaggerConfig } from './types/SwaggerConfig'

class Config {
  readonly app: AppConfig
  readonly swagger: SwaggerConfig

  constructor() {
    this.app = new AppConfig(env.server)
    this.swagger = new SwaggerConfig(env.swagger)
  }
}

export const config = new Config()
