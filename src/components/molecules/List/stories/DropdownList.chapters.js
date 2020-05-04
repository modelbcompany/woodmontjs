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
import { FloorPlansSearchFormDropdownItems } from '../../../../config'

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
 * @link FloorPlansSearchForm @link Dropdown @link List story.
 *
 * @returns {List}
 */
export const FloorPlansSearchFormDropdownList = () => {
  const prop_keys = Object.keys(FloorPlansSearchFormDropdownItems)
  const knob_label = 'FloorPlansSearchFormDropdownItems.key'
  const key = select(knob_label, prop_keys, 'Bathrooms')

  return (
    <List
      className='dropdown-list floorplan-search-form-dropdown-list'
      data-items={FloorPlansSearchFormDropdownItems[key]}
    />
  )
}

FloorPlansSearchFormDropdownList.story = {
  name: 'FloorPlansSearchForm',
  parameters: DropdownListStoryParams
}
