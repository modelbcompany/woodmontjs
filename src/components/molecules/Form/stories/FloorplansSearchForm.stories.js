// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorplansSearchForm } from '..'

// Metadata
import {
  FloorplansSearchFormStoryParams
} from '../metadata/FloorplansSearchForm.meta'

/**
 * @file Stories - Form
 * @module components/molecules/Form/stories/FloorplansSearchForm
 */

export default {
  title: 'Components/Molecules/Form/Components/FloorplansSearchForm',
  component: FloorplansSearchForm,
  parameters: FloorplansSearchFormStoryParams
}

/**
 * Default @link FloorplansSearchForm story.
 *
 * @returns {FloorplansSearchForm}
 */
export const Default = () => (
  <FloorplansSearchForm
    handleFilter={event => action('handleFilter')(event.target)}
    handleSearch={event => action('handleSearch')(event.target)}
  />
)
