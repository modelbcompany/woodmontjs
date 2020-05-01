// Packages
import React from 'react'

// Component
import FloorplansTemplate from '..'

// Metadata
import {
  FloorplansTemplateStoryParams
} from '../metadata/FloorplansTemplate.meta'

/**
 * @file Stories - FloorplansTemplate
 * @module components/templates/FloorplansTemplate/stories/FloorplansTemplate
 */

export default {
  title: 'Components/Templates/FloorplansTemplate',
  component: FloorplansTemplate,
  parameters: FloorplansTemplateStoryParams
}

/**
 * Default @link FloorplansTemplate story.
 *
 * @returns {FloorplansTemplate}
 */
export const Default = () => <FloorplansTemplate />
