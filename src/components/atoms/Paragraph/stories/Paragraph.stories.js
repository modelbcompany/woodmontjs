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
  <Paragraph className={text('className')}>
    {text('children')}
  </Paragraph>
)
