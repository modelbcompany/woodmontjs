// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorPlanSearchFiltersField } from '..'

// Metadata
import {
  FloorPlanSearchFiltersFieldStoryParams
} from '../metadata/FloorPlanSearchFiltersField.meta'

/**
 * @file Stories - FloorPlanSearchFiltersField
 * @module components/molecules/Fieldset/stories/FloorPlanSearchFiltersField
 */

export default {
  title: 'Components/Molecules/Fieldset/Components/FloorPlanSearchFiltersField',
  component: FloorPlanSearchFiltersField,
  parameters: FloorPlanSearchFiltersFieldStoryParams
}

/**
 * Default @link FloorPlanSearchFiltersField story.
 *
 * @returns {FloorPlanSearchFiltersField}
 */
export const Default = () => (
  <FloorPlanSearchFiltersField
    handleFilter={event => action('handleFilter')(event.target)}
  />
)
