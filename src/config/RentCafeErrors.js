/**
 * @file RENTCafé Error Messages
 * @module config/RentCafeErrors
 */

/**
 * @typedef {FeathersErrorData}
 * @property {string} className
 * @property {number} code
 * @param {object} data
 * @param {object} data.errors
 * @property {string} message
 * @property {string} name
 */

/**
 * If a request to either of the RENTCafé APIs fails, they will return an error
 * code and a message.
 *
 * @enum {object}
 * @namespace RentCafeErrors
 */
export const RentCafeErrors = {
  InvalidCredentials: {
    message: 'Invalid Credentials',
    data: {
      code: '1000'
    },
    status: 401
  },
  InvalidCompany: {
    message: 'Invalid Company',
    data: {
      code: '1010'
    },
    status: 401
  },
  InvalidProperty: {
    message: 'Invalid Property',
    data: {
      code: '1020'
    },
    status: 400
  },
  InvalidRequestType: {
    message: 'Invalid Request Type',
    data: {
      code: '1030'
    },
    status: 400
  },
  InvalidUser: {
    message: 'Invalid User',
    data: {
      code: '1040'
    },
    status: 400
  },
  NoData: {
    message: 'No data found for company / property',
    data: {
      code: '1050'
    },
    status: 404
  },
  InactiveProperty: {
    message: 'No active property found for the property',
    data: {
      code: '1060'
    },
    status: 404
  },
  PropertyNotConfigured: {
    message: 'Property not configured for API',
    data: {
      code: '1060'
    },
    status: 501
  },
  OtherError: {
    message: 'Other Error',
    data: {
      code: '1100'
    },
    status: 500
  }
}

export default RentCafeErrors
