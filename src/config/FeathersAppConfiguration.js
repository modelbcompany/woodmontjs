// Packages
import axios from 'axios'

// Utility Functions
import { interceptRentCafeResponse } from '../utils'

/**
 * @file Config - Feathers Application
 * @module config/FeathersAppConfiguration
 *
 * @todo interceptAxiosError
 */

// ! RENTCafé APIs only return 200-status responses, so we must check for an
// ! error before returning the response data
axios.interceptors.response.use(res => interceptRentCafeResponse(res), err => {
  const { message, config, status } = err

  return { status, message, config }
})

/**
 * Feathers application constants.
 *
 * @namespace FeathersAppConfiguration
 */
export const FeathersAppConfiguration = {
  axios,
  services: {
    Apartments: 'apartments',
    Floorplans: 'floorplans',
    Scheduling: 'scheduling'
  }
}

export default FeathersAppConfiguration
