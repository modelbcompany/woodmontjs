// Service object
import FloorPlans from './FloorPlans'

// Utility Functions
import { registerService } from '../../utils'

/**
 * @file Service - FloorPlans
 * @module services/FloorPlans
 */

/**
 * @namespace FloorPlansServiceConfig
 * @property {string} name
 * @property {object} object
 */
export const FloorPlansServiceConfig = Object.freeze({
  name: 'FloorPlans',
  object: FloorPlans
})

export default app => registerService(app, FloorPlansServiceConfig)
