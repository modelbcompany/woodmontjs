// Packages
import React from 'react'
import { action } from '@storybook/addon-actions'

// Component
import { FloorplanSearchForm } from '..'

// Metadata
import {
  FloorplanSearchFormStoryParams
} from '../metadata/FloorplanSearchForm.meta'

/**
 * @file Stories - Form
 * @module components/molecules/Form/stories/FloorplanSearchForm
 */

export default {
  title: 'Components/Molecules/Form/Components/FloorplanSearchForm',
  component: FloorplanSearchForm,
  parameters: FloorplanSearchFormStoryParams
}

/**
 * Default @link FloorplanSearchForm story.
 *
 * @returns {FloorplanSearchForm}
 */
export const Default = () => (
  <FloorplanSearchForm
    handleFilter={event => action('handleFilter')(event.target)}
    handleSearch={event => action('handleSearch')(event.target)}
  />
)
