// Packages
import feathers from '@feathersjs/client'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'
import Logger from './logger'

// Services
import services from './services'

// Utilities
import { getFeathersError, isObject } from './utils'

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
      /**
       * Sanitizes the incoming query.
       *
       * @param {object} context - Service call information
       * @param {object} context.params - Service method parameters
       * @param {object} params.params.query - Query parameters
       * @returns {object} Updated @param context
       */
      ({ params, ...rest }) => {
        params.query = isObject(params.query) || {}

        return {
          ...rest,
          params: { ...params, query: isObject(params.query) || {} }
        }
      },

      /**
       * Attaches the RENTCafé API credentials to the incoming query based on
       * service path.
       *
       * @param {object} context - Service call information
       * @param {object} context.params - Service method parameters
       * @param {object} params.params.query - Query parameters
       * @param {string} context.path - Service name (or path) w/o slashes
       * @returns {object} Updated @param context
       */
      ({ params, path, ...rest }) => {
        const {
          apiToken, companyCode, marketingAPIKey, propertyId
        } = process.env

        if (path === 'apartments' || path === 'floorplans') {
          params.query = Object.assign(params.query, {
            apiToken,
            propertyId,
            requestType: path === 'apartments'
              ? 'apartmentAvailability' : 'floorPlan'
          })
        } else if (path === 'scheduling') {
          params.query = Object.assign(params.query, {
            companyCode,
            marketingAPIKey,
            propertyId
          })
        }

        return { path, params, ...rest }
      }
    ]
  }
})

// Debug fully configured Feathers app
Logger.debug('Configured WoodmontAPI =>', WoodmontAPI)

export default WoodmontAPI
