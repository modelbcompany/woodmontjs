/**
 * @file RENTCafé Error Messages
 * @module config/RentCafeErrors
 *
 * @todo Update documentation
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
  APIKey: {
    message: 'Invalid Credentials',
    data: {
      code: '1000'
    },
    status: 401
  },
  MaximumEvents: {
    message: 'Can not create appointment since this slot is already booked for maximum events',
    data: {
      code: '200'
    },
    status: 400
  },
  PropertyIdOrCodeRequired: {
    message: 'Property ID or Code is required',
    data: {
      code: '300'
    },
    status: 400
  },
  MissingRequiredFields: {
    message: 'Incorrect data',
    data: {
      code: '800'
    },
    status: 400
  },
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
      code: '1070'
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

for (const key in RentCafeErrors) {
  const { data: { code }, ...rest } = RentCafeErrors[key]

  RentCafeErrors[key] = {
    ...rest,
    data: {
      code,
      docs: (JSON.parse(code) > 1000)
        ? 'https://woodmontjs.modelb.now.sh/docs/rentcafe/web'
        : 'https://woodmontjs.modelb.now.sh/docs/rentcafe/marketing'
    }
  }
}

export default RentCafeErrors
