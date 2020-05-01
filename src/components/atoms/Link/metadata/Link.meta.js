// Documentation
import mdx from '../Link.mdx'

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
