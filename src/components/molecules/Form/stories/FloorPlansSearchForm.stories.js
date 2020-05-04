// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorPlansSearchForm } from '..'

// Metadata
import {
  FloorPlansSearchFormStoryParams
} from '../metadata/FloorPlansSearchForm.meta'

/**
 * @file Stories - Form
 * @module components/molecules/Form/stories/FloorPlansSearchForm
 */

export default {
  title: 'Components/Molecules/Form/Components/FloorPlansSearchForm',
  component: FloorPlansSearchForm,
  parameters: FloorPlansSearchFormStoryParams
}

/**
 * Default @link FloorPlansSearchForm story.
 *
 * @returns {FloorPlansSearchForm}
 */
export const Default = () => (
  <FloorPlansSearchForm
    handleFilter={event => action('handleFilter')(event.target)}
    handleSearch={event => action('handleSearch')(event.target)}
  />
)
