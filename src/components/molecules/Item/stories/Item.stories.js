// Packages
import React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import Item from '..'

// Metadata
import { DropdownListItemParams, ItemStoryParams } from '../metadata/Item.meta'

/**
 * @file Stories - Item
 * @module components/molecules/Item/stories/Item
 */

export default {
  title: 'Components/Molecules/Item',
  component: Item,
  parameters: ItemStoryParams
}

/**
 * Default @link Item story.
 *
 * @returns {Item}
 */
export const Default = () => (
  <Item className={text('className')}>
    {text('children', 'List item')}
  </Item>
)

/**
 * @link Dropdown @link List @link Item story.
 *
 * @returns {Item}
 */
export const DropdownListItem = () => (
  <Item
    className={`dropdown-item ${text('className', 'floor-plan-search-form-dropdown-item')}`}
    role={text('role', 'button')}
  >
    {text('children', 'Studio')}
  </Item>
)

DropdownListItem.story = {
  name: 'Dropdown List',
  parameters: DropdownListItemParams
}
