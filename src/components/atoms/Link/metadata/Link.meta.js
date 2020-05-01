// Documentation
import mdx from '../Link.mdx'

// Config
import { StorybookBackgrounds } from '../../../../config/palettes'

/**
 * @file Story Metadata - Link
 * @module components/molecules/Link/metadata/Link
 */

/**
 * Storybook parameters for all @link Link stories.
 *
 * @namespace LinkStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const LinkStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}

/**
 * Storybook parameters for the @link Floorplan @link Link story.
 *
 * @namespace FloorplanLinkStoryParams
 */
export const FloorplanLinkStoryParams = {
  backgrounds: [StorybookBackgrounds.brand['$color-brand-silver-rust']]
}

/**
 * Storybook parameters for the action @link Link story.
 *
 * @namespace IconLinkStoryParams
 */
export const IconLinkStoryParams = {}
