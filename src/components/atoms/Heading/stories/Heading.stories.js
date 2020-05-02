// Packages
import React from 'react'
import { text, number } from '@storybook/addon-knobs'

// Components
import Heading from '..'

// Metadata
import {
  FloorplansGridHeadingStoryParams,
  HeadingStoryParams
} from '../metadata/Heading.meta'

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

/**
 * @link FloorplansGrid @link Heading story.
 *
 * @returns {Heading}
 */
export const FloorplansGridHeading = () => (
  <Heading
    className={text('className', 'floorplans-grid-title')}
    data-size={3}
  >
    {text('children', 'One bedrooom')}
  </Heading>
)

FloorplansGridHeading.story = {
  name: 'FloorplansGrid',
  parameters: FloorplansGridHeadingStoryParams
}

/**
 * @link FloorplansTemplate @link Heading story.
 *
 * @returns {Heading}
 */
export const FloorplansTemplateHeading = () => (
  <Heading
    className={text('className', 'adt-floorplans-title')}
    data-size={number('data-size', 1)}
  >
    {text('children', 'Floor Plans')}
  </Heading>
)

FloorplansTemplateHeading.story = {
  name: 'FloorplansTemplate'
}
