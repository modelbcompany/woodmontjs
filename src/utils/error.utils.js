// Packages
import { errors } from '@feathersjs/client'

// Config
import RentCafeErrors from '../config/RentCafeErrors'
import Logger from '../logger'

// Utility Functions
import { isArray, isObject, isNumber } from './validation.utils'

// Imported constants
const {
  BadGateway, BadRequest, Conflict, Forbidden, GeneralError, LengthRequired, NotAuthenticated, NotFound, NotImplemented, PaymentError, MethodNotAllowed, NotAcceptable, Timeout, TooManyRequests, Unavailable, Unprocessable
} = errors

/**
 * @file Utility Functions - Error Handling
 * @module utils/error
 */

/**
 * Creates a new Feathers error based on the status argument.
 *
 * @param {Error | string | null} error - Error to transform or error message
 * @param {object} data - Additional error data
 * @param {object} data.errors - Typically validation errors or if you want to
 * group multiple errors together
 * @param {number} status - Error status code. Defaults to 500
 * @returns {FeathersError | undefined} Feathers error or undefined if unable to
 * convert error argument
 */
export const getFeathersError = (error, data, status = 500) => {
  if (!isObject(data)) data = {}
  if (!isNumber(status)) status = 500

  switch (status) {
    case 400:
      error = new BadRequest(error, data)
      break
    case 401:
      error = new NotAuthenticated(error, data)
      break
    case 402:
      error = new PaymentError(error, data)
      break
    case 403:
      error = new Forbidden(error, data)
      break
    case 404:
      error = new NotFound(error, data)
      break
    case 405:
      error = new MethodNotAllowed(error, data)
      break
    case 406:
      error = new NotAcceptable(error, data)
      break
    case 408:
      error = new Timeout(error, data)
      break
    case 409:
      error = new Conflict(error, data)
      break
    case 411:
      error = new LengthRequired(error, data)
      break
    case 422:
      error = new Unprocessable(error, data)
      break
    case 429:
      error = new TooManyRequests(error, data)
      break
    case 501:
      error = new NotImplemented(error, data)
      break
    case 502:
      error = new BadGateway(error, data)
      break
    case 503:
      error = new Unavailable(error, data)
      break
    default:
      error = new GeneralError(error, data)
  }

  return error
}

/**
 * Transform a RENTCafé API error into a @link FeathersError object.
 *
 * @param {object} param0 - RENTCafé error
 * @param {string| undefined} param0.Error - Web API error code
 * @param {number | undefined} param0.ErrorCode - Marketing API error code
 * @returns {FeathersError}
 * @throws {Error}
 */
export const handleRentCafeError = ({ Error: code, ErrorCode, ...rest }) => {
  if (!code) return rest

  const enumValue = Object.values(RentCafeErrors).find(value => {
    if ([code, ErrorCode].includes(value.data.code)) return value
  })

  if (!enumValue) {
    return getFeathersError(rest.message, { code: code || ErrorCode, ...rest })
  }

  return getFeathersError(...Object.values(enumValue))
}

/**
 * Axios interceptor for RENTCafé responses.
 * Used to check for an error from a RENTCafé response.
 *
 * @param {axios.Response} param0 - Axios Response object
 * @returns {*} Data if valid
 * @throws {FeathersError}
 */
export const interceptRentCafeResponse = ({ data, ...rest }) => {
  if (!data) return rest

  const marketing = data?.ErrorCode > 0
  const web = isArray(data) && data[0]?.Error

  if (marketing || web) {
    const err = handleRentCafeError(web ? data[0] : { Error: data.ErrorCode })

    Logger.error(rest)
    const { params, url } = rest.config
    err.data = Object.assign(err.data, { config: { params, url } })

    Logger.error({ interceptRentCafeResponse: err.message })
    throw err
  }

  return data
}
