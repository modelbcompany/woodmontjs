// Packages
import React from 'react'

// Components
import { Item } from '../components'

// Hooks
import useArray from './useArray'

// Utility Functions
import { isArray } from '../utils'

/**
 * @file Use @link Item, @link MenuItem, or @link NotificationItem data
 * @module hooks/useItems
 */

/**
 * Convert @param initial into an array of @link Item, @link MenuItem, or
 * @link NotificationItem components.
 *
 *
 * @param {ItemProps[]} initial - Initial @link Item, @link MenuItem,
 * or @link NotificationItem data
 * @param {string} type - Value from @link ItemTypes enum
 * @returns {Item|MenuItem|NotificationItem[]}
 */
export const useItems = (initial, type) => {
  initial = (isArray(initial) || []).map((props, i) => {
    if (props.$$typeof) return props

    return (
      <Item {...props} key={props.id || props['data-key'] || `item-${i}`} />
    )
  })

  const {
    add,
    addAll,
    array: items,
    clear,
    removeByIndex,
    removeByKeyValue,
    setArray: setItems
  } = useArray(initial)

  return {
    add,
    addAll,
    clear,
    items,
    removeByIndex,
    removeByKeyValue,
    setItems
  }
}

export default useItems
