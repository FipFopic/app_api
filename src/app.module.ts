import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common'

import { ConnectTimeoutMiddleware } from './utils/middlewares/connect-timeout.middleware'

@Module({
  imports: [],
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
