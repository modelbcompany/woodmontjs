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
 * Storybook parameters for the action @link Link story.
 *
 * @namespace IconLinkStoryParams
 */
export const IconLinkStoryParams = {}

/**
 * Storybook parameters for the @link MenuItem @link Link story.
 *
 * @namespace MenuItemLinkStoryParams
 * @property {object[]} backgrounds - Storybook Backgrounds config
 */
export const MenuItemLinkStoryParams = {
  backgrounds: [
    { ...StorybookBackgrounds.navy_5pd, default: false },
    { ...StorybookBackgrounds['light-blue'], default: false }
  ]
}

/**
 * Storybook parameters for the @link TableData @link Link story.
 *
 * @namespace TableDataLinkStoryParams
 */
export const TableDataLinkStoryParams = {

}
