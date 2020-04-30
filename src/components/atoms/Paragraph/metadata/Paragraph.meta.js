// Documentation
import mdx from '../Paragraph.mdx'

/**
 * @file Story Metadata - Paragraph
 * @module components/molecules/Paragraph/metadata/Paragraph
 */

/**
 * Storybook parameters for all @link Paragraph stories.
 *
 * @namespace ParagraphStoryParams
 * @property {object} actions - Storybook Actions config
 * @property {object} docs - Storybook Docs config
 */
export const ParagraphStoryParams = {
  actions: {
    disabled: true
  },
  docs: { page: mdx }
}

/**
 * Storybook parameters for the @link TableData @link Paragraph story.
 *
 * @namespace TableDataTextStoryParams
 */
export const TableDataTextStoryParams = {}
