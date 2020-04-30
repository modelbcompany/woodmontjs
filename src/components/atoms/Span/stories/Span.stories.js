// Packages
import React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import Span from '..'

// Metadata
import {
  BadgeStoryParams,
  SpanStoryParams
} from '../metadata/Span.meta'

/**
 * @file Stories - Span
 * @module components/atoms/Span/stories/Span
 */

export default {
  title: 'Components/Atoms/Span',
  component: Span,
  parameters: SpanStoryParams
}

/**
 * Default @link Span story.
 *
 * @returns {Span}
 */
export const Default = () => (
  <Span className={text('className')}>
    {text('children', 'Span text')}
  </Span>
)

/**
 * Renders a badge.
 *
 * @returns {Span}
 */
export const Badge = () => (
  <Span className={`badge ${text('className')}`}>
    {text('children', 'Badge Text')}
  </Span>
)

Badge.story = {
  parameters: BadgeStoryParams
}
