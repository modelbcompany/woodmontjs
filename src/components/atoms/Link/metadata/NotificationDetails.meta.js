// Documentation
import mdx from '../Link.mdx'

/**
 * @file Story Metadata - NotificationDetails
 * @module components/molecules/Link/metadata/NotificationDetails
 */

/**
 * Storybook parameters for all @link NotificationDetails stories.
 *
 * @namespace NotificationDetailsStoryParams
 * @property {object} docs - Storybook Docs config
 * @property {object} knobs - Storybook Knobs config
 */
export const NotificationDetailsStoryParams = {
  docs: {
    page: mdx
  },
  knobs: {
    disabled: true
  }
}

/**
 * Storybook parameters for the email details @link NotificationDetails story.
 *
 * @namespace EmailDetailsStoryParams
 */
export const EmailDetailsStoryParams = {}

/**
 * Storybook parameters for the error details @link NotificationDetails story.
 *
 * @namespace ErrorDetailsStoryParams
 */
export const ErrorDetailsStoryParams = {}

/**
 * Storybook parameters for the text details @link NotificationDetails story.
 *
 * @namespace TextDetailsStoryParams
 */
export const TextDetailsStoryParams = {}
