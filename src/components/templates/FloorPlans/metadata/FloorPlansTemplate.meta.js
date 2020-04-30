// Documentation
import mdx from '../FloorPlansTemplate.mdx'

/**
 * @file Story Metadata - FloorPlansTemplate
 * @module components/Components/Templates/FloorPlans/metadata/FloorPlansTemplate
 */

/**
 * Storybook parameters for all @link FloorPlansTemplate stories.
 *
 * @namespace FloorPlansTemplateStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const FloorPlansTemplateStoryParams = {
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
