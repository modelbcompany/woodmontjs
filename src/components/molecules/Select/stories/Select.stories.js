// Packages
import React from 'react'
import { array, boolean } from '@storybook/addon-knobs'

// Component
import Select from '..'

// Metadata
import { SelectStoryParams } from '../metadata/Select.meta'

// Mock Data
import OptionsMock from '../__mocks__/Options.mock'

/**
 * @file Stories - Select
 * @module components/molecules/Select/stories/Select
 */

export default {
  title: 'Components/Molecules/Select',
  component: Select,
  parameters: SelectStoryParams
}

/**
 * Default @link Select story.
 *
 * @returns {Select}
 */
export const Default = () => (
  <Select
    aria-label='Default select'
    data-options={array('data-options', OptionsMock, ',')}
    disabled={boolean('disabled')}
  />
)
