// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorplanSearchFiltersField } from '..'

// Metadata
import {
  FloorplanSearchFiltersFieldStoryParams
} from '../metadata/FloorplanSearchFiltersField.meta'

/**
 * @file Stories - FloorplanSearchFiltersField
 * @module components/molecules/Fieldset/stories/FloorplanSearchFiltersField
 */

export default {
  title: 'Components/Molecules/Fieldset/Components/FloorplanSearchFiltersField',
  component: FloorplanSearchFiltersField,
  parameters: FloorplanSearchFiltersFieldStoryParams
}

/**
 * Default @link FloorplanSearchFiltersField story.
 *
 * @returns {FloorplanSearchFiltersField}
 */
export const Default = () => (
  <FloorplanSearchFiltersField
    handleFilter={event => action('handleFilter')(event.target)}
  />
)
