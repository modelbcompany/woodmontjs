// Packages
import pino from 'pino'

/**
 * @file Pino Configuration
 * @module config/pino
 */

/**
 * Logger configuration
 *
 * @namespace {pino.Logger} Logger
 */
export const Logger = pino({
  browser: {
    asObject: true
  },
  level: 'debug',
  prettyPrint: {
    colorize: true,
    errorProps: 'className,code,data,errors,message,name',
    levelFirst: true,
    translateTime: true
  },
  translateTime: true
})

Logger.debug({ pino: true })

export default Logger
