// Packages
import feathers from '@feathersjs/client'

// Config
import Logger from './logger'

/**
 * @file Feathers App Configuration
 * @module config/feathers
 */

export const API_CONFIG = {
  services: {
    FloorPlans: 'floorplans',
    Scheduling: 'scheduling'
  }
}

// Initialize Feathers client
export const API = feathers()

// Configure API app
for (const key in API_CONFIG) API.set(key, API_CONFIG[key])

Logger.debug('Configured Feathers =>', API)
