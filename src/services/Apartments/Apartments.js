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

    Logger.debug('[Service] Apartments: Initialized on path', this.path)
  }
}

export default Apartments
