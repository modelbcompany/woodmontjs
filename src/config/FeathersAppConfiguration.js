// Packages
import axios from 'axios'

// Config
import RentCafeErrors from './RentCafeErrors'

/**
 * @file Config - Feathers Application
 * @module config/FeathersAppConfiguration
 */

// Extract data from Axios responses
// ! Do not need handle status because RENTCafé only return 200 codes
axios.interceptors.response.use(response => response.data || response)

/**
 * Feathers application constants.
 *
 * @namespace FeathersAppConfiguration
 */
export const FeathersAppConfiguration = {
  RentCafeErrors,
  RentCafeAPI: axios,
  services: {
    Apartments: 'apartments',
    Floorplans: 'floorplans',
    Scheduling: 'scheduling'
  }
}

export default FeathersAppConfiguration
