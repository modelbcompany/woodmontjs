// Documentation
import mdx from '../Select.mdx'

/**
 * @file Story Metadata - Select
 * @module components/molecules/Select/metadata/Select
 */

/**
 * Storybook parameters for all @link Select stories.
 *
 * @namespace SelectStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const SelectStoryParams = {
  actions: {
    disabled: false
  },
  docs: { page: mdx }

}

/**
 * Storybook parameters for the Records Dropdown story.
 *
 * @namespace RecordsDropdownStoryParams
 * @property {object} knobs - Storybook Knobs config
 */
export const RecordsDropdownStoryParams = {
  knobs: {
    disabled: true
  }
}
