// Packages
import { useState } from 'react'

// Utility Functions
import { isBoolean } from '../utils'

/**
 * @file Boolean value hook
 * @module hooks/useBoolean
 */

/**
 * Takes @param initial as the starting boolean value, and provides methods to
 * toggle the boolean value.
 *
 * @param {boolean} initial - Default boolean value
 * @returns {Object} Current boolean value and a method to toggle the value
 */
export const useBoolean = initial => {
  const [boolean, setBoolean] = useState(isBoolean(initial) || false)

  return {
    boolean,
    setBoolean,
    toggle: () => setBoolean(bool => !bool)
  }
}

export default useBoolean
