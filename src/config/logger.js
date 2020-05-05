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
  prettyPrint: {
    colorize: true,
    errorProps: 'className,code,data,errors,message,name',
    levelFirst: true,
    translateTime: true
  }
})

Logger.info('Initialized Pino logger =>', Logger)

export default Logger
