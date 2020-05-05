// Service object
import Apartments from './Apartments'

// Utility Functions
import { registerService } from '../../utils'

/**
 * @file Service - Apartments
 * @module services/Apartments
 */

/**
 * @namespace ApartmentsServiceConfig
 * @property {string} name
 * @property {object} object
 */
export const ApartmentsServiceConfig = Object.freeze({
  name: 'Apartments',
  object: Apartments
})

export default app => registerService(app, ApartmentsServiceConfig)
