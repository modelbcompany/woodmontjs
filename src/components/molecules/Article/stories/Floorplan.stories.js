// Packages
import React from 'react'

// Component
import { Floorplan } from '..'

// Metadata
import { FloorplanStoryParams } from '../metadata/Floorplan.meta'

// Mocks
import FloorplanMock from '../__mocks__/Floorplan.mock'

/**
 * @file Stories - Floorplan
 * @module components/molecules/Article/stories/Floorplan
 */

export default {
  title: 'Components/Molecules/Article/Components/Floorplan',
  component: 'Floorplan',
  parameters: FloorplanStoryParams
}

/**
 * Default @link Floorplan story.
 *
 * @returns {Floorplan}
 */
export const Default = () => <Floorplan />

/**
 * @link Floorplan with RENTCafé data.
 *
 * @returns {Floorplan}
 */
export const WithRentCafeData = () => <Floorplan data={FloorplanMock} />
