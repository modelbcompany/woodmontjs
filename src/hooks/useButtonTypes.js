// Config
import { ButtonTypes } from '../config'

// Hooks
import useObject from './useObject'

/**
 * @file Hook to get @link Button properties based on the button name
 * @module hooks/useButtonTypes
 */

/**
 * Returns a value from the @link ButtonTypes namespace based on button name.
 *
 * @param {ButtonProps} props - Button component data
 * @returns {ButtonProps | null} Value from @link ButtonTypes namespace or null
 */
export const useButtonTypes = ({ name }) => {
  const { object: type } = useObject(Object.values(ButtonTypes).find(type => {
    if (type.name === name) return type
  }))

  return type
}

export default useButtonTypes
