// Packages
import React from 'react'
import { text } from '@storybook/addon-knobs'

// Components
import Image from '..'

// Metadata
import {
  ImageStoryParams,
  ReactLogoStoryParams
} from '../metadata/Image.meta'

/**
 * @file Stories - Image
 * @module components/atoms/Image/stories/Image
 */

export default {
  title: 'Components/Atoms/Image',
  component: Image,
  parameters: ImageStoryParams
}

/**
 * Default @link Image story.
 *
 * @returns {Image}
 */
export const Default = () => (
  <Image
    alt={text('alt', 'Storybook badge')}
    src={text('src', 'https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg')}
  />
)

/**
 * React logo @link Image story.
 *
 * @returns {Image}
 */
export const ReactLogo = () => (
  <Image
    src='/assets/images/react-logo.svg'
    alt='React logo'
    className='react-logo-spin'
  />
)

ReactLogo.story = {
  parameters: ReactLogoStoryParams
}
