// Documentation
import mdx from '../Section.mdx'

/**
 * @file Story Metadata - FloorPlansGrid
 * @module components/organisms/Section/metadata/FloorPlansGrid
 */

/**
 * Storybook parameters for all @link FloorPlansGrid stories.
 *
 * @namespace FloorPlansGridStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FloorPlansGridStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
