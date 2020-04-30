// Packages
import React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import Divider from '..'

// Metadata
import { DividerStoryParams } from '../metadata/Divider.meta'

/**
 * @file Stories - Divider
 * @module components/atoms/Divider/stories/Divider
 */

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
  parameters: DividerStoryParams
}

/**
 * Default @link Divider story.
 *
 * @returns {Divider}
 */
export const Default = () => <Divider className={text('className')} />
