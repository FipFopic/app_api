import { HttpException, HttpStatus } from '@nestjs/common'

class ApiExceptionClass {
  Success(): HttpException {
    return new HttpException({ message: 'Success' }, HttpStatus.OK)
  }

  Error(): HttpException {
    return new HttpException({ message: 'Fail' }, HttpStatus.BAD_REQUEST)
  }

  Forbidden(): HttpException {
    return new HttpException({ message: 'Forbidden' }, HttpStatus.FORBIDDEN)
  }

  NotFound(): HttpException {
    return new HttpException({ message: 'NotFound' }, HttpStatus.BAD_REQUEST)
  }

  Unauthorized(): HttpException {
    return new HttpException(
      { message: 'Unauthorized' },
      HttpStatus.UNAUTHORIZED
    )
  }
}

const ApiException = new ApiExceptionClass()
