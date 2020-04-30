// Packages
import React from 'react'

// Component
import Fieldset from '..'

// Metadata
import { FieldsetStoryParams } from '../metadata/Fieldset.meta'

/**
 * @file Stories - Fieldset
 * @module components/molecules/Fieldset/stories/Fieldset
 */

export default {
  title: 'Components/Molecules/Fieldset',
  component: Fieldset,
  parameters: FieldsetStoryParams
}

/**
 * Default @link Fieldset story.
 *
 * @returns {Fieldset}
 */
export const Default = () => <Fieldset />
