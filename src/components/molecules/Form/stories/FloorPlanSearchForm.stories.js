// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorPlanSearchForm } from '..'

// Metadata
import {
  FloorPlanSearchFormStoryParams
} from '../metadata/FloorPlanSearchForm.meta'

/**
 * @file Stories - Form
 * @module components/molecules/Form/stories/FloorPlanSearchForm
 */

export default {
  title: 'Components/Molecules/Form/Components/FloorPlanSearchForm',
  component: FloorPlanSearchForm,
  parameters: FloorPlanSearchFormStoryParams
}

/**
 * Default @link FloorPlanSearchForm story.
 *
 * @returns {FloorPlanSearchForm}
 */
export const Default = () => (
  <FloorPlanSearchForm
    handleFilter={event => action('handleFilter')(event.target)}
    handleSearch={event => action('handleSearch')(event.target)}
  />
)
