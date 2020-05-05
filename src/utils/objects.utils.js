// Utility Functions
import { isObject } from './validation.utils'

/**
 * @file Utilties - Objects
 * @module utils/object
 */

/**
 * Filters the values of an object by key.
 *
 * @param obj should be an object where each value is also an object.
 *
 * @param {object} obj - Object to retreive values from
 * @param {string} key - Key to filter by @param obj values by
 * @returns {*[]} Filtered values
 */
export const filterValues = (obj, key) => {
  // If no object to retreive values, or no key to filter by, return empty array
  if (!obj || !key || (key && !key.length)) return []

  // Create filter context
  const context = Object.values(obj)

  // Filter by key
  return context.map(obj => obj[key])
}

/**
 * Searches the values of an object by key:value pair.
 *
 * @param obj should be an object where each value is also an object.
 *
 * @param {object} obj - Object to retreive values from
 * @param {string} key - Key to filter by @param obj values by
 * @param {string} value - Value to search for
 * @returns {object | null} Value or null
 */
export const searchObjectValues = (obj, key, value) => {
  // Return null if no object to create search context from
  if (!obj) return null

  // Create search context
  const context = Object.values(obj)

  // Search for object with matching key:value pair
  return context.find(obj => { if (obj[key] === value) return obj })
}

/**
 * Sort an object by key name.
 *
 * @param {object} obj - Object to sort
 * @returns {object} Sorted object
 */
export const sortObjectByKey = obj => {
  // If no object, or not an object, return empty object
  if (!obj || !isObject(obj)) return {}

  // Create object to hold sorted keys
  const sorted = {}

  // Sort keys and copy to empty object
  Object.keys(obj).sort().forEach(key => (sorted[key] = obj[key]))

  // Return sorted object
  return Object.assign({}, sorted)
}
