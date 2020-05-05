// Service object
import Scheduling from './Scheduling'

// Utility Functions
import { registerService } from '../../utils'

/**
 * @file Service - Scheduling
 * @module services/Scheduling
 */

/**
 * @namespace SchedulingServiceConfig
 * @property {string} name
 * @property {object} object
 */
export const SchedulingServiceConfig = Object.freeze({
  name: 'Scheduling',
  object: Scheduling
})

export default app => registerService(app, SchedulingServiceConfig)
