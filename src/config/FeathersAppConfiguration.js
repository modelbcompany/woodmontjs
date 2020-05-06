// Packages
import axios from 'axios'

// Config
import RentCafeErrors from './RentCafeErrors'

// Utility Functions
import { interceptRentCafeResponse } from '../utils'

/**
 * @file Config - Feathers Application
 * @module config/FeathersAppConfiguration
 *
 * @todo Update documentation
 */

// ! RENTCafé APIs only return 200-status responses, so we must check for an
// ! error before returning the response data
axios.interceptors.response.use(interceptRentCafeResponse)

/**
 * Feathers application constants.
 *
 * @namespace FeathersAppConfiguration
 */
export const FeathersAppConfiguration = {
  axios,
  RentCafeErrors,
  services: {
    Apartments: 'apartments',
    Floorplans: 'floorplans',
    Scheduling: 'scheduling'
  }
}

export default FeathersAppConfiguration
