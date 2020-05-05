// Services
import FloorPlans from './FloorPlans'

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
  app.configure(FloorPlans)
}

export default app => configureServices(app)
