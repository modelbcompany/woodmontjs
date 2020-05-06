// Packages
import dotenv from 'dotenv'
import feathers from '@feathersjs/client'

// Config
import FeathersAppConfiguration from './config/FeathersAppConfiguration'
import Logger from './logger'

// Mixins
import * as mixins from './mixins'

// Services
import services from './services'

// Utilities
import { getFeathersError, isObject } from './utils'

/**
 * @file API Initialization
 * @module api
 */

// Configure environment variables
dotenv.config()

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

// ! Mixins have to be added before registering any services
WoodmontAPI.mixins.push(service => {
  for (const key in mixins) service[key] = mixins[key]
})

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

  /**
   * Checks if @param result is a RENTCafé error.
   *
   * The RentCafé APIs only returns 200 responses.
   * An error from the Web Service API will define the property `Error`.
   *
   * If @param context.result.Error is defined and a valid RENTCafé error code,
   * the value of @param context.error will be updated.
   *
   * @todo Handle Marketing API response format
   *
   * @param {object} context - Service call information
   * @param {object} context.result - Data from successful method call
   * @param {string | undefined} context.result.Error - RENTCafé error code
   * @returns {object} @param context
   */
  // after({ error, result, ...rest }) {
  //   const { Error: code } = result

  //   if (code) {
  //     error = rest.app.service().handleRentCafeError({ Error: code })
  //   }

  //   return { error, result, ...rest }
  // }
})

// Debug fully configured Feathers app
Logger.debug('Configured WoodmontAPI =>', WoodmontAPI)

export default WoodmontAPI
