// Documentation
import mdx from '../Section.mdx'

/**
 * @file Story Metadata - FloorplansGrid
 * @module components/organisms/Section/metadata/FloorplansGrid
 */

/**
 * Storybook parameters for all @link FloorplansGrid stories.
 *
 * @namespace FloorplansGridStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FloorplansGridStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
