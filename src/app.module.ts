import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { config } from './config/config'
import { AuthModule } from './modules/auth/auth.module'

import { ConnectTimeoutMiddleware } from './utils/middlewares/connect-timeout.middleware'

@Module({
  imports: [MongooseModule.forRoot(config.database.getMongoURI()), AuthModule],
  controllers: [],
  providers: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    ConnectTimeoutMiddleware.configure('900s')

    const middlewares = []

    consumer
      .apply(...middlewares)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
