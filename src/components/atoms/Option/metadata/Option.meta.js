// Documentation
import mdx from '../Option.mdx'

/**
 * @file Story Metadata - Option
 * @module components/molecules/Option/metadata/Option
 */

/**
 * Storybook parameters for all @link Option stories.
 *
 * @namespace OptionStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const OptionStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}
