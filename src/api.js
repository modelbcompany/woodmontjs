// Packages
import feathers from '@feathersjs/client'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'
import Logger from './logger'

// Services
import services from './services'

// Hooks
import { useRentCafeAPI } from './hooks/api'

// Utilities
import { getFeathersError } from './utils/error.utils'

/**
 * @file API Initialization
 * @module api
 */

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

// Initialize Feathers client
let WoodmontAPI = feathers()

// Use API configuration
for (const key in FeathersAppConfiguration) {
  WoodmontAPI.set(key, FeathersAppConfiguration[key])
}

// Configure library services (see `services/index.js`)
WoodmontAPI = WoodmontAPI.configure(services).setup()

if (!WoodmontAPI) {
  Logger.error(ServicesInitializationError)
  throw ServicesInitializationError
}

// Configure hooks
WoodmontAPI.hooks({
  before: {
    all: [
      // Update query authentication and request type based on service
      context => useRentCafeAPI(context)
    ]
  }
})

// Debug fully configured Feathers app
Logger.debug('Configured WoodmontAPI =>', WoodmontAPI)

export default WoodmontAPI
