// Hooks
import useArray from './useArray'
import useObject from './useObject'

// Utility Functions
import { isArray } from '../utils'
import { createElement } from '../utils/react.utils'

/**
 * @file Hook to render props.children with an @link Icon beside it
 * @module hooks/useIcon
 */

/**
 * Render @param param0.children beside an @link Icon component.
 *
 * @param {Object} param0 - Component data
 * @param {Object} param0.children - Inner content
 * @returns {ReactFragment}
 */
export const useIcon = ({ children: kids, 'data-icon': props }) => {
  if (props) {
    props = Object.assign(props, {
      'aria-hidden': kids ? props['aria-hidden'] : false
    })

    const component = createElement({ type: 'Icon', props })

    if (props['data-position'] === 'right') {
      kids = [kids, component]
    } else {
      kids = [component, kids]
    }
  }

  kids = isArray(kids) || [kids]

  const { array: children, setArray: setChildren } = useArray(kids)
  const { empty: has_icon, object: icon, setObject: setIcon } = useObject(props)

  return {
    children,
    has_icon,
    icon,
    setChildren,
    setIcon
  }
}

export default useIcon
