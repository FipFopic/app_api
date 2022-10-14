import { format, LoggerOptions, transports, createLogger } from 'winston'
import { existsSync, mkdirSync } from 'fs'
import 'winston-daily-rotate-file'
import { join } from 'path'
import { config } from '../../config/config'

const { combine, timestamp, printf, prettyPrint, colorize, json, errors } =
  format

const logDirectory = 'logs'
const filename = join(logDirectory, 'app-%DATE%.log')
const level = config.app.isProduction() ? 'error' : 'debug'

if (!existsSync(logDirectory)) {
  mkdirSync(logDirectory)
}

/**
 * Console log output format setting
 */
const getConsoleOutputFormat = () => {
  return combine(
    colorize(),
    prettyPrint(),
    json(),
    printf((info: any) => {
      return `${info.timestamp} ${info.level}: ${info.message}`
    })
  )
}

/**
 * Setting the file log output format
 */
const getFileOutputFormat = () => {
  return combine(
    printf((info: any) => {
      if (info.stack) {
        return `${info.timestamp} ${info.level} ${info.message} : ${info.stack}`
      }

      return `${info.timestamp} ${info.level} : ${info.message}`
    })
  )
}

const getLoggerOptions = (): LoggerOptions => ({
  level,
  exitOnError: false,
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true })
  ),
  transports: [
    // Console log output
    new transports.Console({
      handleExceptions: true,
      format: getConsoleOutputFormat()
    }),
    new transports.DailyRotateFile({
      handleExceptions: true,
      format: getFileOutputFormat(),
      filename
    })
  ]
})

const logger = createLogger(getLoggerOptions())

const stream = {
  write: (message: string) => {
    logger.info(message)
  }
}

export { logger, stream }
