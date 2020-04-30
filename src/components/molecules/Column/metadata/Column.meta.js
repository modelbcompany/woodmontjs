// Documentation
import mdx from '../Column.mdx'

/**
 * @file Story Metadata - Column
 * @module components/molecules/Column/metadata/Column
 */

/**
 * Storybook parameters for all @link Column stories.
 *
 * @namespace ColumnStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const ColumnStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
