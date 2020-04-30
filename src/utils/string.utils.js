// Utility Functions
import { isArray, isObject, isString } from './validation.utils'

/**
 * @file String Utilities
 * @module utils/string
 */

/**
 * Takes any of strings and concats them together.
 * Duplicate strings will be removed.
 *
 * @param {string} arguments
 * @returns {string}
 */
export const mergeStrings = function () {
  const strings = Object.values(arguments).map((arg, i) => {
    if (isArray(arg)) {
      return mergeStrings(...arg)
    } else if (isObject(arg)) {
      return mergeStrings(...Object.values(arg))
    }

    return [...new Set((isString(arg) || '').split(' '))]
  }).flat().filter(string => { if (string) return string.trim() })

  let string = ''

  if (!strings.length) return string

  strings.forEach(str => string += ` ${str}`)

  return string.trim()
}
