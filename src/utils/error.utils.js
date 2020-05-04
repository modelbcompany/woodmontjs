// Packages
import {
  BadGateway, BadRequest, Conflict, Forbidden, GeneralError, LengthRequired, NotAuthenticated, NotFound, NotImplemented, PaymentError, MethodNotAllowed, NotAcceptable, Timeout, TooManyRequests, Unavailable, Unprocessable
} from '@feathersjs/errors'

// Utility Functions
import { isObject } from './validation.utils'

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
