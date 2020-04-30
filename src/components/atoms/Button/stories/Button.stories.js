// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, object, text } from '@storybook/addon-knobs'

// Components
import Button from '..'

// Config
import {
  DROPDOWN_BUTTON_DEFAULTS,
  SMOOTH_SCROLL_BUTTON_DEFAULTS
} from '../../../../config/constants'

// Metadata
import {
  ButtonStoryParams,
  DropdownButtonStoryParams,
  IconButtonStoryParams,
  SmoothScrollButtonStoryParams
} from '../metadata/Button.meta'

/**
 * @file Stories - Button
 * @module components/atoms/Button/stories/Button
 */

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  parameters: ButtonStoryParams
}

/**
 * Default @link Button story.
 *
 * @returns {Button}
 */
export const Default = () => (
  <Button
    className={text('className')}
    disabled={boolean('disabled')}
    id={text('id')}
    name={text('name')}
    onClick={e => action('onClick')(e.target)}
  >
    {text('children', 'Button text')}
  </Button>
)

/**
 * Dropdown @link Button story.
 *
 * @returns {Button}
 */
export const DropdownButton = () => (
  <Button
    name={DROPDOWN_BUTTON_DEFAULTS.name}
    value='#dropdown-menu-id'
  >
    {text('children', 'Dropdown')}
  </Button>
)

DropdownButton.story = {
  name: 'Dropdown',
  parameters: DropdownButtonStoryParams
}

/**
 * Icon @link Button story.
 *
 * @returns {Button}
 */
export const IconButton = () => {
  const icon = { children: 'keyboard_arrow_right', 'data-position': 'right' }

  return (
    <Button data-icon={object('data-icon', icon)}>
      {text('children', 'Next')}
    </Button>
  )
}

IconButton.story = {
  name: 'Icon',
  parameters: IconButtonStoryParams
}

/**
 * Smooth scroll @link Button story.
 *
 * @returns {Button}
 */
export const SmoothScrollButton = () => (
  <Button
    data-icon={{ 'aria-label': 'Scroll to top', children: 'arrow_upward' }}
    name={SMOOTH_SCROLL_BUTTON_DEFAULTS.name}
  />
)

SmoothScrollButton.story = {
  name: 'Smooth Scroll',
  parameters: SmoothScrollButtonStoryParams
}
