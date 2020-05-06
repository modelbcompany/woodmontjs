// Config
import RentCafeErrors from './RentCafeErrors'

/**
 * @file Config - Feathers Application
 * @module config/FeathersAppConfiguration
 */

/**
 * Feathers application constants.
 *
 * @namespace FeathersAppConfiguration
 */
export const FeathersAppConfiguration = {
  RentCafeErrors,
  services: {
    Apartments: 'apartments',
    Floorplans: 'floorplans',
    Scheduling: 'scheduling'
  }
}

export default FeathersAppConfiguration
