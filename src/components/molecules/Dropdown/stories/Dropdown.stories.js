// Packages
import React from 'react'
import { select } from '@storybook/addon-knobs'

// Component
import Dropdown from '..'

// Config
import { FloorplansSearchFormDropdownProps } from '../../../../config'

// Metadata
import {
  DropdownStoryParams,
  FloorplansSearchFormDropdownStoryParams
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
 * @link FloorplansSearchForm @link Dropdown story.
 *
 * @returns {Dropdown}
 */
export const FloorplansSearchFormDropdown = () => {
  const prop_keys = Object.keys(FloorplansSearchFormDropdownProps)
  const knob_label = 'FloorplansSearchFormDropdownProps.key'
  const key = select(knob_label, prop_keys, 'Bathrooms')

  return (
    <Dropdown {...getDropdownProps(FloorplansSearchFormDropdownProps[key])} />
  )
}

FloorplansSearchFormDropdown.story = {
  name: 'FloorplansSearchForm',
  parameters: FloorplansSearchFormDropdownStoryParams
}
