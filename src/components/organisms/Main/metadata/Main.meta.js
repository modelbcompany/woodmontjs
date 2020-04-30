// Documentation
import mdx from '../Main.mdx'

/**
 * @file Story Metadata - Main
 * @module components/organisms/Main/metadata/Main
 */

/**
 * Storybook parameters for all @link Main stories.
 *
 * @namespace MainStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const MainStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
