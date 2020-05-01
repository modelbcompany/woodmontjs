// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, object, text } from '@storybook/addon-knobs'

// Components
import Button from '..'

// Metadata
import {
  ButtonStoryParams,
  FormButtonStoryParams,
  IconButtonStoryParams
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
 * @link FloorplanSearchForm @link Button story.
 *
 * @returns {Button}
 */
export const FloorplanSearchFormButton = () => (
  <Button
    className='floorplan-search-form-btn'
    disabled={boolean('disabled')}
    name={text('name')}
    onClick={e => action('onClick')(e.target)}
    type={text('type', 'submit')}
  >
    {text('children', 'Search')}
  </Button>
)

FloorplanSearchFormButton.story = {
  name: 'FloorplanSearchForm',
  parameters: FormButtonStoryParams
}

/**
 * Icon @link Button story.
 *
 * @returns {Button}
 */
export const IconButton = () => {
  const icon = { children: 'keyboard_arrow_right', 'data-position': 'right' }

  return (
    <Button data-icon={object('data-icon', icon)} name={text('name')}>
      {text('children', 'Next')}
    </Button>
  )
}

IconButton.story = {
  name: 'Icon',
  parameters: IconButtonStoryParams
}
