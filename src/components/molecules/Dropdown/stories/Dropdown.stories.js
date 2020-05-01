// Packages
import React from 'react'
import { select } from '@storybook/addon-knobs'

// Component
import Dropdown from '..'

// Config
import { FloorPlanSearchFormDropdownProps } from '../../../../config'

// Metadata
import {
  DropdownStoryParams,
  FloorPlanSearchFormDropdownStoryParams
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
 * @link FloorPlanSearchForm @link Dropdown story.
 *
 * @returns {Dropdown}
 */
export const FloorPlanSearchFormDropdown = () => {
  const prop_keys = Object.keys(FloorPlanSearchFormDropdownProps)
  const knob_label = 'FloorPlanSearchFormDropdownProps.key'
  const key = select(knob_label, prop_keys, 'Bathrooms')

  return (
    <Dropdown {...getDropdownProps(FloorPlanSearchFormDropdownProps[key])} />
  )
}

FloorPlanSearchFormDropdown.story = {
  name: 'FloorPlanSearchForm',
  parameters: FloorPlanSearchFormDropdownStoryParams
}
