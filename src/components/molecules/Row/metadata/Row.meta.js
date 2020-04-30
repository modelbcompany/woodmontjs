// Documentation
import mdx from '../Row.mdx'

/**
 * @file Story Metadata - Row
 * @module components/molecules/Row/metadata/Row
 */

/**
 * Storybook parameters for all @link Row stories.
 *
 * @namespace RowStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const RowStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
