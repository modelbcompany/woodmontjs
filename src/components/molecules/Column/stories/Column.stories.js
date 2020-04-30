// Packages
import React from 'react'

// Component
import Column from '..'

// Metadata
import { ColumnStoryParams } from '../metadata/Column.meta'

/**
 * @file Stories - Column
 * @module components/molecules/Column/stories/Column
 */

export default {
  title: 'Components/Molecules/Column',
  component: Column,
  parameters: ColumnStoryParams
}

/**
 * Default @link Column story.
 *
 * @returns {Column}
 */
export const Default = () => <Column />
