// Service object
import Floorplans from './Floorplans'

// Utility Functions
import { registerService } from '../../utils'

/**
 * @file Service - Floorplans
 * @module services/Floorplans
 */

/**
 * @namespace FloorplansServiceConfig
 * @property {string} name
 * @property {object} object
 */
export const FloorplansServiceConfig = Object.freeze({
  name: 'Floorplans',
  object: Floorplans
})

export default app => registerService(app, FloorplansServiceConfig)
