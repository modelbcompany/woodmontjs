// Documentation
import mdx from '../List.mdx'

/**
 * @file Story Metadata - List
 * @module components/molecules/List/metadata/List
 */

/**
 * Storybook parameters for all @link List stories.
 *
 * @namespace ListStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const ListStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}

/**
 * Storybook parameters for the @link Dropdown @link List story.
 *
 * @namespace DropdownListStoryParams
 */
export const DropdownListStoryParams = {}
