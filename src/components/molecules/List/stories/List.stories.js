// Packages
import React from 'react'
import { text, select } from '@storybook/addon-knobs'

// Component
import List from '..'

// Metadata
import { ListStoryParams } from '../metadata/List.meta'

// Mock Data
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
