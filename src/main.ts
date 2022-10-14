import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as morgan from 'morgan'
import * as cookieParser from 'cookie-parser'
import { ApplicationModule } from './app.module'
import { config } from './config/config'
import { logger } from './utils/logger/logger'
import { swagger } from './utils/swagger/swagger'

const start = async () => {
  try {
    const PORT = config.app.PORT
    const prefix = config.app.API_PREFIX
    const appOptions = config.app.getApplicationOptions()
    const app = await NestFactory.create(ApplicationModule, appOptions)

    app.useGlobalPipes(new ValidationPipe())
    app.setGlobalPrefix(prefix)
    app.use(morgan('tiny'))
    app.use(cookieParser())

    swagger.createSwaggerDocs(app)

    await app.listen(PORT, () => {
      logger.info(`Server has been started on port ${PORT}`)
    })
  } catch (e: any) {
    logger.error(`Server run error: ${e}`)
  }
}

start().then()
