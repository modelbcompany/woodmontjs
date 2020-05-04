// Packages
import React from 'react'
import { select } from '@storybook/addon-knobs'

// Component
import Dropdown from '..'

// Config
import { FloorPlansSearchFormDropdownProps } from '../../../../config'

// Metadata
import {
  DropdownStoryParams,
  FloorPlansSearchFormDropdownStoryParams
} from '../metadata/Dropdown.meta'

// Utility Functions
import { getDropdownProps } from '../../../../utils/react.utils'

/**
 * @file Stories - Dropdown
 * @module components/molecules/Dropdown/stories/Dropdown
 */

export default {
  title: 'Components/Molecules/Dropdown',
  component: Dropdown,
  parameters: DropdownStoryParams
}

/**
 * @link FloorPlansSearchForm @link Dropdown story.
 *
 * @returns {Dropdown}
 */
export const FloorPlansSearchFormDropdown = () => {
  const prop_keys = Object.keys(FloorPlansSearchFormDropdownProps)
  const knob_label = 'FloorPlansSearchFormDropdownProps.key'
  const key = select(knob_label, prop_keys, 'Bathrooms')

  return (
    <Dropdown {...getDropdownProps(FloorPlansSearchFormDropdownProps[key])} />
  )
}

FloorPlansSearchFormDropdown.story = {
  name: 'FloorPlansSearchForm',
  parameters: FloorPlansSearchFormDropdownStoryParams
}
