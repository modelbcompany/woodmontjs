// Documentation
import mdx from '../Item.mdx'

/**
 * @file Story Metadata - Item
 * @module components/molecules/Item/metadata/Item
 */

/**
 * Storybook parameters for all @link Item stories.
 *
 * @namespace ItemStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const ItemStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}

/**
 * Storybook parameters for the @link Dropdown @link List @link Item story.
 *
 * @namespace DropdownListItemParams
 */
export const DropdownListItemParams = {}
