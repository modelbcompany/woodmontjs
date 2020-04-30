// Packages
import React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import Paragraph from '..'

// Metadata
import {
  ParagraphStoryParams,
  TableDataTextStoryParams
} from '../metadata/Paragraph.meta'

/**
 * @file Stories - Paragraph
 * @module components/atoms/Paragraph/stories/Paragraph
 */

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
  parameters: ParagraphStoryParams
}

/**
 * Default @link Paragraph story.
 *
 * @returns {Paragraph}
 */
export const Default = () => (
  <Paragraph className={text('className')}>
    {text('children')}
  </Paragraph>
)

/**
 * Story for @link Paragraph components used in @link TableData components.
 *
 * @returns {Paragraph}
 */
export const TableDataText = () => (
  <Paragraph className='table-data-text'>
    {text('children', 'Work on Component Library')}
  </Paragraph>
)

TableDataText.story = {
  name: 'TableData',
  parameters: TableDataTextStoryParams
}
