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
      ({ params, ...rest }) => ({
        ...rest,
        params: { ...params, query: isObject(params.query) || {} }
      }),

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
          apiToken,
          companyCode,
          marketingAPIKey,
          propertyId
        } = process.env

        if (path === 'apartments' || path === 'floorplans') {
          params.query = Object.assign(params.query, {
            requestType: path === 'apartments'
              ? 'apartmentAvailability' : 'floorPlan',
            apiToken,
            propertyId
          })
        } else if (path === 'scheduling') {
          params.query = Object.assign(params.query, {
            companyCode,
            marketingAPIKey,
            propertyId
          })
        }

        return { path, params, ...rest }
      },

      /**
       * Updates the value of @param context.params.url based on the value of
       * @param context.path and @param context.params.query .
       *
       * Our service methods will use @param context.params.url when
       * requesting the RENTCafé APIs.
       *
       * ! Our project uses Axios, allowing us to attach the search parameters
       * ! as an object, but the RENTCafé API has only successfully responded
       * ! when the credential query parameters were part of the URL string.
       * ! The latter is the current workaround for this issue.
       *
       * @param {object} context - Service call information
       * @param {string} context.path - Path service is initialized on
       * @param {object} context.params - Service method parameters
       * @param {object} context.params.query - Query parameters
       * @returns {object} Updated @param context
       */
      ({ path, params, ...rest }) => {
        const {
          apiToken,
          companyCode,
          marketingAPIKey,
          propertyId,
          requestType,
          ...query
        } = params.query

        let url = ''

        if (path !== 'scheduling') {
          url = `https://api.rentcafe.com/rentcafeapi.aspx?requestType=${requestType}&apiToken=${apiToken}&propertyId=${propertyId}`
        } else {
          url = `https://marketingapi.rentcafe.com/marketingapi/api/appointments/${requestType}&companyCode=${companyCode}&marketingAPIKey=${marketingAPIKey}`
        }

        return { ...rest, path, params: { ...params, query, url } }
      }
    ]
  }
})

// Debug fully configured Feathers app
Logger.debug({ WoodmontAPI: WoodmontAPI._isSetup })

export default WoodmontAPI
