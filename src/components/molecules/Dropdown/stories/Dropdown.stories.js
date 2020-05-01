// Packages
import React from 'react'
import { select } from '@storybook/addon-knobs'

// Component
import Dropdown from '..'

// Config
import { FloorplanSearchFormDropdownProps } from '../../../../config'

// Metadata
import {
  DropdownStoryParams,
  FloorplanSearchFormDropdownStoryParams
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
 * @link FloorplanSearchForm @link Dropdown story.
 *
 * @returns {Dropdown}
 */
export const FloorplanSearchFormDropdown = () => {
  const prop_keys = Object.keys(FloorplanSearchFormDropdownProps)
  const knob_label = 'FloorplanSearchFormDropdownProps.key'
  const key = select(knob_label, prop_keys, 'Bathrooms')

  return (
    <Dropdown {...getDropdownProps(FloorplanSearchFormDropdownProps[key])} />
  )
}

FloorplanSearchFormDropdown.story = {
  name: 'FloorplanSearchForm',
  parameters: FloorplanSearchFormDropdownStoryParams
}
