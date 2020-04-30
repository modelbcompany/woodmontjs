// Packages
import { useCallback, useState } from 'react'

// Utility Functions
import { isArray } from '../utils'

/**
 * @file Hook to retreive collection of @link Option data
 * @module hooks/useOptions
 */

/**
 * Returns the value of `data-options`, or an empty array if null or undefined.
 *
 * @param {object} props - Component data
 * @returns {object[]}
 */
export const useOptions = ({ 'data-options': opts }) => {
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
