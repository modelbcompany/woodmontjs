// Packages
import { useCallback, useState } from 'react'

// Utility Functions
import {
  filterValues,
  isObject,
  searchObjectValues,
  sortObjectByKey
} from '../utils'

/**
 * @file Use Object as state variable
 * @module hooks/useObject
 */

/**
 * Takes @param initial as the initial object value and provides methods to
 * modify the object.
 *
 * @param {Object} initial - Initial object value
 * @returns {Object} Current object value and methods to mutate the object
 */
export const useObject = initial => {
  const [object, setObject] = useState(isObject(initial) || {})

  return {
    copy: Object.assign({}, object),
    empty: Object.values(object).length === 0,
    filter: key => filterValues(object, key),
    keys: Object.values(object),
    merge: useCallback(o => setObject(state => ({ ...state, ...o })), []),
    object,
    search: (key, value) => searchObjectValues(object, key, value),
    setObject,
    sort: useCallback(() => setObject(state => sortObjectByKey(state)), []),
    update: useCallback((key, value) => setObject(state => ({
      ...state, [key]: value
    })), []),
    values: Object.values(object)
  }
}

export default useObject
