import { BaseConfig } from './BaseConfig'

export class DatabaseConfig extends BaseConfig {
  private readonly mongoURI: string

  constructor(config) {
    super(config)
  }

  getMongoURI(): string {
    return this.mongoURI
  }
}
