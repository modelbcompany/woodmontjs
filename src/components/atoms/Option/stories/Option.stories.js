// Packages
import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

// Components
import Option from '..'

// Metadata
import { OptionStoryParams } from '../metadata/Option.meta'

/**
 * @file Stories - Option
 * @module components/atoms/Option/stories/Option
 */

export default {
  title: 'Components/Atoms/Option',
  component: Option,
  parameters: OptionStoryParams
}

/**
 * Default @link Option story.
 *
 * @returns {Option}
 */
export const Default = () => (
  <Option
    disabled={boolean('disabled')}
    selected={boolean('selected')}
  >
    {text('children')}
  </Option>
)
