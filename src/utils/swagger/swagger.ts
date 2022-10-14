import { INestApplication } from '@nestjs/common'
import { SwaggerModule } from '@nestjs/swagger'
import { config } from '../../config/config'

class Swagger {
  public createSwaggerDocs(app: INestApplication): void {
    const options = config.swagger.getSwaggerOptions()
    const document = SwaggerModule.createDocument(app, options)

    SwaggerModule.setup(config.swagger.SWAGGER_PREFIX, app, document)
  }
}

export const swagger = new Swagger()
