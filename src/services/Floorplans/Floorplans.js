// Config
import Logger from '../../logger'

// Mocks
import FindFloorplansMock from './__mocks__/FindFloorplans.mock'

/**
 * @file Service Object - Floorplans
 * @module services/Floorplans/Floorplans
 */

/**
 * @typedef {Floorplan}
 * @property {string} AvailabilityURL
 * @property {string} AvailableUnitsCount
 * @property {string} Baths
 * @property {string} Beds
 * @property {string} FloorplanHasSpecials
 * @property {string} FloorplanImageAltText
 * @property {string} FloorplanImageName
 * @property {string} FloorplanImageURL
 * @property {string} FloorplanId
 * @property {string} FloorplanName
 * @property {string} MaximumDeposit
 * @property {string} MinimumDeposit
 * @property {string} MaximumRent
 * @property {string} MinimumRent
 * @property {string} MaximumSqFt
 * @property {string} MinimumSqFt
 * @property {string} PropertyShowsSpecials
 * @property {string} UnitTypeMapping
 */

/**
 * Floorplan service.
 *
 * @see {@link https://woodmontjs.modelb.now.sh/docs/rentcafe/web}
 *
 * @namespace Floorplans
 */
export const Floorplans = {
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

    Logger.debug('[Service] Floorplans: Initialized on path', this.path)
  },

  /**
   * Returns floor plan data.
   *
   * Data can be filtered by `id` or `name`, with `id` taking priority.
   *
   * @todo Request RENTCafé Web Service API
   *
   * @async
   * @param {object} params - Additional information for the service method
   * @param {object} params.query - Query parameters
   * @param {string} params.query.apiToken - Company token from RENTCafé
   * @param {string} params.query.id - Floorplan ID
   * @param {string} params.query.name - Floorplan name
   * @param {string} params.query.requestType - floorPlan
   * @returns {Floorplan[] | Floorplan | null} RENTCafé floor plan data
   * @throws {FeathersError}
   */
  find: async function ({ query: { apiToken, id, name } }) {
    let floorplans = null

    floorplans = await (async () => FindFloorplansMock)()

    if (id) {
      floorplans = floorplans.filter(plan => plan.FloorplanId === id)
    } else if (name) {
      floorplans = floorplans.filter(plan => plan.FloorplanName === name)
    }

    return id || name ? (floorplans[0] || null) : floorplans
  }
}

export default Floorplans
