// React
import { useEffect } from 'react'

// Hooks
import useBoolean from './useBoolean'
import useObject from './useObject'

// Utility Functions
import { isObject } from '../utils'

/**
 * @file Use the Disclosure Design Pattern
 * @module hooks/useDisclosure
 * @see {@link https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure}
 * @todo Update hook description
 */

/**
 * NOTICE - Disabling react-hooks/exhaustive-deps
 *
 * If `config`, `config.button`, or `config.content` are used in the `useEffect`
 * dependency array, the following error will be thrown:
 *
 * `Warning: Maximum update depth exceeded. This can happen when a component
 * calls setState inside useEffect, but useEffect either doesn't have a
 * dependency array, or one of the dependencies changes on every render.`
 *
 * The `config` object will be recreated on every render, and therefore will
 * never be equal to the previous reference.
 *
 * Furhtermore, `setButton`, `setContent`, and `toggle` do not need to be
 * tracked.
 */

/* eslint-disable react-hooks/exhaustive-deps */

/**
 * @param {object} config - Disclosure config
 * @param {object} config.button - Properties to pass to the element that shows
 * and hides the disclosure content
 * @param {object} config.content - Properties to pass disclosure content
 * @returns {object}
 */
export const useDisclosure = (config = { button: {}, content: {} }) => {
  config = {
    button: isObject(config.button) || {},
    content: isObject(config.content) || {}
  }

  const { button: propsButton = {}, content: propsContent = {} } = config

  const {
    boolean: expanded, setBoolean: setDisclosure, toggle
  } = useBoolean(false)

  const { object: button, setObject: setButton } = useObject(propsButton)

  const { object: content, setObject: setContent } = useObject(propsContent)

  useEffect(() => {
    // ! If defined, sync open state with incoming props
    if (content.open !== undefined) setDisclosure(content.open)

    setButton(button => ({
      ...button,
      'aria-controls': content.id,
      'aria-expanded': expanded,
      'aria-haspopup': button['aria-haspopup'] || true,
      onClick: event => {
        toggle()

        if (config?.button?.onClick) config.button.onClick(event)
      }
    }))

    setContent(content => ({ ...content, 'data-controlled': true }))
  }, [
    button['aria-haspopup'],
    config.button.onClick,
    content.id,
    content.open,
    expanded
  ])

  return { button, content, expanded, setDisclosure }
}

export default useDisclosure

/* eslint-enable react-hooks/exhaustive-deps */
