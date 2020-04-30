// Documentation
import mdx from '../Button.mdx'

/**
 * @file Story Metadata - Button
 * @module components/atoms/Button/metadata/Button
 */

/**
 * Storybook parameters for all @link Button stories.
 *
 * @namespace ButtonStoryParams
 * @property {object} docs - Storybook Docs config
 */
export const ButtonStoryParams = {
  docs: { page: mdx }
}

/**
 * Storybook parameters for the Dropdown @link Button story.
 *
 * @namespace DropdownButtonStoryParams
 */
export const DropdownButtonStoryParams = {}

/**
 * Storybook parameters for the Icon @link Button story.
 *
 * @namespace IconButtonStoryParams
 */
export const IconButtonStoryParams = {}

/**
 * Storybook parameters for the Smooth Scroll @link Button story.
 *
 * @namespace SmoothScrollButtonStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} knobs - Storybook Knobs config
 */
export const SmoothScrollButtonStoryParams = {
  actions: { disabled: true },
  knobs: { disabled: true }
}
