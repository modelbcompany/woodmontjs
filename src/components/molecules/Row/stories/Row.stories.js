// Packages
import React from 'react'

// Component
import Row from '..'

// Metadata
import { RowStoryParams } from '../metadata/Row.meta'

/**
 * @file Stories - Row
 * @module components/molecules/Row/stories/Row
 */

export default {
  title: 'Components/Molecules/Row',
  component: Row,
  parameters: RowStoryParams
}

/**
 * Default @link Row story.
 *
 * @returns {Row}
 */
export const Default = () => <Row />
