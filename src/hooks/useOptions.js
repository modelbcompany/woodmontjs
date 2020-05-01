// Packages
import { useCallback, useState } from 'react'

// Utility Functions
import { isArray } from '../utils'

/**
 * @file Hook to retreive collection of @link Option data
 * @module hooks/useOptions
 */

/**
 * Uses @param initial as the initial state and returns an object containing the
 * current value, as well as functions to mutate the internal state.
 *
 * @param {OptionProps[]} initial - Initial selection options
 * @returns {object}
 */
export const useOptions = opts => {
  const [options, setOptions] = useState(isArray(opts) || [])
  const [selected, setSelected] = useState(null)

  return {
    handleBlur: useCallback(value => setSelected(() => {
      return options.find((opt, index) => {
        if (opt.value === value) return index
      })
    }), [options]),
    options,
    selected,
    setOptions,
    setSelected
  }
}

export default useOptions
