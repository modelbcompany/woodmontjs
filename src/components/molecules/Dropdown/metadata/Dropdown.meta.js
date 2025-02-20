// Documentation
import mdx from '../Dropdown.mdx'

/**
 * @file Story Metadata - Dropdown
 * @module components/molecules/Dropdown/metadata/Dropdown
 */

/**
 * Storybook parameters for all @link Dropdown stories.
 *
 * @namespace DropdownStoryParams
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const DropdownStoryParams = {
  docs: {
    page: mdx
  },
  knobs: {
    disabled: true
  }
}

/**
 * Storybook parameters for the @link FloorplansSearchForm @link Dropdown story.
 *
 * @namespace FloorplansSearchFormDropdownStoryParams
 * @property {object} knobs - Storybook Knobs config
 */
export const FloorplansSearchFormDropdownStoryParams = {
  knobs: {
    disabled: false
  }
}
