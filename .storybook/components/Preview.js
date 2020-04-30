// Packages
import React from 'react'
import { Preview as StorybookPreview } from '@storybook/components'

// Hooks
import useJSXCode from '../hooks/useJSXCode'

// Utility Functions
import { isArray } from '../../src/utils'

/**
 * @file Custom Preview component
 * @see {@link https://github.com/storybookjs/storybook/issues/8265}
 */

/**
 * Custom Preview component to use with Arbitrary MDX.
 * 
 * @param {Object} props - Component data
 * @param {Node} props.children - Preview code
 * @returns {StorybookPreview}
 */
export const Preview = ({ children, ...props }) => {
  children = Object.assign([], React.Children.toArray(children))

  const source = {
    code: useJSXCode(children),
    dark: true,
    format: true,
    language: 'jsx'
  }

  return (
    <StorybookPreview {...props} mdxSource={children} withSource={source}>
      {children}
    </StorybookPreview>
  )
}

export default Preview
