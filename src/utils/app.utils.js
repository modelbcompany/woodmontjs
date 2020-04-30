// Utility Functions
import { sortObjectByKey } from './object.utils'

/**
 * @file App Utilities
 * @module utils/app
 */

/**
 * Retreives the components from a component module.
 *
 * @param mod will have @param mod.default renamed to @param mod.default.name .
 *
 * @param {Object} mod - Module to retreive components from
 * @returns {Object} Object containing components
 */
export const getComponentsForPropTable = mod => {
  // If no module, return empty object
  if (!mod) return {}

  // Get name of default component
  const { name } = mod.default

  // Get components and rename default export
  const components = Object.assign({}, { ...mod, default: undefined })
  components[`${name}`] = mod.default

  // Return components
  return sortObjectByKey(components)
}
