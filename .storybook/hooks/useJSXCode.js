// Packages
import React, { useDebugValue } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

// Utility Functions
import { createElement } from '../../src/utils/react.utils'
import { isArray, isObject } from '../../src/utils'

/**
 * @file Transform Storybook MDX content into JSX string
 * @see
 * {@link https://github.com/storybookjs/storybook/blob/master/lib/components/src/blocks/Source.stories.tsx}
 */


/**
 * Converts an array of React components into a JSX source code string.
 * 
 * To be used with Storybook for generating source code from incoming MDX data.
 * 
 * @param {React.Component[]} source - Components to render as JSX string
 * @returns {string} JSX string
 */
export const useJSXCode = source => {
  let code = ``

  if (!source || (isArray(source) && !source.length)) return code
  source = isArray(source) || React.Children.toArray(source)

  const getComponent = comp => {
    const { mdxType, originalType, ...props } = comp.props

    let component = { props, type: mdxType }
    component = createElement(Object.assign(component, originalType))

    useDebugValue('useJSXCode', component)

    return component
  }

  source.forEach(comp => {
    if (!comp) return ``

    let component = getComponent(comp)

    // NOTICE: If array, check if it contains other React elements
    if (isArray(component.props?.children)) {
      component = {
        ...component,
        props: {
          ...component.props,
          children: component.props.children.map(child => {
            if (isObject(child)) return getComponent(child)
            return child
          })
        }
      }
    }

    const jsx_str = reactElementToJSXString(component, {
      maxInlineAttributesLineLength: 70,
      showDefaultProps: false
    })

    return code += `\n${jsx_str}`
  })

  return code
}

export default useJSXCode