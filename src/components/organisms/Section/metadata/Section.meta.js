// Documentation
import mdx from '../Section.mdx'

/**
 * @file Story Metadata - Section
 * @module components/organisms/Section/metadata/Section
 */

/**
 * Storybook parameters for all @link Section stories.
 *
 * @namespace SectionStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const SectionStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
