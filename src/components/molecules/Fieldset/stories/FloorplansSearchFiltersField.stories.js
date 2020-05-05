// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorsPlanSearchFiltersField } from '..'

// Metadata
import {
  FloorsPlanSearchFiltersFieldStoryParams
} from '../metadata/FloorplansSearchFiltersField.meta'

/**
 * @file Stories - FloorsPlanSearchFiltersField
 * @module components/molecules/Fieldset/stories/FloorsPlanSearchFiltersField
 */

export default {
  title: 'Components/Molecules/Fieldset/Components/FloorsPlanSearchFiltersField',
  component: FloorsPlanSearchFiltersField,
  parameters: FloorsPlanSearchFiltersFieldStoryParams
}

/**
 * Default @link FloorsPlanSearchFiltersField story.
 *
 * @returns {FloorsPlanSearchFiltersField}
 */
export const Default = () => (
  <FloorsPlanSearchFiltersField
    handleFilter={event => action('handleFilter')(event.target)}
  />
)
