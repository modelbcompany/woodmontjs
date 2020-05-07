// Config
import Logger from '../../logger'

/**
 * @file Service Object - Apartments
 * @module services/Apartments/Apartments
 */

/**
 * Online Apartments service.
 *
 * @see {@link https://woodmontjs.modelb.now.sh/docs/rentcafe/web}
 *
 * @namespace Apartments
 */
export const Apartments = {
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
     * @property {string} environment - Node environment
     * @instance
     */
    this.env = process.env.NODE_ENV

    /**
     * @property {axios} requestRentCafeWebAPI - Axios instance
     * @instance
     */
    this.requestRentCafeWebAPI = app.get('axios')

    Logger.debug('[Service] Apartments: Initialized on path', this.path)
  },

  /**
   * Returns apartment data.
   *
   * Data can be filtered by unit code, available move-in date, floor plan id,
   * number of bedrooms and bathrooms, as well as rent range.
   *
   * @async
   * @param {object} param0 - Additional information for the service method
   * @param {object} param0.query - Query parameters
   * @param {string} param0.query.apartmentName - Voyager unit code
   * @param {string} param0.query.apiToken - Company token from RENTCafé
   * @param {string} param0.query.floorPlanId - RENTCafé floorplan identifier
   * @param {string} param0.query.numberOfBaths - Number of bathrooms
   * @param {string} param0.query.numberOfBeds - Number of bedrooms
   * @param {string} param0.query.rentRange - Monthly rent amount range
   * @param {string} param0.query.requestType - apartmentAvailability
   * @param {string} param0.url - RENTCafé URL to request
   * @returns {Apartment[] | RentCafeError} RENTCafé apartment data
   */
  find: async function ({ query, url }) {
    let apartments = []

    try {
      apartments = await this.requestRentCafeWebAPI(url, { params: query })
    } catch (err) {
      Logger.error({ 'Apartments.find': err })
      throw err
    }

    return apartments
  }
}

export default Apartments
