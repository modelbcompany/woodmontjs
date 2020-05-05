// Documentation
import mdx from '../FloorplansTemplate.mdx'

/**
 * @file Story Metadata - FloorplansTemplate
 * @module components/templates/Floorplans/metadata/FloorplansTemplate
 */

/**
 * Storybook parameters for all @link FloorplansTemplate stories.
 *
 * @namespace FloorplansTemplateStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FloorplansTemplateStoryParams = {
  actions: {
    disabled: true
  },
  docs: {
    page: mdx
  },
  knobs: {
    disabled: true
  }
}
