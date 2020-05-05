// Services
import Floorplans from './Floorplans'

/**
 * @file Library Services
 * @module services
 */

/**
 * Configures the library services.
 *
 * @param {Object} app - Feathers application
 * @returns {undefined}
 */
export const configureServices = app => {
  app.configure(Floorplans)
}

export default app => configureServices(app)
