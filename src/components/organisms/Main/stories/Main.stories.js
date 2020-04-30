// Packages
import React from 'react'

// Component
import Main from '..'

// Metadata
import { MainStoryParams } from '../metadata/Main.meta'

/**
 * @file Stories - Main
 * @module components/organisms/Main/stories/Main
 */

export default {
  title: 'Components/Organisms/Main',
  component: Main,
  parameters: MainStoryParams
}

/**
 * Default @link Main story.
 *
 * @returns {Main}
 */
export const Default = () => <Main />
