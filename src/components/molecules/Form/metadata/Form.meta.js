// Documentation
import mdx from '../Form.mdx'

/**
 * @file Story Metadata - Form
 * @module components/molecules/Form/metadata/metadata/Form
 */

/**
 * Storybook parameters for all @link Form stories.
 *
 * @namespace FormStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FormStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
