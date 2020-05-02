// Documentation
import mdx from '../Article.mdx'

/**
 * @file Story Metadata - Floorplan
 * @module components/molecules/Article/metadata/Floorplan
 */

/**
 * Storybook parameters for all @link Floorplan stories.
 *
 * @namespace FloorplanStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FloorplanStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx },
  knobs: {
    disabled: true
  }
}
