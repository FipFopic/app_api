import * as dotenv from 'dotenv'

dotenv.config({ path: `.env` })

export const env = {
  server: {
    ENV_MODE: process.env.NODE_ENV || 'DEVELOPMENT',
    PORT: Number(process.env.PORT) || 8080,
    API_PREFIX: 'api/v1',
    SECRET_ACCESS_KEY_JWT_TOKEN:
      process.env.SECRET_ACCESS_KEY_JWT_TOKEN || 'secret',
    SECRET_REFRESH_KEY_JWT_TOKEN:
      process.env.SECRET_REFRESH_KEY_JWT_TOKEN || 'secret',
    PASSWORD_ROUNDS: 10
  },
  swagger: {
    SWAGGER_TITLE: 'App API',
    SWAGGER_VERSION: '1.0.0',
    SWAGGER_PREFIX: 'docs/v1'
  }
}
