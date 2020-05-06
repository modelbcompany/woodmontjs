// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorplansSearchFiltersField } from '..'

// Metadata
import {
  FloorplansSearchFiltersFieldStoryParams
} from '../metadata/FloorplansSearchFiltersField.meta'

/**
 * @file Stories - FloorplansSearchFiltersField
 * @module components/molecules/Fieldset/stories/FloorplansSearchFiltersField
 */

export default {
  title: 'Components/Molecules/Fieldset/Components/FloorplansSearchFiltersField',
  component: FloorplansSearchFiltersField,
  parameters: FloorplansSearchFiltersFieldStoryParams
}

/**
 * Default @link FloorplansSearchFiltersField story.
 *
 * @returns {FloorplansSearchFiltersField}
 */
export const Default = () => (
  <FloorplansSearchFiltersField
    handleFilter={event => action('handleFilter')(event.target)}
  />
)
