// Packages
import { Children } from 'react'

// Utility Functions
import { classNames, isObject, isString } from '../utils'

/**
 * @file Hook to inject class names and santize incoming data
 * @module hooks/useAttributes
 */

/**
 * Prefixes @param props.className with @param injectClass and removes unwanted
 * keys from the incoming component properties.
 *
 * @param props.children will be converted to an array.
 *
 * @param {Object} props - Component properties
 * @param {string} injectClass - Classes to inject before @param props.className
 * @param {string} keys - Comma-delimitted list of @param props keys to remove
 * @returns {Object} @param props with updated @property className
 */
export const useAttributes = ({ children, ...props }, injectClass, keys) => {
  // Type checking
  if (!isObject(props)) props = {}
  if (!isString(injectClass)) injectClass = ''
  if (!isString(keys)) keys = ''

  // Copy incoming properties
  const attributes = Object.assign({}, props)

  // Update attributes
  attributes.className = classNames(injectClass, attributes.className)

  if (children) {
    attributes.children = Object.assign([], Children.toArray(children).flat())
  }

  // Remove properties
  const remove = keys.split(',')
  remove.forEach(prop => Reflect.deleteProperty(attributes, prop))

  // Return HTML attributes
  return attributes
}

export default useAttributes
