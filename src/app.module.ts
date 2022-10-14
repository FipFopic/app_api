import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    const middlewares = []

    consumer
      .apply(...middlewares)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
