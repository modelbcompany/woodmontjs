// Packages
import React from 'react'
import { array, text, select } from '@storybook/addon-knobs'

// Component
import List from '..'

// Metadata
import {
  DropdownListStoryParams,
  ListStoryParams
} from '../metadata/List.meta'

// Config
import { FloorPlanSearchFormDropdownItems } from '../../../../config'

// Mock Data
import DropdownListMock from '../__mocks__/DropdownList.mock'

/**
 * @file Stories - List / Dropdown
 * @module components/molecules/List/stories/DropdownList
 */

export default {
  title: 'Components/Molecules/List/Dropdown',
  component: List,
  parameters: ListStoryParams
}

/**
 * Default @link List story.
 *
 * @returns {List}
 */
export const Default = () => (
  <List
    className={`dropdown-list ${text('className')}`}
    data-items={array('data-items', DropdownListMock)}
  />
)

Default.story = {
  parameters: DropdownListStoryParams
}

/**
 * @link FloorPlanSearchForm @link Dropdown @link List story.
 *
 * @returns {List}
 */
export const FloorPlanSearchFormDropdownList = () => {
  const prop_keys = Object.keys(FloorPlanSearchFormDropdownItems)
  const knob_label = 'FloorPlanSearchFormDropdownItems.key'
  const key = select(knob_label, prop_keys, 'Bathrooms')

  return (
    <List
      className='dropdown-list floor-plan-search-form-dropdown-list'
      data-items={FloorPlanSearchFormDropdownItems[key]}
    />
  )
}

FloorPlanSearchFormDropdownList.story = {
  name: 'FloorPlanSearchForm',
  parameters: DropdownListStoryParams
}
