// Documentation
import mdx from '../Image.mdx'

// Config
import { StorybookBackgrounds } from '../../../../config/palettes'

/**
 * @file Story Metadata - Image
 * @module components/molecules/Image/metadata/Image
 */

/**
 * Storybook parameters for all @link Image stories.
 *
 * @namespace ImageStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const ImageStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}

/**
 * Storybook parameters for the @link Floorplan @link Image story.
 *
 * @namespace FloorplanImageStoryParams
 */
export const FloorplanImageStoryParams = {}

/**
 * Storybook parameters for the React Logo @link Image story.
 *
 * @namespace ReactLogoStoryParams
 * @property {object[]} backgrounds - Storybook Backgrounds config
 * @property {object} knobs - Storybook Knobs config
 */
export const ReactLogoStoryParams = {
  backgrounds: [StorybookBackgrounds.react['$color-react-gray']],
  knobs: {
    disabled: true
  }
}
