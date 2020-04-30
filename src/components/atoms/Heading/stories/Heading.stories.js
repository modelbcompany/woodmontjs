// Packages
import React from 'react'
import { text, number } from '@storybook/addon-knobs'

// Components
import Heading from '..'

// Metadata
import { HeadingStoryParams } from '../metadata/Heading.meta'

/**
 * @file Stories - Heading
 * @module components/atoms/Heading/stories/Heading
 */

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  parameters: HeadingStoryParams
}

/**
 * Default @link Heading story.
 *
 * @returns {Heading}
 */
export const Default = () => (
  <Heading className={text('className')} data-size={number('data-size', 1)}>
    {text('children')}
  </Heading>
)
