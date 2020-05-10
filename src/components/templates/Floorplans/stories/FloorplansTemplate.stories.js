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
 * @module components/templates/Floorplans/stories/FloorplansTemplate
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
export const Default = () => {
  const { apiToken, companyCode, marketingAPIKey, propertyId } = process.env
  const RENT_CAFE_AUTH = { apiToken, companyCode, marketingAPIKey, propertyId }

  return <FloorplansTemplate auth={RENT_CAFE_AUTH} />
}
