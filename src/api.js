// Packages
import feathers from '@feathersjs/client'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'
import Logger from './logger'

// Services
import services from './services'

// Utilities
import { getFeathersError } from './utils/error.utils'

/**
 * @file API Initialization
 * @module api
 */

// Initialize Feathers client
let WoodmontAPI = feathers()

// Use API configuration
for (const key in FeathersAppConfiguration) {
  WoodmontAPI.set(key, FeathersAppConfiguration[key])
}

// Configure library services (see `services/index.js`)
WoodmontAPI.configure(services)

/**
 * @constant {FeathersError} ServicesInitializationError
 * @property {string} className - 'unavailable'
 * @property {number} code - 503
 * @property {object} data
 * @property {object} data.FeathersAppConfiguration
 * @property {string} message - 'ERROR INITIALIZING SERVICES.'
 * @property {string} name - 'Unavailable'
 */
const ServicesInitializationError = Object.freeze(getFeathersError(
  'ERROR INITIALIZING SERVICES.', { FeathersAppConfiguration }, 503
))

try {
  // ! Initialize services
  WoodmontAPI = WoodmontAPI.setup()

  if (!WoodmontAPI) throw ServicesInitializationError
} catch (err) {
  err.message = `[woodmontjs]: ${err.message}`

  Logger.error(err)
  throw err
}

/** @todo Configure global hooks (see `hooks/api/globals.js`) */
WoodmontAPI.hooks({ before: {}, after: {}, error: {} })

// Debug fully configured Feathers app
Logger.debug('Configured WoodmontAPI =>', WoodmontAPI)

export default WoodmontAPI
