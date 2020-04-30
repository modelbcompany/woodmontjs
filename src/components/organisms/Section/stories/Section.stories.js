// Packages
import React from 'react'

// Component
import Section from '..'

// Metadata
import { SectionStoryParams } from '../metadata/Section.meta'

/**
 * @file Stories - Section
 * @module components/organisms/Section/stories/Section
 */

export default {
  title: 'Components/Organisms/Section',
  component: Section,
  parameters: SectionStoryParams
}

/**
 * Default @link Section story.
 *
 * @returns {Section}
 */
export const Default = () => <Section />
