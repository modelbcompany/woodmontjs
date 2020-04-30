// Documentation
import mdx from '../Fieldset.mdx'

/**
 * @file Story Metadata - Fieldset
 * @module components/molecules/Fieldset/metadata/Fieldset
 */

/**
 * Storybook parameters for all @link Fieldset stories.
 *
 * @namespace FieldsetStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FieldsetStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
