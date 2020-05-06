// Services
import Apartments from './Apartments'
import Floorplans from './Floorplans'
import Scheduling from './Scheduling'

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
  app.configure(Apartments)
  app.configure(Floorplans)
  app.configure(Scheduling)
}

export default app => configureServices(app)
