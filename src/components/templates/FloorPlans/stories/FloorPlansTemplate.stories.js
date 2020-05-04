// Packages
import React from 'react'

// Component
import FloorPlansTemplate from '..'

// Metadata
import {
  FloorPlansTemplateStoryParams
} from '../metadata/FloorPlansTemplate.meta'

/**
 * @file Stories - FloorPlansTemplate
 * @module components/templates/Floorplans/stories/FloorPlansTemplate
 */

export default {
  title: 'Components/Templates/FloorPlansTemplate',
  component: FloorPlansTemplate,
  parameters: FloorPlansTemplateStoryParams
}

/**
 * Default @link FloorPlansTemplate story.
 *
 * @returns {FloorPlansTemplate}
 */
export const Default = () => <FloorPlansTemplate />
