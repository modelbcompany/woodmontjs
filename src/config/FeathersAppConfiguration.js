// Utilities
import * as ErrorUtils from '../utils/error.utils'
import * as ObjectUtils from '../utils/objects.utils'
import * as StringUtils from '../utils/strings.utils'
import * as ValidationUtils from '../utils/validation.utils'

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
  services: {
    FloorPlans: 'floorplans',
    Scheduling: 'scheduling'
  },
  utilities: {
    ...ErrorUtils,
    ...ObjectUtils,
    ...StringUtils,
    ...ValidationUtils
  }
}

export default FeathersAppConfiguration
