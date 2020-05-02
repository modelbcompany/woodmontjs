// Packages
import React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import Paragraph from '..'

// Metadata
import { ParagraphStoryParams } from '../metadata/Paragraph.meta'

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
  <Paragraph className={text('className', 'adt-floorplans-blurb')}>
    {text('children', 'Choose from a variety of spacious and contemporary floor plans available in one-bedroom, one-bedroom with den, two-bedroom, two-bedroom with den, and three-bedroom layouts.')}
  </Paragraph>
)
