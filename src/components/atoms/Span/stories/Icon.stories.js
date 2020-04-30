// Packages
import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

// Components
import { Icon } from '..'

// Metadata
import { IconStoryParams } from '../metadata/Icon.meta'

/**
 * @file Stories - Icon
 * @module components/atoms/Span/stories/Icon
 */

export default {
  title: 'Components/Atoms/Span/Components/Icon',
  component: Icon,
  parameters: IconStoryParams
}

/**
 * Default @link Icon story.
 * Renders standard Material Icons.
 *
 * @see {@link https://material-ui.com/components/icons/#icon-font-icons}
 * @returns {Icon}
 */
export const Default = () => (
  <Icon
    aria-hidden={boolean('aria-hidden', true)}
    aria-label={text('aria-label', '')}
  >
    {text('children', 'add_circle_outline')}
  </Icon>
)

/**
 * @link Icon story for Font Awesome icons.
 *
 * @see {@link https://material-ui.com/components/icons/#font-awesome}
 * @returns {Icon}
 */
export const FontAwesome = () => (
  <Icon
    aria-hidden={boolean('aria-hidden')}
    aria-label={text('aria-label', '')}
    className={`fa ${text('className', 'fab fa-twitter')}`}
  />
)
