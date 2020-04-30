// Hooks
import useBoolean from './useBoolean'

/**
 * @file Toggle dropdown content visibility
 * @module hooks/useDropdown
 */

/**
 * Returns an object with a function to toggle @link Dropdown content
 * visibility and a boolean value representing the content visibility.
 *
 * @returns {Object}
 */
export const useDropdown = () => {
  const { boolean: open, toggle: handleDropdown } = useBoolean(false)

  return {
    handleDropdown,
    open
  }
}

export default useDropdown
