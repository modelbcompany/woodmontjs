// Packages
import React from 'react'
import { boolean, object, text } from '@storybook/addon-knobs'

// Components
import Link from '..'

// Metadata
import {
  FloorplanLinkStoryParams,
  IconLinkStoryParams,
  LinkStoryParams
} from '../metadata/Link.meta'

/**
 * @file Stories - Link
 * @module components/atoms/Link/stories/Link
 */

export default {
  title: 'Components/Atoms/Link',
  component: Link,
  parameters: LinkStoryParams
}

/**
 * Default @link Link story.
 *
 * @returns {Link}
 */
export const Default = () => (
  <Link className={text('className')} href={text('href')}>
    {text('children', 'Link text')}
  </Link>
)

/**
 * Default @link Link story.
 *
 * @returns {Link}
 */
export const FloorplanLink = () => {
  const download = boolean('download', true)

  return (
    <Link
      className={`floorplan-link ${text('className')}`}
      download={download}
      href={text('href')}
    >
      {download ? 'Download Floorplan' : 'Apply Now'}
    </Link>
  )
}

FloorplanLink.story = {
  name: 'Floorplan',
  parameters: FloorplanLinkStoryParams
}

/**
 * Renders an @link Icon component on either side of the link text.
 *
 * @returns {Link}
 */
export const IconLink = () => (
  <Link
    className={text('className')}
    data-icon={object('data-icon', {
      children: 'keyboard_arrow_right',
      'data-position': 'right'
    })}
    href={text('href')}
  >
    {text('children', 'Icon Link')}
  </Link>
)

IconLink.story = {
  parameters: IconLinkStoryParams
}
