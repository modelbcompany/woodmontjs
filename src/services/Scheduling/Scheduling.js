// Config
import Logger from '../../logger'

/**
 * @file Service Object - Scheduling
 * @module services/Scheduling/Scheduling
 */

/**
 * Online scheduling service.
 *
 * @see {@link https://woodmontjs.modelb.now.sh/docs/rentcafe/marketing}
 *
 * @namespace Scheduling
 */
export const Scheduling = {
  /**
   * Special service initialization method.
   *
   * For services registered before app.listen is invoked, the setup function of
   * each registered service is called on invoking app.listen.
   *
   * For services registered after app.listen is invoked, setup is called
   * automatically by Feathers when a service is registered.
   *
   * @async
   * @param {Feathers.Application} app - Feathers application
   * @param {string} path - Path service was registered on without the '/'
   * @returns {Promise}
   */
  setup: async function (app, path) {
    /**
     * @property {Object} app - Current Feathers application
     * @instance
     */
    this.app = app

    /**
     * @property {string} path - Path service was registered on without the '/'
     * @instance
     */
    this.path = path

    /**
     * @property {axios} requestRentCafeWebAPI - Axios instance
     * @instance
     */
    this.requestRentCafeWebAPI = app.get('axios')

    Logger.debug({ Scheduling: this.path })
  },

  /**
   * Creates an appointment on the leasing staff’s CRM calendar.
   * Either adds a guest card or matches and updates an existing card.
   *
   * @async
   * @param {object} data - Additional information for the service method
   * @param {string} data.apptDate - Appointment date
   * @param {string} data.apptTime - Appointment time
   * @param {string} data.email - Lead email
   * @param {string} data.phone - Lead phone number
   * @param {string} data.source - Primary marketing source
   * @param {object} params - Additional information for the service method
   * @param {object} param1.query - Query parameters
   * @param {string} param1.query.companyCode - Company token from RENTCafé
   * @param {string} param1.query.marketingAPIKey - Yardi API Key
   * @param {string} param1.query.propertyId - RENTCafé property identifier
   * @param {string} param1.query.requestType - Marketing API endpoint to
   * request (without trailing slashes)
   * @param {string} param1.url - RENTCafé URL to request
   * @returns {ApptWithLeadResponse | RentCafeError} Appt and lead data
   */
  create: async function (data, { query, url }) {
    let response = {}

    try {
      response = await this.requestRentCafeWebAPI({ method: 'post', url, data })
    } catch (err) {
      Logger.error({ 'Scheduling.create': err })
      throw err
    }

    return response
  },

  /**
   * Returns dates and times available for meeting prospects.
   *
   * @async
   * @param {object} params - Additional information for the service method
   * @param {object} params.query - Query parameters
   * @param {string} params.query.companyCode - Company token from RENTCafé
   * @param {string} params.query.marketingAPIKey - Yardi API Key
   * @param {string} params.query.propertyId - RENTCafé property identifier
   * @param {string} param0.query.requestType - Marketing API endpoint to
   * request (without trailing slashes)
   * @param {string} param0.url - RENTCafé URL to request
   * @returns {AvailableSlotsResponse | RentCafeError} Available appointments
   */
  find: async function ({ query, url }) {
    let response = {}

    try {
      response = await this.requestRentCafeWebAPI({ method: 'post', url })
    } catch (err) {
      Logger.error({ 'Scheduling.find': err })
      throw err
    }

    return response
  }
}

export default Scheduling
