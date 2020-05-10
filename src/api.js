// Packages
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
       * @param {object} param0 - Service call information
       * @param {object} param0.params - Service method parameters
       * @param {object} param0.params.query - Query parameters
       * @returns {object} Updated service context
       */
      ({ params: { query, ...params }, ...rest }) => ({
        ...rest,
        params: {
          ...params,
          query: isObject(query) || {}
        }
      }),

      /**
       * Authenticates the incoming request.
       *
       * If credentials are not defined in @param param0.params.authentication,
       * a `NotAuthenticated` error will be thrown.
       *
       * @param {object} param0 - Service call information
       * @param {object} param0.params - Service method parameters
       * @param {object} param0.params.authentication - RENTCafé API credentials
       * @param {object} param0.params.authentication.apiToken
       * @param {object} param0.params.authentication.companyCode
       * @param {object} param0.params.authentication.marketingAPIKey
       * @param {object} param0.params.authentication.propertyId
       * @returns {object} Updated context
       * @throws {FeathersError.NotAuthenticated}
       */
      ({
        params: { authentication, ...params },
        data,
        method,
        path,
        ...rest
      }) => {
        const authErrorMessages = {
          apiToken: 'Missing RENTCafé API token',
          companyCode: 'Missing company code',
          marketingAPIKey: 'Missing RENTCafé Marketing API key',
          propertyId: 'Missing property ID'
        }

        if (!authentication) {
          throw getFeathersError('Missing all RENTCafé API credentials', {
            data,
            params: { authentication, query: params.query },
            errors: { authentication: null },
            method,
            path
          }, 401)
        }

        Object.keys(authErrorMessages).forEach(key => {
          if (!authentication[key]) {
            throw getFeathersError(authErrorMessages[key], {
              data,
              params: { authentication, query: params.query },
              errors: { [key]: null },
              method,
              path
            }, 401)
          }
        })

        return {
          ...rest,
          params: { ...params, authentication },
          data,
          method,
          path
        }
      },

      /**
       * Attaches the RENTCafé API credentials to the incoming query based on
       * service path.
       *
       * @param {object} param0 - Service call information
       * @param {string} param0.path - Service initialization path (no slashes)
       * @param {object} param0.params - Service method parameters
       * @param {object} param0.params.authentication - RENTCafé API credentials
       * @param {object} param0.params.authentication.apiToken
       * @param {object} param0.params.authentication.companyCode
       * @param {object} param0.params.authentication.marketingAPIKey
       * @param {object} param0.params.authentication.propertyId
       * @param {object} param0.params.query - Query parameters
       * @returns {object} Updated context
       */
      ({ params, path, ...rest }) => {
        const {
          apiToken,
          companyCode,
          marketingAPIKey,
          propertyId
        } = params.authentication

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
          url = `https://marketingapi.rentcafe.com/marketingapi/api/appointments/${requestType}?companyCode=${companyCode}&marketingAPIKey=${marketingAPIKey}&propertyId=${propertyId}`
        }

        return { ...rest, path, params: { ...params, query, url } }
      }
    ]
  },

  error({ error, ...rest }) {
    Logger.error({ WoodmontAPI: error.toJSON ? error.toJSON() : error.message })

    return { error, ...rest }
  }
})

// Debug fully configured Feathers app
Logger.debug({ WoodmontAPI: WoodmontAPI._isSetup })

export default WoodmontAPI
