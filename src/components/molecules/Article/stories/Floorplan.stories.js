// Packages
import React from 'react'

// Component
import { Floorplan } from '..'

// Metadata
import { FloorplanStoryParams } from '../metadata/Floorplan.meta'

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
