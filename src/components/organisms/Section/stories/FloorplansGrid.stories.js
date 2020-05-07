// Packages
import React from 'react'

// Component
import { FloorplansGrid } from '..'

// Metadata
import { FloorplansGridStoryParams } from '../metadata/FloorplansGrid.meta'

// Mock Data
import ApartmentsWithPlansMock from '../__mocks__/ApartmentsWithPlans.mock'

/**
 * @file Stories - FloorplansGrid
 * @module components/organisms/Section/stories/FloorplansGrid
 */

export default {
  title: 'Components/Organisms/Section/Components/FloorplansGrid',
  component: FloorplansGrid,
  parameters: FloorplansGridStoryParams
}

/**
 * Default @link Section story.
 *
 * @returns {FloorplansGrid}
 */
export const Default = () => (
  <FloorplansGrid apartments={ApartmentsWithPlansMock} />
)
