/**
 * @file Add Rent Café credentials and constants to context
 * @module hooks/api/useRentCafeAPI
 * @todo Update documentation
 */

// Get environment variables
const { apiToken, companyCode, marketingAPIKey, propertyId } = process.env

/**
 * Authenticates @param context.params.query .
 *
 * The type of authentication to be used will be determined by the value of
 * @param context.path .
 *
 * @param {object} context - Service call information
 * @param {Object} context.app - Feathers application object
 * @param {*} context.data - Data of a `create`, `update` and `patch` service
 * method call
 * @param {object | undefined} context.dispatch - Result of the successful
 * service method call. It is only available in `after` hooks. This value can
 * also be set in a `before` hook to skip the actual service method (database)
 * call, or an `error` hook to swallow the error and return a result instead
 * @param {object | undefined} context.error - Error object that was thrown in a
 * failed method call. It is only available in `error` hooks
 * @param {string | undefined} context.id - ID for a `get`, `remove`, `update`
 * and `patch` service method call. For `remove`, `update` and `patch`, this
 * value can also be `null` when modifying multiple entries. Otherwise, it'll be
 * `undefined`
 * @param {string} context.method - Service method name
 * @param {object} context.params - Service method parameters
 * @param {string} context.path - Service name (or path) w/o slashes
 * @param {object | undefined} context.result - Result of the successful service
 * method call. It is only available in `after` hooks. This value can also be
 * set in a `before` hook to skip the actual service method (database) call, or
 * an `error` hook to swallow the error and return a result instead
 * @param {Object} context.service - Service hook currently runs on
 * @param {string} context.statusCode - HTTP status code
 * @param {string} context.type - Hook type (before | after | error)
 * @returns {object}
 */
export const useRentCafeAPI = ({ params, path, ...rest }) => {
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

export default useRentCafeAPI
