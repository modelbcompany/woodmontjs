// Documentation
import mdx from '../Heading.mdx'

/**
 * @file Story Metadata - Heading
 * @module components/molecules/Heading/metadata/Heading
 */

/**
 * Storybook parameters for all @link Heading stories.
 *
 * @namespace HeadingStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const HeadingStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}

/**
 * Storybook parameters for the @link FloorplansGrid @link Heading story.
 *
 * @namespace FloorplansGridHeadingStoryParams
 * @property {object} backgrounds - Storybook Backgrounds config
 */
export const FloorplansGridHeadingStoryParams = {
  backgrounds: [
    {
      name: 'Marble Brown',
      value: '#3c312d',
      default: true
    }
  ]
}
