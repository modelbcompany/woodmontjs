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

// Mock Data
import DropdownListMock from '../__mocks__/DropdownList.mock'
import ListMock from '../__mocks__/List.mock'

/**
 * @file Stories - List
 * @module components/molecules/List/stories/List
 */

export default {
  title: 'Components/Molecules/List',
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
    className={text('className')}
    data-type={select('data-type', ['ordered', 'unordered'], 'unordered')}
  >
    {ListMock}
  </List>
)

/**
 * @link Dropdown @link List story.
 *
 * @returns {List}
 */
export const DropdownList = () => (
  <List
    className={`dropdown-list ${text('className')}`}
    data-items={array('data-items', DropdownListMock)}
  />
)

DropdownList.story = {
  name: 'Dropdown',
  parameters: DropdownListStoryParams
}
