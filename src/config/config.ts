import { env } from './env'
import { AppConfig } from './types/AppConfig'
import { DatabaseConfig } from './types/DatabaseConfig'
import { SwaggerConfig } from './types/SwaggerConfig'

class Config {
  readonly app: AppConfig
  readonly swagger: SwaggerConfig
  readonly database: DatabaseConfig

  constructor() {
    this.app = new AppConfig(env.server)
    this.swagger = new SwaggerConfig(env.swagger)
    this.database = new DatabaseConfig(env.database)
  }
}

export const config = new Config()
