// Packages
import React from 'react'

// Component
import { FloorPlansGrid } from '..'

// Metadata
import { FloorPlansGridStoryParams } from '../metadata/FloorPlansGrid.meta'

// Mock Data
import { FloorplansMock } from '../__mocks__/Floorplans.mock'

/**
 * @file Stories - FloorPlansGrid
 * @module components/organisms/Section/stories/FloorPlansGrid
 */

export default {
  title: 'Components/Organisms/Section/Components/FloorPlansGrid',
  component: FloorPlansGrid,
  parameters: FloorPlansGridStoryParams
}

/**
 * Default @link Section story.
 *
 * @returns {FloorPlansGrid}
 */
export const Default = () => <FloorPlansGrid floorplans={FloorplansMock} />
