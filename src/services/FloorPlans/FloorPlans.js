// Config
import Logger from '../../config/logger'

// Mocks
import FindFloorPlansMock from './__mocks__/FindFloorPlans.mock'

/**
 * @file Service Object - FloorPlans
 * @module services/FloorPlans/FloorPlans
 */

/**
 * @typedef {FloorPlan}
 * @property {string} AvailabilityURL
 * @property {string} AvailableUnitsCount
 * @property {string} Baths
 * @property {string} Beds
 * @property {string} FloorPlanHasSpecials
 * @property {string} FloorPlanImageName
 * @property {string} FloorPlanImageURL
 * @property {string} FloorPlanId
 * @property {string} FloorPlanName
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
 * FloorPlan service.
 *
 * @see {@link https://woodmontjs.modelb.now.sh/docs/rentcafe/web}
 *
 * @namespace FloorPlans
 */
export const FloorPlans = Object.freeze({
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

    Logger.debug('[Service] FloorPlans: Initialized on path', this.path)
  },

  /**
   * Returns floor plan data.
   *
   * @todo Request RENTCafé Web Service API
   *
   * @async
   * @param {object} params - Additional information for the service method
   * @param {object} params.query - Query parameters
   * @param {string} params.query.apiToken - Company token from RENTCafé
   * @param {string} params.query.propertyId - RENTCafé property identifier
   * @param {string} params.query.requestType - floorPlan
   * @returns {FloorPlan[]} RENTCafé floor plan data
   * @throws {FeathersError}
   */
  find: async function ({ query: { apiToken, propertyId } }) {
    let floorplans = null

    floorplans = await (async () => FindFloorPlansMock)()

    if (propertyId) {
      floorplans = floorplans.filter(plan => plan.PropertyId === propertyId)
    }

    return floorplans
  }
})

export default FloorPlans
