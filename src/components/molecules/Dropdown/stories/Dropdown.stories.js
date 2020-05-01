// Packages
import React from 'react'

// Component
import Dropdown from '..'

// Metadata
import {
  DropdownStoryParams,
  FloorPlanSearchFormDropdownStoryParams
} from '../metadata/Dropdown.meta'

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
export const FloorPlanSearchFormDropdown = () => (
  <Dropdown className='floor-plan-search-form-dropdown'>
    {/*  */}
  </Dropdown>
)

FloorPlanSearchFormDropdown.story = {
  name: 'FloorPlanSearchForm',
  parameters: FloorPlanSearchFormDropdownStoryParams
}
